/* ==========================
   CARGA INICIAL
========================== */
/* ==========================
   SEGURIDAD DE ACCESO
========================== */
// 🔥 FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDLIhg6TI7aXTB16WVYlXDYrf3JVw6h-mg",
  authDomain: "la-carpita-8d34c.firebaseapp.com",
  projectId: "la-carpita-8d34c",
  storageBucket: "la-carpita-8d34c.appspot.com",
  messagingSenderId: "548024012544",
  appId: "1:548024012544:web:b1216962906643d8242de5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


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
    escucharPedidos();
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


function escucharPedidos() {
  const q = query(
    collection(db, "pedidos"),
    orderBy("fecha", "desc")
  );

  onSnapshot(q, snap => {
    const pedidos = snap.docs.map(d => ({
      id: d.id,
      ...d.data()
    }));

    renderFila(pedidos);
  });
}

/* ==========================
   RENDER FILA
========================== */

function renderFila(pedidos = []) {
  const cont = document.getElementById("filaPedidos");

  document.getElementById("contadorPedidos").textContent =
    pedidos.length ? `${pedidos.length} pedido(s)` : "Sin pedidos";

  if (!pedidos.length) {
    cont.innerHTML = `<p style="text-align:center;color:#777;">No hay pedidos</p>`;
    return;
  }

  cont.innerHTML = pedidos.map((p, i) => `
    <div class="pedido">
      <div class="pedido-header">
        <div class="pedido-num">
          #${i + 1} · ${p.telefono} · Pedido ${p.id.slice(0, 6)}
        </div>
        <span class="estado ${p.estado}">
          ${p.estado.replace("_", " ")}
        </span>
      </div>

      <div class="pedido-body">
        <pre class="pedido-items">${p.mensaje}</pre>
      </div>

      <div class="acciones">
        <button onclick="cambiarEstadoFirebase('${p.id}','PREPARACION')">
          🔵 Preparación
        </button>

        <button onclick="cambiarEstadoFirebase('${p.id}','EN_CAMINO')">
          🚚 En camino
        </button>

        <button onclick="cancelarPedidoFirebase('${p.id}','${p.telefono}')">
          ❌ Cancelado
        </button>
      </div>
    </div>
  `).join("");
}

async function cancelarPedidoFirebase(id, tel) {
  await updateDoc(doc(db, "pedidos", id), {
    estado: "CANCELADO"
  });

  window.open(
    `https://wa.me/${tel}?text=${encodeURIComponent(
      "🍟 *La Carpita*\n\nTu pedido fue *cancelado* ❌"
    )}`,
    "_blank"
  );
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

async function cambiarEstadoFirebase(id, estado) {
  await updateDoc(doc(db, "pedidos", id), {
    estado
  });
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
