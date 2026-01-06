/* ==========================
   CARGA INICIAL
========================== */

document.addEventListener("DOMContentLoaded", () => {
  importarDesdeURL();
  renderFila();
  setInterval(renderFila, 3000);
});

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

        <div class="pedido-texto">${p.texto}</div>

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

  p.estado = "ENTREGADO";
  localStorage.setItem(key, JSON.stringify(p));

  enviarWhatsEstado(p);

  let cola = JSON.parse(localStorage.getItem("cola_pedidos")) || [];
  cola = cola.filter(x => x !== tel);
  localStorage.setItem("cola_pedidos", JSON.stringify(cola));

  renderFila();
}

/* ==========================
   WHATSAPP SEGUIMIENTO
========================== */

function enviarWhatsEstado(p){
  const msg =
`🍟 *La Carpita*
Tu pedido está:
👉 *${p.estado.replace("_"," ")}*`;

  window.open(`https://wa.me/${p.telefono}?text=${encodeURIComponent(msg)}`,"_blank");
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
