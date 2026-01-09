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
function extraerUrlUbicacion(txt){
  const linea = txt.split("\n").find(l => l.includes("maps.google") || l.includes("google.com/maps"));
  return linea ? linea.trim() : null;
}

function tieneUbicacion(txt){
  return !!extraerUrlUbicacion(txt);
}

function abrirUbicacion(txt){
  const url = extraerUrlUbicacion(txt);
  if(url){
    window.open(url, "_blank");
  }else{
    mostrarAlert("Ubicación", "Este pedido no tiene ubicación disponible.");
  }
}

/* ==========================
   IMPORTAR DESDE LINK
========================== */

function importarDesdeURL(){
  history.replaceState({}, document.title, location.pathname);
}



/* ==========================
   RENDER FILA
========================== */

function renderFila(){
  const fila = JSON.parse(localStorage.getItem("cola_pedidos")) || [];
   fila = fila
    .map(x => {
      if(typeof x === "string"){
        // pedido viejo → NO SE PUEDE RECUPERAR
        return null;
      }
      return x;
    })
    .filter(Boolean);

  localStorage.setItem("cola_pedidos", JSON.stringify(fila));
  const cont = document.getElementById("filaPedidos");

  document.getElementById("contadorPedidos").textContent =
    fila.length ? `${fila.length} pedido(s)` : "Sin pedidos";

  if(fila.length === 0){
    cont.innerHTML = `<p style="text-align:center;color:#777;">No hay pedidos</p>`;
    return;
  }

  cont.innerHTML = fila.map((ref, i) => {
  const pedidos = JSON.parse(
    localStorage.getItem("pedidos_" + ref.tel)
  ) || [];

  const p = pedidos.find(x => x.id === ref.id);
  if(!p) return "";


    return `
      <div class="pedido">
        <div class="pedido-header">
          <div class="pedido-num">#${i+1} · ${p.telefono} · Pedido ${p.id}</div>
          <span class="estado ${p.estado}">${p.estado.replace("_"," ")}</span>
        </div>

        <div class="pedido-body">
  <!-- 🍽️ ALIMENTOS -->
  <div class="pedido-section">
    <span class="sec-title">🍽️ Pedido</span>
    <pre class="pedido-items">
${extraerSeccion(p.texto, "🍽️", "-----------------------")}
    </pre>
  </div>
 <div class="pedido-section grid">
  <div>
    <span class="sec-title">💰 Total</span>
    <strong>${extraerLinea(p.texto, "Total:")}</strong>
  </div>

<div>
  <span class="sec-title">💳 Pago</span>
  <strong>
    ${esPagoMixto(p.texto)
      ? "Mixto"
      : extraerLinea(p.texto, "Método de pago:")}
  </strong>
</div>

${esPagoMixto(p.texto) ? `
${extraerMonto(p.texto, "Efectivo") ? `
<div>
  <span class="sec-title">💵 Efectivo</span>
  <strong>${extraerMonto(p.texto, "Efectivo")}</strong>
</div>` : ""}

${extraerMonto(p.texto, "Tarjeta") ? `
<div>
  <span class="sec-title">💳 Tarjeta</span>
  <strong>${extraerMonto(p.texto, "Tarjeta")}</strong>
</div>` : ""}

${tieneTransferencia(p.texto) ? `
<div>
  <span class="sec-title">🏦 Transferencia</span>
  <strong>${extraerMontoTransferencia(p.texto)}</strong>
</div>` : ""}
` : ""}



  ${extraerPagoCon(p.texto) !== "-" ? `
  <div>
    <span class="sec-title">💵 Pagas con</span>
    <strong>${extraerPagoCon(p.texto)}</strong>
  </div>` : ""}

  ${extraerCambio(p.texto) !== "-" ? `
  <div>
    <span class="sec-title">🔁 Cambio</span>
    <strong>${extraerCambio(p.texto)}</strong>
  </div>` : ""}
</div>


        <div class="acciones">
  <button class="btn-prep" onclick="cambiarEstado('${ref.tel}', ${ref.id}, 'PREPARACION')">
    🔵 Preparación
  </button>

  <!-- ESTE YA ENTREGA -->
  <button class="btn-camino" onclick="entregarPedido('${ref.tel}', ${ref.id})">
    🚚 En camino
  </button>

  <!-- NUEVO BOTÓN -->
  <button class="btn-cancelar" onclick="cancelarPedido('${ref.tel}', ${ref.id})">
    ❌ Cancelado
  </button>
  ${tieneUbicacion(p.texto) ? `
<button class="btn-ubi" onclick='abrirUbicacion(${JSON.stringify(p.texto)})'>
  📍 Abrir ubicación
</button>
` : ""}

</div>

      </div>
    `;
  }).join("");
}
function cancelarPedido(tel, id){
  const key = "pedidos_" + tel;
  let pedidos = JSON.parse(localStorage.getItem(key)) || [];

  const p = pedidos.find(x => x.id === id);
  if(!p) return;

  // quitar de pedidos
  pedidos = pedidos.filter(x => x.id !== id);
  localStorage.setItem(key, JSON.stringify(pedidos));

  // quitar de cola
  let cola = JSON.parse(localStorage.getItem("cola_pedidos")) || [];
  cola = cola.filter(x => !(x.tel === tel && x.id === id));
  localStorage.setItem("cola_pedidos", JSON.stringify(cola));

  // WhatsApp
  window.open(
    `https://wa.me/${tel}?text=${encodeURIComponent(
      "🍟 *La Carpita*\n\nTu pedido fue *cancelado* ❌"
    )}`,
    "_blank"
  );

  renderFila();
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
function extraerPagoCon(txt){
  return extraerLinea(txt, "Pagas con:");
}

function extraerCambio(txt){
  return extraerLinea(txt, "Cambio:");
}
function esPagoMixto(txt){
  return txt.toLowerCase().includes("mixto");
}

function extraerMonto(txt, clave){
  const l = txt.split("\n").find(x => x.toLowerCase().includes(clave.toLowerCase()));
  if(!l) return null;
  const n = parseFloat(l.replace(/[^0-9.]/g,""));
  return isNaN(n) ? null : `$${n.toFixed(2)}`;
}
function tieneTransferencia(txt){
  return txt.toLowerCase().includes("transferencia");
}

function extraerMontoTransferencia(txt){
  // si no viene monto explícito, calculamos el resto
  const total = extraerTotalPedido(txt);
  const efectivo = extraerMonto(txt, "Efectivo");

  if(efectivo){
    const ef = parseFloat(efectivo.replace(/[^0-9.]/g,"")) || 0;
    const resto = total - ef;
    return resto > 0 ? `$${resto.toFixed(2)}` : "-";
  }
  return "-";
}

/* ==========================
   CAMBIAR ESTADO
========================== */

function cambiarEstado(tel, id, estado){
  const key = "pedidos_" + tel;
  let pedidos = JSON.parse(localStorage.getItem(key)) || [];

  const p = pedidos.find(x => x.id === id);
  if(!p) return;

  p.estado = estado;
  localStorage.setItem(key, JSON.stringify(pedidos));

  enviarWhatsEstado(p);
  renderFila();
}


/* ==========================
   ENTREGAR
========================== */

function entregarPedido(tel, id){
  const key = "pedidos_" + tel;
  let pedidos = JSON.parse(localStorage.getItem(key)) || [];

  const p = pedidos.find(x => x.id === id);
  if(!p) return;

  p.estado = "EN_CAMINO";
  localStorage.setItem(key, JSON.stringify(pedidos));

  // quitar solo este pedido de la cola
  let cola = JSON.parse(localStorage.getItem("cola_pedidos")) || [];
  cola = cola.filter(x => !(x.tel === tel && x.id === id));
  localStorage.setItem("cola_pedidos", JSON.stringify(cola));

  enviarWhatsEstado(p);
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
    .filter(k => k.startsWith("pedidos_"))
    .forEach(k => {
      let pedidos = JSON.parse(localStorage.getItem(k)) || [];
      pedidos = pedidos.filter(p => p.estado !== "ENTREGADO");
      localStorage.setItem(k, JSON.stringify(pedidos));
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
