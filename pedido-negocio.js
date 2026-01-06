/* ==========================
   CARGA INICIAL
========================== */
/* ==========================
   SEGURIDAD DE ACCESO
========================== */

const PASS_COCINA = "230321"; // 🔒 CAMBIA ESTO

document.addEventListener("DOMContentLoaded", () => {
  const acceso = localStorage.getItem("acceso_cocina");

  if(acceso === "ok"){
    desbloquearPanel();
  }
});
function verificarAcceso(){
  const pass = document.getElementById("authPass").value;
  const err  = document.getElementById("authError");

  if(pass === PASS_COCINA){
    localStorage.setItem("acceso_cocina","ok");
    desbloquearPanel();
  }else{
    err.textContent = "Contraseña incorrecta";
  }
}

function desbloquearPanel(){
  document.getElementById("authOverlay").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  if(localStorage.getItem("acceso_cocina") === "ok"){
    importarDesdeURL();
    renderFila();
    setInterval(renderFila, 3000);
  }
});

function cerrarSesionCocina(){
  localStorage.removeItem("acceso_cocina");
  location.reload();
}

/* ==========================
   IMPORTAR DESDE LINK
========================== */

function importarDesdeURL(){
  const params = new URLSearchParams(window.location.search);
  const tel = params.get("tel");
  const pedidoTxt = params.get("pedido");

  if(!tel || !pedidoTxt) return;

  const key = "pedido_" + tel;

  if(!localStorage.getItem(key)){
    const pedido = {
      telefono: tel,
      texto: decodeURIComponent(pedidoTxt),
      estado: "RECIBIDO",
      fecha: new Date().toLocaleString()
    };

    localStorage.setItem(key, JSON.stringify(pedido));

    let cola = JSON.parse(localStorage.getItem("cola_pedidos")) || [];
    if(!cola.includes(tel)){
      cola.push(tel);
      localStorage.setItem("cola_pedidos", JSON.stringify(cola));
    }
  }

  history.replaceState({}, document.title, location.pathname);
}

/* ==========================
   RENDER FILA
========================== */

function renderFila(){
  const fila = JSON.parse(localStorage.getItem("cola_pedidos")) || [];
  const cont = document.getElementById("filaPedidos");

  document.getElementById("contadorPedidos").textContent =
    fila.length ? `${fila.length} pedido(s)` : "Sin pedidos";

  if(fila.length === 0){
    cont.innerHTML = `<p style="text-align:center;color:#777;">No hay pedidos</p>`;
    return;
  }

  cont.innerHTML = fila.map((tel, i) => {
    const p = JSON.parse(localStorage.getItem("pedido_" + tel));
    if(!p) return "";

    return `
      <div class="pedido">
        <div class="pedido-header">
          <div class="pedido-num">#${i+1} · ${p.telefono}</div>
          <span class="estado ${p.estado}">${p.estado.replace("_"," ")}</span>
        </div>

        <div class="pedido-body">

  <div class="pedido-section">
    <span class="sec-title">🍽️ Pedido</span>
    <pre class="pedido-items">${extraerSeccion(p.texto, "🍽️", "-----------------------")}</pre>
  </div>

  <div class="pedido-section grid">
    <div>
      <span class="sec-title">💰 Total</span>
      <strong>${extraerLinea(p.texto, "Total:")}</strong>
    </div>
    <div>
      <span class="sec-title">💳 Pago</span>
      <strong>${extraerLinea(p.texto, "Método de pago:")}</strong>
    </div>
  </div>

  <div class="pedido-section">
    <span class="sec-title">👤 Cliente</span>
    <div class="sec-text">${extraerLinea(p.texto, "Nombre:")}</div>
    <div class="sec-text">${extraerLinea(p.texto, "Teléfono:")}</div>
  </div>

</div>


        <div class="acciones">
          <button class="btn-prep" onclick="cambiarEstado('${tel}','PREPARACION')">
            🔵 Preparación
          </button>
          <button class="btn-camino" onclick="cambiarEstado('${tel}','EN_CAMINO')">
            🚚 En camino
          </button>
          <button class="btn-ok" onclick="entregarPedido('${tel}')">
            ✅ Entregado
          </button>
        </div>
      </div>
    `;
  }).join("");
}
function extraerLinea(txt, clave){
  const l = txt.split("\n").find(x => x.includes(clave));
  return l ? l.replace(clave, "").replace("*","").trim() : "-";
}

function extraerSeccion(txt, inicio, fin){
  const i = txt.indexOf(inicio);
  const f = txt.indexOf(fin);
  if(i === -1 || f === -1) return "";
  return txt.substring(i, f).replace(inicio, "").trim();
}

/* ==========================
   CAMBIAR ESTADO
========================== */

function cambiarEstado(tel, estado){
  const key = "pedido_" + tel;
  const p = JSON.parse(localStorage.getItem(key));
  if(!p) return;

  p.estado = estado;
  localStorage.setItem(key, JSON.stringify(p));

  enviarWhatsEstado(p);
  renderFila();
}

/* ==========================
   ENTREGAR
========================== */

function entregarPedido(tel){
  const key = "pedido_" + tel;
  const p = JSON.parse(localStorage.getItem(key));
  if(!p) return;

  // marcar entregado
  p.estado = "ENTREGADO";
  localStorage.setItem(key, JSON.stringify(p));

  // 🔔 WhatsApp
  enviarWhatsEstado(p);

  // 📊 REGISTRAR EN RESUMEN DIARIO
  const resumen = obtenerResumenHoy();

  resumen.pedidos += 1;
  resumen.totalVendido += extraerTotalPedido(p.texto);

  if(tieneEnvio(p.texto)){
    resumen.envios += 1;
  }

  guardarResumenHoy(resumen);

  // quitar de la cola
  let cola = JSON.parse(localStorage.getItem("cola_pedidos")) || [];
  cola = cola.filter(x => x !== tel);
  localStorage.setItem("cola_pedidos", JSON.stringify(cola));

  renderFila();
}

/* ==========================
   WHATSAPP SEGUIMIENTO
========================== */

function enviarWhatsEstado(p){
  const estados = {
    RECIBIDO: "🟡 *Recibido*",
    PREPARACION: "🔵 *En preparación*",
    EN_CAMINO: "🚚 *En camino*",
    ENTREGADO: "✅ *Entregado*"
  };

  const msg =
`🍟 *La Carpita*
Hola 👋

Tu pedido está:
👉 ${estados[p.estado]}

Gracias por tu preferencia 💛`;

  window.open(
    `https://wa.me/${p.telefono}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}


/* ==========================
   LIMPIAR ENTREGADOS
========================== */

function limpiarEntregados(){
  Object.keys(localStorage)
    .filter(k => k.startsWith("pedido_"))
    .forEach(k => {
      const p = JSON.parse(localStorage.getItem(k));
      if(p?.estado === "ENTREGADO"){
        localStorage.removeItem(k);
      }
    });

  renderFila();
}
/* ==========================
   RESUMEN DIARIO
========================== */

function obtenerFechaHoy(){
  return new Date().toISOString().split("T")[0]; // YYYY-MM-DD
}

function obtenerResumenHoy(){
  const key = "resumen_" + obtenerFechaHoy();
  return JSON.parse(localStorage.getItem(key)) || {
    totalVendido: 0,
    pedidos: 0,
    envios: 0
  };
}

function guardarResumenHoy(res){
  const key = "resumen_" + obtenerFechaHoy();
  localStorage.setItem(key, JSON.stringify(res));
}
function extraerTotalPedido(texto){
  const linea = texto.split("\n").find(l => l.includes("Total:"));
  if(!linea) return 0;
  return parseFloat(linea.replace(/[^0-9.]/g,"")) || 0;
}

function tieneEnvio(texto){
  const linea = texto.split("\n").find(l => l.includes("Envío:"));
  if(!linea) return false;
  const monto = parseFloat(linea.replace(/[^0-9.]/g,"")) || 0;
  return monto > 0;
}
function verResumenHoy(){
  const r = obtenerResumenHoy();

  mostrarAlert(
    "📊 Corte del día",
`🧾 Pedidos: ${r.pedidos}
💰 Total vendido: $${r.totalVendido.toFixed(2)}
🚚 Envíos: ${r.envios}`
  );
}

/* ==========================
   ALERTA BONITA
========================== */

function mostrarAlert(titulo, mensaje){
  document.getElementById("alertTitle").textContent = titulo || "Aviso";
  document.getElementById("alertMessage").textContent = mensaje || "";
  document.getElementById("alertOverlay").style.display = "flex";
}

function cerrarAlert(){
  document.getElementById("alertOverlay").style.display = "none";
}
