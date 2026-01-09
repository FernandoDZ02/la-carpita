/* ===== CONSTANTES ===== */
const COSTO_DOBLE_ADEREZO = 8;
const COSTO_ENVIO = 10;
const COMISION_TARJETA = 0.035;
const NUM_WHATSAPP_LA_CARPITA = "525657861068";
let ubicacionManual = false;
let modoPapas = "todo"; // todo | solo | personalizar
const URL_PANEL_NEGOCIO =
  "https://fernandodz02.github.io/la-carpita/pedido-negocio.html";



const ADEREZOS = [
  "Ranch",
  "Mango habanero",
  "Buffalo",
  "Miel habanero",
  "Tamarindo Habanero",
  "BBQ",
  "Ranch habanero",
  "Adobadas"
];

/* ===== OPCIONES DE PRODUCTOS ===== */
const opciones = {
  boneless: [
    {id:"boneless", nombre:"Boneless", precio:65, img:"img/BS.png", incluyePapas:false, tieneAderezo:true},
    {id:"boneless_papas", nombre:"Boneless con papas", precio:80, img:"img/BCP.png", incluyePapas:true, tieneAderezo:true}
  ],
  tenders: [
    {id:"tenders", nombre:"Tenders (5pz)", precio:65, img:"img/TS.png", incluyePapas:false, tieneAderezo:true},
    {id:"tenders_papas", nombre:"Tenders con papas", precio:80, img:"img/TCP.png", incluyePapas:true, tieneAderezo:true}
  ],
  alitas: [
    {id:"alitas_ch", nombre:"Alitas Ch (6pz)", precio:70, img:"img/A.png", incluyePapas:false, tieneAderezo:true},
    {id:"alitas_gd", nombre:"Alitas Gd (14pz)", precio:140, img:"img/AG.png", incluyePapas:false, tieneAderezo:true},
    {id:"alitas_ch_papas", nombre:"Alitas Ch con papas", precio:85, img:"img/ACP.png", incluyePapas:true, tieneAderezo:true},
    {id:"alitas_gd_papas", nombre:"Alitas Gd con papas", precio:170, img:"img/ACPG.png", incluyePapas:true, tieneAderezo:true}
  ],
  palomitas: [
    {id:"palomitas", nombre:"Palomitas", precio:65, img:"img/P.png", incluyePapas:false, tieneAderezo:true},
    {id:"palomitas_papas", nombre:"Palomitas con papas", precio:80, img:"img/PCP.png", incluyePapas:true, tieneAderezo:true}
  ],
  dedos: [
    {id:"dedos_ch", nombre:"Dedos Ch (6pz)", precio:60, img:"img/DQ.png", incluyePapas:false, tieneAderezo:true},
    {id:"dedos_gd", nombre:"Dedos Gd (14pz)", precio:115, img:"img/DQG.png", incluyePapas:false, tieneAderezo:true},
    {id:"dedos_ch_papas", nombre:"Dedos Ch con papas", precio:75, img:"img/DQCP.png", incluyePapas:true, tieneAderezo:true},
    {id:"dedos_gd_papas", nombre:"Dedos Gd con papas", precio:140, img:"img/DQCPG.png", incluyePapas:true, tieneAderezo:true}
  ],
  papas: [
    {id:"papas_francesa", nombre:"Papas Francesa", precio:50, img:"img/PF.png", incluyePapas:true, tieneAderezo:false},
    {id:"papas_curly", nombre:"Papas Curly", precio:60, img:"img/PC.png", incluyePapas:true, tieneAderezo:false},
    {id:"papas_waffle", nombre:"Papas Waffle", precio:60, img:"img/PW.png", incluyePapas:true, tieneAderezo:false},
    {id:"papas_gajo", nombre:"Papas Gajo", precio:60, img:"img/PG.png", incluyePapas:true, tieneAderezo:false},
  {
    id: "papas_mix",
    nombre: "Mix de papas",
    precio: 115, // base (2 papas)
    img: "img/papas.png",
    incluyePapas: true,
    tieneAderezo: false,
    esMixPapas: true
  }
  ],
  banderillas: [
    {id:"band_salchicha", nombre:"Banderilla de salchicha", precio:25, img:"img/B.png", incluyePapas:false, tieneAderezo:false, esBanderilla:true},
    {id:"band_queso", nombre:"Banderilla de queso", precio:30, img:"img/B.png", incluyePapas:false, tieneAderezo:false, esBanderilla:true},
    {id:"band_combinada", nombre:"Banderilla combinada", precio:35, img:"img/B.png", incluyePapas:false, tieneAderezo:false, esBanderilla:true}
  ],
  mini_banderillas: [
    {id:"mb_salchicha", nombre:"Mini salchicha (6pz)", precio:50, img:"img/MB.png", incluyePapas:false, tieneAderezo:false, esBanderilla:true},
    {id:"mb_salchicha_papas", nombre:"Mini salchicha con papas", precio:65, img:"img/MB.png", incluyePapas:true, tieneAderezo:false, esBanderilla:true},
    {id:"mb_queso", nombre:"Mini queso (6pz)", precio:60, img:"img/MB.png", incluyePapas:false, tieneAderezo:false, esBanderilla:true},
    {id:"mb_queso_papas", nombre:"Mini queso con papas", precio:75, img:"img/MB.png", incluyePapas:true, tieneAderezo:false, esBanderilla:true},
    {id:"mb_comb", nombre:"Mini combinadas (6pz)", precio:65, img:"img/MB.png", incluyePapas:false, tieneAderezo:false, esBanderilla:true},
    {id:"mb_comb_papas", nombre:"Mini combinadas con papas", precio:80, img:"img/MB.png", incluyePapas:true, tieneAderezo:false, esBanderilla:true}
  ],
  super: [
    {id:"super1", nombre:"Súper 1 (Boneless + Alitas + papas)", precio:145, img:"img/SC1.png", incluyePapas:true, tieneAderezo:true, tipoCombo:"super"},
    {id:"super2", nombre:"Súper 2 (Tenders + Boneless + papas)", precio:135, img:"img/SC2.png", incluyePapas:true, tieneAderezo:true, tipoCombo:"super"},
    {id:"super3", nombre:"Súper 3 (Dedos + Palomitas + papas)", precio:115, img:"img/SC3.png", incluyePapas:true, tieneAderezo:true, tipoCombo:"super"},
    {id:"super4", nombre:"Súper 4 (Dedos + Boneless + papas)", precio:135, img:"img/SC4.png", incluyePapas:true, tieneAderezo:true, tipoCombo:"super"},
    {id:"super5", nombre:"Súper 5 (Alitas + Palomitas + papas)", precio:130, img:"img/SC5.png", incluyePapas:true, tieneAderezo:true, tipoCombo:"super"},
    {id:"super6", nombre:"Súper 6 (Palomitas + Tenders + papas)", precio:125, img:"img/SC6.png", incluyePapas:true, tieneAderezo:true, tipoCombo:"super"}
  ],
  mega: [
    {id:"mega1", nombre:"Mega 1 (Boneless + Alitas + Dedos)", precio:180, img:"img/M1.png", incluyePapas:false, tieneAderezo:true, tipoCombo:"mega"},
    {id:"mega2", nombre:"Mega 2 (Tenders + Palomitas + Boneless)", precio:170, img:"img/M2.png", incluyePapas:false, tieneAderezo:true, tipoCombo:"mega"},
    {id:"mega3", nombre:"Súper Mega (Tenders + Dedos + Boneless + Papas)", precio:195, img:"img/SM.png", incluyePapas:true, tieneAderezo:true, tipoCombo:"mega"}
  ],
  aderezos: [
    {id:"ad_ranch", nombre:"Ranch", precio:8, img:"img/Aderezos.png"},
    {id:"ad_mango", nombre:"Mango habanero", precio:8, img:"img/Aderezos.png"},
    {id:"ad_buffalo", nombre:"Buffalo", precio:8, img:"img/Aderezos.png"},
    {id:"ad_miel", nombre:"Miel habanero", precio:8, img:"img/Aderezos.png"},
    {id:"ad_koreana", nombre:"Koreana", precio:8, img:"img/Aderezos.png"},
    {id:"ad_bbq", nombre:"BBQ", precio:8, img:"img/Aderezos.png"},
    {id:"ad_tam", nombre:"Tamarindo Habanero", precio:8, img:"img/Aderezos.png"},
    {id:"ad_ranchh", nombre:"Ranch habanero", precio:8, img:"img/Aderezos.png"}
  ]
};

/* ===== ESTADO GLOBAL ===== */
let carrito = [];
let categoriaActual = null;
let productoSeleccionado = null;
let detalleTemporal = null;
let pasoCarrito = "resumen";

/* ===== UTILIDADES ===== */
function precioFormato(n){
  return "$" + n.toFixed(2);
}

function showToast(text){
  const toast = document.getElementById("toast");
  toast.textContent = text || "Producto agregado ✔";
  toast.style.display = "block";
  setTimeout(()=> toast.style.display = "none", 1600);
}
function mostrarModalProductoAgregado(){
  const modal = document.getElementById("modalProductoAgregado");
  modal.style.display = "flex";

  // cierre automático opcional
  setTimeout(() => {
    modal.style.display = "none";
  }, 1500);
}

function cerrarModalProductoAgregado(){
  document.getElementById("modalProductoAgregado").style.display = "none";
}

function getRadioValue(name){
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : "";
}
/* ==========================
      MODAL GENERAL
   ========================== */

function closeModal(){
  document.getElementById("modal").style.display = "none";
  productoSeleccionado = null;
  detalleTemporal = null;
}

function openModal(categoria){
  categoriaActual = categoria;
  productoSeleccionado = null;

  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-content");

  // limpiar y mostrar
  content.innerHTML = "";
  modal.style.display = "flex";

  // si no existen opciones
  const lista = opciones[categoria];
  if(!lista){
    content.innerHTML = "<p>No hay opciones para esta categoría.</p>";
    return;
  }

  // generar listado de variantes
  const htmlItems = lista.map(op => `
    <div class="option-card" onclick="selectVariante('${categoria}', '${op.id}')">
      <img src="${op.img}" alt="${op.nombre}">
      <div class="option-info">
        <h3 class="option-title">${op.nombre}</h3>
        <p class="option-price">${precioFormato(op.precio)}</p>
      </div>
    </div>
  `).join("");

  content.innerHTML = `
    <button class="modal-close-top" onclick="event.stopPropagation(); closeModal();">✕</button>
    <h2>Selecciona una opción</h2>
    ${htmlItems}
  `;
}

/* ==========================
      SELECCIÓN VARIANTE
   ========================== */

function selectVariante(categoria, id){
  const lista = opciones[categoria];
  if(!lista) return;

  const prod = lista.find(p => p.id === id);
  if(!prod) return;

  categoriaActual = categoria;
  productoSeleccionado = prod;

  abrirPasoPersonalizacion();
}

/* ==========================
   MODAL: PERSONALIZACIÓN
   ========================== */

function abrirPasoPersonalizacion(){
  if(!productoSeleccionado) return;

  const p = productoSeleccionado;
  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-content");

  modal.style.display = "flex";

  let html = `
    <button class="modal-close-top" onclick="event.stopPropagation(); closeModal();">✕</button>
    <h2>Personaliza tu ${p.nombre}</h2>
  `;
html += `
  <div class="modal-body">
  
  <div id="previewPedido" class="preview-sticky">
    <strong>🧾 Así va tu pedido:</strong>
    <div id="previewContenido"></div>
  </div>
      <div class="modal-scroll">
      ${p.nombre} — ${precioFormato(p.precio)}
    </div>
  </div>
`;

  /* ----------------------------------------
        ADEREZOS EN COMBOS SUPER / MEGA
     ---------------------------------------- */
if(p.tipoCombo === "super" || p.tipoCombo === "mega"){
    const cantidad = (p.tipoCombo === "super") ? 2 : 3;

    html += `<div class="modal-section">`;
    html += `<div class="modal-section-title">Aderezos (${cantidad})</div>`;

    for(let i = 1; i <= cantidad; i++){
        const titulo = nombreAderezoCombo(i, p);

html += `
  <div style="margin-top:15px; margin-bottom:6px;">
    <strong style="font-size:0.95rem; color:#B34700;">${titulo}</strong>
  </div>

  <label class="modal-label">Aderezo principal</label>
  <select id="comboAderezo${i}" class="select-bonito">
    ${ADEREZOS.map(a => `<option value="${a}">${a}</option>`).join("")}
  </select>

  <!-- RADIO BONITO -->
  <div class="radio-bonito-group">
    <label class="radio-bonito selected"
           onclick="seleccionarRadioBonito(this)">
        <input type="radio" name="comboModo${i}" value="Untado" checked>
        Untado
    </label>

    <label class="radio-bonito"
           onclick="seleccionarRadioBonito(this)">
        <input type="radio" name="comboModo${i}" value="Aparte">
        Aparte
    </label>

    <label class="radio-bonito"
           onclick="seleccionarRadioBonito(this)">
        <input type="radio" name="comboModo${i}" value="Sin">
        Sin
    </label>
  </div>

  <!-- CHECKBOX BONITO -->
  <label class="checkbox-bonito"
         id="chkCombo${i}"
         onclick="toggleCheckBonito(this, ${i})">

      <input type="checkbox" id="comboDoble${i}">
      <span class="checkbox-shape"></span>
      <span>Doble aderezo (+$8)</span>
  </label>

  <!-- CAJA DOBLE ADEREZO -->
  <div id="comboDobleBox${i}"
       style="display:none; padding:12px; border:1px solid #eee; border-radius:12px; margin-top:10px;">

    <label class="modal-label">Aderezo extra</label>
    <select id="comboAderezoExtra${i}" class="select-bonito">
      ${ADEREZOS.map(a => `<option value="${a}">${a}</option>`).join("")}
    </select>

    <div class="radio-bonito-group" style="margin-top:10px;">
      <label class="radio-bonito selected"
             onclick="seleccionarRadioBonito(this)">
        <input type="radio" name="comboModoExtra${i}" value="Untado" checked>
        Untado
      </label>

      <label class="radio-bonito"
             onclick="seleccionarRadioBonito(this)">
        <input type="radio" name="comboModoExtra${i}" value="Aparte">
        Aparte
      </label>
    </div>

  </div>
`;
    }

    html += `</div>`;
}


  /* ----------------------------------------
       ADEREZOS NORMALES (NO COMBO)
     ---------------------------------------- */
  if(p.tieneAderezo && !p.tipoCombo){
    html += `
<div class="modal-section">
  <div class="modal-section-title">Aderezos</div>

  <!-- ADEREZO 1 -->
<label class="modal-label">Aderezo principal</label>
<select id="aderezoPrincipal" class="select-bonito">
  ${ADEREZOS.map(a => `<option value="${a}">${a}</option>`).join("")}
</select>

<div class="radio-bonito-group" style="margin-top:6px;">
  <label class="radio-bonito selected">
    <input type="radio" name="modoAderezo" value="Untado" checked>
    Untado
  </label>
  <label class="radio-bonito">
    <input type="radio" name="modoAderezo" value="Aparte">
    Aparte
  </label>
  <label class="radio-bonito">
    <input type="radio" name="modoAderezo" value="Sin">
    Sin
  </label>
</div>


  <!-- ADEREZO 2 (solo grandes) -->
  ${
    tieneDosAderezosGratis(p)
    ? `
    <label class="modal-label" style="margin-top:14px;">
  Segundo aderezo incluido
</label>
<select id="aderezoSegundo" class="select-bonito">
  ${ADEREZOS.map(a => `<option value="${a}">${a}</option>`).join("")}
</select>

<div class="radio-bonito-group" style="margin-top:6px;">
  <label class="radio-bonito selected">
    <input type="radio" name="modoAderezoSegundo" value="Untado" checked>
    Untado
  </label>
  <label class="radio-bonito">
    <input type="radio" name="modoAderezoSegundo" value="Aparte">
    Aparte
  </label>
</div>


    `
    : ``
  }
  <!-- CHECKBOX = ADEREZO EXTRA -->
  <label class="checkbox-bonito" id="checkboxDoble" onclick="toggleCheckboxDoble()">
    <input type="checkbox" id="dobleAderezo" style="display:none;">
    <span class="checkbox-shape"></span>
    <span class="checkbox-text">Aderezo extra (+$8)</span>
  </label>

  <div id="seccionDobleAderezo"
       style="display:none; padding:12px; border:1px solid #eee; border-radius:12px; margin-top:10px;">

   <label class="modal-label">Aderezo extra</label>
<select id="aderezoExtra" class="select-bonito">
  ${ADEREZOS.map(a => `<option value="${a}">${a}</option>`).join("")}
</select>

<div class="radio-bonito-group" style="margin-top:6px;">
  <label class="radio-bonito selected">
    <input type="radio" name="modoAderezoExtra" value="Untado" checked>
    Untado
  </label>
  <label class="radio-bonito">
    <input type="radio" name="modoAderezoExtra" value="Aparte">
    Aparte
  </label>
</div>
</div>
</div>
    `;
  }
/* ----------------------------------------
     MIX DE PAPAS (2, 3 o 4)
---------------------------------------- */
if (p.esMixPapas) {
  html += `
  <div class="modal-section">
    <div class="modal-section-title">Arma tu mix de papas</div>

    <label class="modal-label">Cantidad de papas</label>
    <select id="mixCantidad" class="select-bonito">
      <option value="2" data-precio="115">2 papas — $115</option>
      <option value="3" data-precio="165">3 papas — $165</option>
      <option value="4" data-precio="215">4 papas — $215</option>
    </select>

    <label class="modal-label" style="margin-top:12px;">Tipos de papa</label>

 <label class="checkbox-bonito checkbox-mix">

  <input type="checkbox" name="mixPapa" value="Francesa">
  <span class="checkbox-shape"></span>
  <span>Francesa</span>
</label>

<label class="checkbox-bonito checkbox-mix">

  <input type="checkbox" name="mixPapa" value="Curly">
  <span class="checkbox-shape"></span>
  <span>Curly</span>
</label>

<label class="checkbox-bonito checkbox-mix">

  <input type="checkbox" name="mixPapa" value="Waffle">
  <span class="checkbox-shape"></span>
  <span>Waffle</span>
</label>

<label class="checkbox-bonito checkbox-mix">

  <input type="checkbox" name="mixPapa" value="Gajo">
  <span class="checkbox-shape"></span>
  <span>Gajo</span>
</label>


    <small style="display:block;margin-top:8px;color:#777;">
      Selecciona exactamente la cantidad elegida
    </small>
  </div>
  `;
}

  /* ----------------------------------------
              PAPAS
     ---------------------------------------- */
  if(p.incluyePapas || categoriaActual === "papas"){
    html += `
      <div class="modal-section">
        <div class="modal-section-title">Papas</div>
         `;
  if(categoriaActual !== "papas"){
    html += `
        <label class="modal-label">Tipo</label>
        <select id="tipoPapa" class="select-bonito">
          <option value="Francesa" data-extra="0">Francesa</option>
          <option value="Curly" data-extra="0">Curly</option>
          <option value="Waffle" data-extra="0">Waffle</option>
          <option value="Gajo" data-extra="0">Gajo</option>
        </select>
         `;
  }

        
  html += `
          <!-- BOTONES DE PAPAS: CON TODO / PERSONALIZAR -->
<div style="margin: 10px 0; display:flex; gap:8px; flex-wrap:wrap;">
  <button type="button" id="btnTodo" class="btn-papas" onclick="selectPapasModo('todo')">
    Papas con todo
  </button>

  <button type="button" id="btnSolo" class="btn-papas" onclick="selectPapasModo('solo')">
    Papas solas
  </button>

  <button type="button" id="btnPers" class="btn-papas" onclick="selectPapasModo('personalizar')">
    Personalizar
  </button>
</div>
  

<!-- CONTENEDOR DE PERSONALIZACIÓN -->
<div id="boxPersonalizarPapas" style="display:none;">


        <div class="modal-label">Queso</div>
<div class="radio-bonito-papas-group">
    <label class="radio-bonito-papas selected">
        <input type="radio" name="quesoPapa" value="Untado" checked>
        Untado
    </label>

    <label class="radio-bonito-papas">
        <input type="radio" name="quesoPapa" value="Aparte">
        Aparte
    </label>

    <label class="radio-bonito-papas">
        <input type="radio" name="quesoPapa" value="Sin">
        Sin
    </label>
</div>

       <div class="modal-label">Catsup</div>
<div class="radio-bonito-papas-group">
    <label class="radio-bonito-papas selected">
        <input type="radio" name="catsupPapa" value="Untado" checked>
        Untado
    </label>

    <label class="radio-bonito-papas">
        <input type="radio" name="catsupPapa" value="Aparte">
        Aparte
    </label>

    <label class="radio-bonito-papas">
        <input type="radio" name="catsupPapa" value="Sin">
        Sin
    </label>
</div>


       <div class="modal-label">Salsa</div>
<div class="radio-bonito-papas-group">
    <label class="radio-bonito-papas selected">
        <input type="radio" name="salsaPapa" value="Untado" checked>
        Untado
    </label>

    <label class="radio-bonito-papas">
        <input type="radio" name="salsaPapa" value="Aparte">
        Aparte
    </label>

    <label class="radio-bonito-papas">
        <input type="radio" name="salsaPapa" value="Sin">
        Sin
    </label>
</div>

      </div>
    `;
  }
document.addEventListener("click", e => {
    if (e.target.closest(".radio-bonito-papas")) {
        const label = e.target.closest(".radio-bonito-papas");
        const group = label.parentNode;

        group.querySelectorAll(".radio-bonito-papas")
            .forEach(x => x.classList.remove("selected"));

        label.classList.add("selected");
    }
});

/* ----------------------------------------
   BANDERILLAS / MINI BANDERILLAS
---------------------------------------- */
if (p.esBanderilla) {
html += `
<div class="modal-section">
  <div class="modal-section-title">Salsas en banderillas</div>

  <!-- BOTONES: CON TODO / PERSONALIZAR -->
  <div style="margin: 10px 0; display:flex; gap:8px;">
    <button type="button" id="btnMiniTodo" class="btn-papas" onclick="selectMiniModo('todo')">
      Con todo
    </button>

    <button type="button" id="btnMiniPers" class="btn-papas" onclick="selectMiniModo('personalizar')">
      Personalizar
    </button>
  </div>

  <!-- PERSONALIZACIÓN -->
  <div id="boxPersonalizarMini" style="display:none;">

    <div class="modal-label">Queso</div>
    <div class="radio-bonito-papas-group">
      <label class="radio-bonito-papas selected">
        <input type="radio" name="quesoMini" value="Untado" checked> Untado
      </label>
      <label class="radio-bonito-papas">
        <input type="radio" name="quesoMini" value="Aparte"> Aparte
      </label>
      <label class="radio-bonito-papas">
        <input type="radio" name="quesoMini" value="Sin"> Sin
      </label>
    </div>

    <div class="modal-label">Catsup</div>
    <div class="radio-bonito-papas-group">
      <label class="radio-bonito-papas selected">
        <input type="radio" name="catsupMini" value="Untado" checked> Untado
      </label>
      <label class="radio-bonito-papas">
        <input type="radio" name="catsupMini" value="Aparte"> Aparte
      </label>
      <label class="radio-bonito-papas">
        <input type="radio" name="catsupMini" value="Sin"> Sin
      </label>
    </div>

    <div class="modal-label">Mayonesa</div>
    <div class="radio-bonito-papas-group">
      <label class="radio-bonito-papas selected">
        <input type="radio" name="mayoMini" value="Untado" checked> Untado
      </label>
      <label class="radio-bonito-papas">
        <input type="radio" name="mayoMini" value="Aparte"> Aparte
      </label>
      <label class="radio-bonito-papas">
        <input type="radio" name="mayoMini" value="Sin"> Sin
      </label>
    </div>

    <div class="modal-label">Salsa</div>
    <div class="radio-bonito-papas-group">
      <label class="radio-bonito-papas selected">
        <input type="radio" name="salsaMini" value="Untado" checked> Untado
      </label>
      <label class="radio-bonito-papas">
        <input type="radio" name="salsaMini" value="Aparte"> Aparte
      </label>
      <label class="radio-bonito-papas">
        <input type="radio" name="salsaMini" value="Sin"> Sin
      </label>
    </div>

  </div>
</div>
`;
}
document.addEventListener("click", e => {
  if (e.target.closest(".radio-bonito-papas")) {
    const label = e.target.closest(".radio-bonito-papas");
    const group = label.parentNode;

    group.querySelectorAll(".radio-bonito-papas")
         .forEach(x => x.classList.remove("selected"));

    label.classList.add("selected");
  }
});

  /* ----------------------------------------
          BOTONES DE CONTINUAR
     ---------------------------------------- */
  html += `
    <div style="display:flex; gap:8px; margin-top:12px;">
      <button class="btn-secondary" onclick="volverAPrimeraOpcion()">← Cambiar opción</button>
      <button class="btn-primary" onclick="confirmarPersonalizacion()">Continuar</button>
    </div>
  `;
// ===============================
// DEFAULT PAPAS CUANDO INCLUYE
// ===============================
setTimeout(() => {
  if (p.incluyePapas) {
 modoPapas = "todo";
    // Activar botón "Papas con todo"
    const btnTodo = document.getElementById("btnTodo");
    if (btnTodo) btnTodo.classList.add("active");

    // Marcar radios por defecto
    const q = document.querySelector("input[name='quesoPapa'][value='Untado']");
    const c = document.querySelector("input[name='catsupPapa'][value='Untado']");
    const s = document.querySelector("input[name='salsaPapa'][value='Untado']");

    if (q) q.checked = true;
    if (c) c.checked = true;
    if (s) s.checked = true;

    // Ocultar caja de personalización
    const box = document.getElementById("boxPersonalizarPapas");
    if (box) box.style.display = "none";
  }
}, 0);
setTimeout(actualizarPreviewPedido, 0);

  content.innerHTML = html;
}
// 🔥 SINCRONIZAR CLASES VISUALES
["quesoPapa","catsupPapa","salsaPapa"].forEach(name => {
  const radio = document.querySelector(`input[name='${name}'][value='Untado']`);
  if (radio) {
    const group = radio.closest(".radio-bonito-papas-group");
    group.querySelectorAll(".radio-bonito-papas")
         .forEach(l => l.classList.remove("selected"));
    radio.closest(".radio-bonito-papas").classList.add("selected");
  }
});

function selectMiniModo(tipo){
  const btnTodo = document.getElementById("btnMiniTodo");
  const btnPers = document.getElementById("btnMiniPers");
  const box = document.getElementById("boxPersonalizarMini");

  btnTodo.classList.remove("active");
  btnPers.classList.remove("active");

  // MODO "CON TODO"
  if(tipo === "todo"){
    btnTodo.classList.add("active");
    box.style.display = "none";

    document.querySelector("input[name='quesoMini'][value='Untado']").checked = true;
    document.querySelector("input[name='catsupMini'][value='Untado']").checked = true;
    document.querySelector("input[name='mayoMini'][value='Untado']").checked = true;
    document.querySelector("input[name='salsaMini'][value='Untado']").checked = true;

  } else {
    btnPers.classList.add("active");
    box.style.display = "block";
  }
}
function actualizarPreviewPedido(){
  if(!productoSeleccionado) return;

  const item = construirItemDesdeFormulario();
  if(!item) return;

  const cont = document.getElementById("previewContenido");
  if(!cont) return;

  cont.innerHTML = `
    <div style="font-weight:600; margin-bottom:6px;">
      ${item.descripcion.split("\n")[0]}
    </div>
    <div style="font-size:0.85rem; line-height:1.4;">
      ${item.descripcion
        .split("\n")
        .slice(1)
        .map(l => l.trim() ? `• ${l}` : "")
        .join("<br>")}
    </div>
  `;
}
document.addEventListener("change", (e)=>{
  if(e.target.closest("#modal-content")){
    actualizarPreviewPedido();
  }
});

document.addEventListener("click", (e)=>{
  if(e.target.closest("#modal-content")){
    setTimeout(actualizarPreviewPedido, 0);
  }
});

/* ==========================
      MOSTRAR/OCULTAR DOBLE
   ========================== */

function toggleDoble(i){
  const box = document.getElementById("comboDobleBox" + i);
  const chk = document.getElementById("comboDoble" + i);
  if(box) box.style.display = chk.checked ? "block" : "none";
}

function toggleDobleGeneral(){
  const chk = document.getElementById("dobleAderezo");
  const box = document.getElementById("seccionDobleAderezo");
  if(box) box.style.display = chk.checked ? "block" : "none";
}

/* ==========================
     VOLVER A OPCIONES
   ========================== */

function volverAPrimeraOpcion(){
  if(categoriaActual){
    openModal(categoriaActual);
  }
}

/* ==========================
   CONSTRUIR DESCRIPCIÓN Y PRECIO
   ========================== */

function construirItemDesdeFormulario(){
  const p = productoSeleccionado;
  if(!p) return null;

  let extra = 0;
  let total = p.precio;
  let descDetalle = ""; // descripción debajo del nombre

  /* ---- MIX DE PAPAS ---- */
if (p.esMixPapas) {

  const sel = document.getElementById("mixCantidad");
  const cantidad = Number(sel.value);
  const precioBase = Number(sel.selectedOptions[0].dataset.precio);

const checks = [...document.querySelectorAll("input[name='mixPapa']:checked")];

  const tipos = checks.map(c => c.value);

// ❗ NO bloquear mientras se elige (solo advertir)
if (tipos.length > cantidad) {
  mostrarAlert(
  `Solo puedes elegir ${cantidad} tipos de papa`,
  "Límite alcanzado"
);

  return null;
}


  let descDetalle = `Mix de papas (${cantidad}): ${tipos.join(", ")}\n`;

// 🔥 AGREGAR DESCRIPCIÓN DE PAPAS
if (modoPapas === "todo") {
  descDetalle += `Papas con todo\n`;
} 
else if (modoPapas === "solo") {
  descDetalle += `Papas solas\n`;
} 
else {
  const queso = getRadioValue("quesoPapa") || "Untado";
  const cats  = getRadioValue("catsupPapa") || "Untado";
  const salsa = getRadioValue("salsaPapa") || "Untado";

  descDetalle +=
    `Papas personalizadas (` +
    `queso ${queso.toLowerCase()}, ` +
    `catsup ${cats.toLowerCase()}, ` +
    `salsa ${salsa.toLowerCase()}` +
    `)\n`;
}

return {
  descripcion: `Mix de papas — ${precioFormato(precioBase)}\n${descDetalle}`,
  precio: precioBase
};

}

  /* ---- ADEREZOS NORMALES ---- */
/* ---- ADEREZOS NORMALES ---- */
if(p.tieneAderezo && !p.tipoCombo){

  // ADEREZO 1
  const ad1   = document.getElementById("aderezoPrincipal")?.value;
  const modo1 = getRadioValue("modoAderezo") || "Untado";

  if(modo1 === "Sin"){
    descDetalle += `Aderezo: Sin aderezo\n`;
  } else {
    descDetalle += `Aderezo: ${ad1} (${modo1.toLowerCase()})\n`;
  }

  // ADEREZO 2 GRATIS (solo grandes)
  if(tieneDosAderezosGratis(p)){
    const ad2   = document.getElementById("aderezoSegundo")?.value;
    const modo2 = getRadioValue("modoAderezoSegundo") || "Untado";

    if(ad2){
      descDetalle += `Segundo aderezo: ${ad2} (${modo2.toLowerCase()})\n`;
    }
  }

  // ADEREZO 3 EXTRA (+$8)
  const chk = document.getElementById("dobleAderezo");
  if(chk && chk.checked){
    const ad3   = document.getElementById("aderezoExtra")?.value;
    const modo3 = getRadioValue("modoAderezoExtra") || "Untado";

    if(ad3){
      descDetalle += `Aderezo extra: ${ad3} (${modo3.toLowerCase()}) (+$8)\n`;
      extra += COSTO_DOBLE_ADEREZO;
      total += COSTO_DOBLE_ADEREZO;
    }
  }
}



  /* ---- ADEREZOS EN COMBOS ---- */
 if(p.tipoCombo === "super" || p.tipoCombo === "mega"){
    const cantidad = (p.tipoCombo === "super") ? 2 : 3;

    for(let i = 1; i <= cantidad; i++){
        const ad = document.getElementById("comboAderezo"+i).value;
        const modo = getRadioValue("comboModo"+i);

        descDetalle += `${nombreAderezoCombo(i, p)}: ${ad} (${modo.toLowerCase()})\n`;

        const chk = document.getElementById("comboDoble"+i);
        if(chk && chk.checked){
            const ad2 = document.getElementById("comboAderezoExtra"+i).value;
            const modo2 = getRadioValue("comboModoExtra"+i);

            descDetalle += `Doble ${nombreAderezoCombo(i, p)}: ${ad2} (${modo2.toLowerCase()}) (+$8)\n`;

            extra += COSTO_DOBLE_ADEREZO;
            total += COSTO_DOBLE_ADEREZO;
        }
    }
}

  /* ---- PAPAS ---- */
/* ---- PAPAS (NORMALIZADO) ---- */
if(p.incluyePapas || categoriaActual === "papas"){


  const tipo =
    categoriaActual === "papas"
      ? p.nombre.replace("Papas ", "")
      : document.getElementById("tipoPapa").value;

  const queso = getRadioValue("quesoPapa") || "Untado";
  const cats  = getRadioValue("catsupPapa") || "Untado";
  const salsa = getRadioValue("salsaPapa") || "Untado";

  // --- COSTOS (NO TOCAR) ---
  const cambioPapa = (tipo !== "Francesa");

  if(
    !p.tipoCombo &&
    p.incluyePapas &&
    categoriaActual !== "papas" &&
    cambioPapa
  ){
    descDetalle += `Cambio de papas (+$5)\n`;
    extra += 5;
    total += 5;
  }

  if((p.tipoCombo === "super" || p.tipoCombo === "mega") && cambioPapa){
    descDetalle += `Cambio de papas en combo (+$10)\n`;
    extra += 10;
    total += 10;
  }

  // --- DESCRIPCIÓN NORMALIZADA ---
 if(modoPapas === "todo"){
  descDetalle += `Papas ${tipo} (con todo)\n`;
}
else if(modoPapas === "solo"){
  descDetalle += `Papas ${tipo} (solas)\n`;
}
else {
  descDetalle +=
    `Papas ${tipo} (` +
    `queso ${queso.toLowerCase()}, ` +
    `catsup ${cats.toLowerCase()}, ` +
    `salsa ${salsa.toLowerCase()}` +
    `)\n`;
}

}


  /* ---- BANDERILLAS / MINI BANDERILLAS ---- */
  if(p.esBanderilla){

  const esMini = p.nombre.toLowerCase().includes("mini");

  const tituloBanderilla = esMini
    ? "Mini banderillas"
    : "Banderillas";

  const quesoM = getRadioValue("quesoMini");
  const catsM  = getRadioValue("catsupMini");
  const mayoM  = getRadioValue("mayoMini");
  const salsaM = getRadioValue("salsaMini");

  const btnTodo = document.getElementById("btnMiniTodo");

  if(btnTodo && btnTodo.classList.contains("active")){
    descDetalle += `${tituloBanderilla}: con todo\n`;
  } else {
    descDetalle += `${tituloBanderilla} personalizadas: ` +
                   `Queso ${quesoM.toLowerCase()}, ` +
                   `Catsup ${catsM.toLowerCase()}, ` +
                   `Mayonesa ${mayoM.toLowerCase()}, ` +
                   `Salsa ${salsaM.toLowerCase()}\n`;
  }
}

  /* ---- NOMBRE + PRECIO FINAL ---- */
  let desc = `${p.nombre} — ${precioFormato(total)}\n${descDetalle}`;

  return {
    descripcion: desc,
    precio: total
  };
}

/* ==========================
   CONFIRMAR PERSONALIZACIÓN
   ========================== */

function confirmarPersonalizacion(){
  const item = construirItemDesdeFormulario();
  if(!item){
    mostrarAlert(
  `Debes elegir exactamente ${cantidad} tipos de papa`,
  "Mix de papas"
);

  }
// VALIDACIÓN FINAL DEL MIX
if (productoSeleccionado?.esMixPapas) {
  const cantidad = Number(document.getElementById("mixCantidad").value);
  const checks = document.querySelectorAll("input[name='mixPapa']:checked");

if (checks.length < cantidad) {
  mostrarAlert(
    `Te falta elegir ${cantidad - checks.length} tipo(s) de papa`,
    "Completa tu mix"
  );
  return;
}

if (checks.length > cantidad) {
  mostrarAlert(
    `Solo puedes elegir ${cantidad} tipos de papa`,
    "Límite alcanzado"
  );
  return;
}

}

  detalleTemporal = item;

  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-content");

  content.innerHTML = `
    <h2>Revisa tu alimento</h2>
    <div class="modal-resumen-box">
      ${formatearDescripcion(item.descripcion)}
    </div>

    <div style="display:flex; gap:8px; margin-top:12px;">
      <button class="btn-secondary" onclick="abrirPasoPersonalizacion()">← Editar</button>
      <button class="btn-primary" onclick="agregarAlimentoCarrito()">Agregar al carrito</button>
    </div>
  `;
}

/* ==========================
         AGREGAR AL CARRITO
   ========================== */

function agregarAlimentoCarrito(){
  if(!productoSeleccionado || !detalleTemporal) return;

  carrito.push({
  nombre: productoSeleccionado.nombre,
  descripcion: detalleTemporal.descripcion,
  precio: detalleTemporal.precio,

  // 🔥 NUEVO
  productoId: productoSeleccionado.id,
  categoria: categoriaActual,
  estadoFormulario: obtenerEstadoFormulario()
});


  actualizarCarritoUI();
  // ANIMAR EL CARRITO
const icon = document.getElementById("btnCarritoFlotante");
if(icon){
  icon.classList.add("carrito-slide");
  setTimeout(() => icon.classList.remove("carrito-slide"), 700);
}

  closeModal();
  mostrarModalProductoAgregado();

}
function obtenerEstadoFormulario(){
  const data = {};

  document
    .querySelectorAll("#modal-content input, #modal-content select")
    .forEach(el => {
      if(el.type === "radio" || el.type === "checkbox"){
        data[el.id || el.name + "_" + el.value] = el.checked;
      } else {
        data[el.id] = el.value;
      }
    });

  return data;
}

/* ================================
      CARRITO: ABRIR / CERRAR
   ================================ */

function abrirCarrito(){
  renderCarrito();
  document.getElementById("cart-panel").classList.add("open");
}

function cerrarCarrito(){
  document.getElementById("cart-panel").classList.remove("open");
}

/* ================================
      ACTUALIZAR CONTADOR Y TOTAL
   ================================ */

function actualizarCarritoUI(){
  document.getElementById("cart-count").textContent = carrito.length;
  actualizarTotalInferior();
}

function actualizarTotalInferior(){
  const total = carrito.reduce((s, item) => s + item.precio, 0);
  document.getElementById("bottomTotal").textContent = precioFormato(total);
}

/* ================================
            RENDER CARRITO
   ================================ */

function renderCarrito(){
  const body = document.getElementById("cart-panel-body");
  const footer = document.getElementById("cart-panel-footer");

  if(carrito.length === 0){
    body.innerHTML = `<p style="padding:20px; text-align:center; color:#777;">Tu carrito está vacío</p>`;
    footer.innerHTML = "";
    return;
  }

  body.innerHTML = carrito.map((item, idx) => `
    <div class="cart-item">
      <div class="cart-item-title">
        ${item.nombre}
        <small>${item.descripcion.replace(/\n/g, "<br>")}</small>
      </div>
      <div>
        <strong>${precioFormato(item.precio)}</strong>
        <br>
        <button onclick="editarItem(${idx})"
        style="border:none;background:none;font-size:1.2rem;cursor:pointer;">
  ✏️
</button>

<button onclick="eliminarItem(${idx})"
        style="border:none;background:none;color:#ff3b3b;font-size:1.3rem;cursor:pointer;">
  ✕
</button>

      </div>
    </div>
  `).join("");

  footer.innerHTML = `
    <div class="cart-total-line">
      <span>Subtotal</span>
      <strong>${precioFormato(subtotalCarrito())}</strong>
    </div>

    <button class="btn-primary" onclick="abrirPasoPago()">
      Finalizar pedido
    </button>
  `;
}

function eliminarItem(index){
  carrito.splice(index, 1);
  actualizarCarritoUI();
  renderCarrito();
}

function subtotalCarrito(){
  return carrito.reduce((s, i) => s + i.precio, 0);
}
function editarItem(index){
  const item = carrito[index];
  if(!item) return;

  // 1️⃣ Sacar del carrito
  carrito.splice(index, 1);
  actualizarCarritoUI();
  renderCarrito();

  // 2️⃣ Buscar producto original
  const lista = opciones[item.categoria];
  const prod = lista.find(p => p.id === item.productoId);
  if(!prod){
    mostrarAlert("No se pudo editar este producto");
    return;
  }

  // 3️⃣ Preparar estado
  categoriaActual = item.categoria;
  productoSeleccionado = prod;

  // 4️⃣ Abrir modal
  abrirPasoPersonalizacion();

  // 5️⃣ Restaurar valores
  setTimeout(() => {
    restaurarEstadoFormulario(item.estadoFormulario);
    actualizarPreviewPedido();
  }, 50);
}
function restaurarEstadoFormulario(estado){
  if(!estado) return;

  document
    .querySelectorAll("#modal-content input, #modal-content select")
    .forEach(el => {

      const keyRadio = el.name && el.value
        ? el.name + "_" + el.value
        : null;

      if(el.type === "radio" || el.type === "checkbox"){
        if(estado[keyRadio] !== undefined){
          el.checked = estado[keyRadio];
          el.closest("label")?.classList.toggle("selected", el.checked);
        }
      } else {
        if(estado[el.id] !== undefined){
          el.value = estado[el.id];
        }
      }
    });
}

/* ================================
         PASO DE PAGO
   ================================ */
function abrirPasoPago(){
  if(carrito.length === 0){
    showToast("Tu carrito está vacío");
    return;
  }

  const body = document.getElementById("cart-panel-body");
  const footer = document.getElementById("cart-panel-footer");

  const subtotal = subtotalCarrito();

  body.innerHTML = `
    <h2 style="margin-bottom:15px;">Tu carrito</h2>

    <!-- MÉTODO DE ENTREGA -->
    <div class="pedido-section">
      <div class="pedido-title">Método de entrega</div>

      <label class="pedido-option">
        <input type="radio" name="envio" value="domicilio" checked>
        Envío a domicilio (+$10)
      </label>
    </div>

    <!-- MÉTODO DE PAGO -->
    <div class="pedido-section">
      <div class="pedido-title">Método de pago</div>

      <label class="pedido-option">
        <input type="radio" name="pago" value="efectivo" 
onclick="actualizarVisibilidadPagoCon(); ocultarMixtoSiNoCorresponde(); actualizarCostoPedido()">
Efectivo
      </label>

      <label class="pedido-option">
        <input type="radio" name="pago" value="transferencia" 
onclick="actualizarVisibilidadPagoCon(); ocultarMixtoSiNoCorresponde(); actualizarCostoPedido()">
Transferencia
      </label>

      <label class="pedido-option">
        <input type="radio" name="pago" value="tarjeta" 
onclick="actualizarVisibilidadPagoCon(); ocultarMixtoSiNoCorresponde(); actualizarCostoPedido()">
Tarjeta
      </label>
      <label class="pedido-option">
  <input type="radio" name="pago" value="mixto" onclick="mostrarOpcionesMixto(); actualizarCostoPedido()">
  Mixto (Selecciona 2 métodos)
</label>

    </div>
<!-- OPCIONES INTERNAS PARA MIXTO -->
<div id="pagoMixtoOpciones" style="display:none; margin-top:15px;">

  <label class="pedido-option" style="background:#ffeccc;">
    <input type="checkbox" name="mixtoMetodo" value="efectivo" onclick="validarMixto()">
    Efectivo
  </label>

  <label class="pedido-option" style="background:#ffeccc;">
    <input type="checkbox" name="mixtoMetodo" value="transferencia" onclick="validarMixto()">
    Transferencia
  </label>

  <label class="pedido-option" style="background:#ffeccc;">
    <input type="checkbox" name="mixtoMetodo" value="tarjeta" onclick="validarMixto()">
    Tarjeta (3.5%)
  </label>

  <!-- MONTO EN EFECTIVO SI SE SELECCIONA EFECTIVO -->
  <div id="mixtoEfectivoBox" style="display:none; margin-top:10px;">
    <input type="number" id="mixtoEfectivo" class="pedido-input" placeholder="Cantidad a pagar en efectivo" oninput="actualizarCostoPedido()">
  </div>
</div>

    <!-- TUS DATOS -->
    <div class="pedido-section">
      <div class="pedido-title">Tus datos</div>

<div class="pedido-section">
  <div class="pedido-title">Tus datos</div>

  <input type="text"
         id="nombreCliente"
         class="pedido-input"
         placeholder="Nombre">

  <input type="tel"
         id="telefonoCliente"
         class="pedido-input"
         placeholder="Teléfono (10 dígitos)"
         inputmode="numeric"
         pattern="[0-9]{10}"
         maxlength="10"
         required>

    <div style="display:flex; gap:10px;">
  <button class="btn-primary" style="flex:1;" onclick="obtenerUbicacion()">
      Obtener mi ubicación 📍
  </button>

  <button class="btn-secondary" style="flex:1;" onclick="enviarUbicacionPorWhatsApp()">
      Enviar ubicación por WhatsApp 💬
  </button>
</div>


<input type="hidden" id="direccionCliente">
<div id="ubicacionTexto" style="margin-top:10px; font-size:0.9rem; color:#444;"></div>

      <input type="text" id="referenciasCliente" class="pedido-input" placeholder="Referencias">
      <input type="text" id="notasCliente" class="pedido-input" placeholder="Notas">
     <div id="contenedorPagoCon" style="display:none; margin-top:10px;">
    <input type="number" id="pagoCon" class="pedido-input"
           placeholder="¿Con cuánto pagas?"
           oninput="actualizarCostoPedido()">
</div>

    </div>
  `;

  footer.innerHTML = `
    <div class="cart-total-line">
      <span>Subtotal</span>
      <strong id="pedidoSubtotal">${precioFormato(subtotal)}</strong>
    </div>

    <div class="cart-total-line">
      <span>Envío</span>
      <strong id="pedidoEnvio">$0.00</strong>
    </div>

    <div class="cart-total-line">
      <span>Comisión</span>
      <strong id="pedidoComision">$0.00</strong>
    </div>

    <div class="cart-total-line" style="font-size:1.2rem;">
      <span>Total</span>
      <strong id="pedidoTotal">${precioFormato(subtotal)}</strong>
    </div>
<div class="cart-total-line" id="lineaCambio" style="display:none;">
  <span>Cambio</span>
  <strong id="pedidoCambio">$0.00</strong>
</div>

    <button class="btn-primary" onclick="enviarPedidoWhatsApp()">
      Enviar pedido
    </button>
  `;

  actualizarCostoPedido();
}
function enviarUbicacionPorWhatsApp(){
  const mensaje =
    "Hola 👋\n" +
    "Te enviaré mi ubicación manualmente después de mandar el pedido.";

  // 🔴 MARCAMOS QUE LA UBICACIÓN ES MANUAL
  ubicacionManual = true;

  // Valor dummy solo para pasar validación
  document.getElementById("direccionCliente").value = "UBICACION_MANUAL";

  document.getElementById("ubicacionTexto").innerHTML =
    "<strong>Ubicación se enviará manualmente por WhatsApp ✔</strong>";
}


function obtenerUbicacion(){
  if(!navigator.geolocation){
    showToast("La ubicación no es compatible en este dispositivo");
    return;
  }

  showToast("Obteniendo ubicación...");

  navigator.geolocation.getCurrentPosition(pos => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    const url = `https://www.google.com/maps?q=${lat},${lng}`;

    document.getElementById("direccionCliente").value = url;
    document.getElementById("ubicacionTexto").innerHTML = `
      <strong>Ubicación detectada:</strong><br>
      <a href="${url}" target="_blank" style="color:#ff7a00;">
        Ver en Google Maps
      </a>
    `;
  },
  err => {
    showToast("No se pudo obtener la ubicación");
  });
}

/* ================================
       GENERAR TOTAL FINAL
   ================================ */

function totalConExtras(){
  let total = subtotalCarrito();

  // entrega
  const entrega = getRadioValue("metodoEntrega");
  if(entrega === "Envio") total += COSTO_ENVIO;

  // tarjeta
  const metodo = getRadioValue("pagoMetodo");
  // =============================
// DATOS PARA TRANSFERENCIA
// =============================
let datosTransfer = "";
if (metodo === "Transferencia") {
    datosTransfer =
        "\n📌 *Datos para Transferencia*\n" +
        "🏦 Banco: Nu\n" +
        "👤 Nombre: Fernando Gael Duran Zamora\n" +
        "🔢 CLABE: 638180000136730578\n";
}

  if(metodo === "Tarjeta"){
    total += total * COMISION_TARJETA;
  }

  return total;
}

/* ================================
      WHATSAPP: ENVIAR PEDIDO
   ================================ */
function enviarPedidoWhatsApp() {
    const nombre = document.getElementById("nombreCliente").value.trim();
const telefonoRaw = document.getElementById("telefonoCliente").value.trim();
const telefonoPedido = limpiarTelefono(telefonoRaw);
if (!nombre) {
  showToast("Ingresa tu nombre");
  return;
}

if (!telefonoPedido || telefonoPedido.length !== 10) {
  showToast("Ingresa un teléfono válido de 10 dígitos");
  return;
}


    const dire   = document.getElementById("direccionCliente").value.trim(); // URL de Google Maps
    const ref    = document.getElementById("referenciasCliente").value.trim();
    const notas  = document.getElementById("notasCliente").value.trim();

    const metodoPago = getRadioValue("pago");

    if (!nombre) {
        showToast("Ingresa tu nombre");
        return;
    }
if (!dire) {
  showToast("Comparte tu ubicación automática o por WhatsApp");
  return;
}

    if (!metodoPago) {
        showToast("Selecciona un método de pago");
        return;
    }

    // ----- COSTOS -----
    const subtotal = subtotalCarrito();

    const envioSel   = document.querySelector('input[name="envio"]:checked')?.value;
    const costoEnvio = envioSel === "domicilio" ? COSTO_ENVIO : 0;

    const comisionTarjeta = metodoPago === "tarjeta"
        ? subtotal * COMISION_TARJETA
        : 0;

    let total = subtotal + costoEnvio + comisionTarjeta;

    // ----- VALIDAR EFECTIVO (normal o mixto) -----
    let detalleMixto = "";
    let metodosMixtos = [];

    // EFECTIVO NORMAL
    if (metodoPago === "efectivo") {
        const pagoConInput = document.getElementById("pagoCon");
        const pagoCon = Number(pagoConInput ? pagoConInput.value : 0);

        if (!pagoCon || pagoCon <= 0) {
            showToast("Ingresa con cuánto pagas");
            return;
        }
        if (pagoCon < total) {
            showToast(`El pago debe ser mayor o igual al total (${precioFormato(total)})`);
            return;
        }
    }

    // PAGO MIXTO
    if (metodoPago === "mixto") {
        const seleccionados = [...document.querySelectorAll("input[name='mixtoMetodo']:checked")];

        if (seleccionados.length !== 2) {
            showToast("Selecciona exactamente 2 métodos en pago mixto");
            return;
        }

        metodosMixtos = seleccionados.map(x => x.value);

        // Efectivo dentro de mixto → obligatorio monto
        if (metodosMixtos.includes("efectivo")) {
            const efInput = document.getElementById("mixtoEfectivo");
            const ef = Number(efInput ? efInput.value : 0);

            if (!ef || ef <= 0) {
                showToast("Indica cuánto pagas en efectivo (pago mixto)");
                return;
            }

            detalleMixto += `• Efectivo: $${ef.toFixed(2)}\n`;
        }

        // Transferencia dentro de mixto
        if (metodosMixtos.includes("transferencia")) {
            detalleMixto +=
                "\n🏦 *Transferencia*\n" +
                "Banco: Nu\n" +
                "Nombre: Fernando Gael Duran Zamora\n" +
                "CLABE: 638180000136730578\n";
        }

        // Tarjeta dentro de mixto
        if (metodosMixtos.includes("tarjeta")) {

    // Lo que sí se pagará con tarjeta (subtotal - efectivo + envío)
    let baseTarjeta = subtotal + costoEnvio;

    // Si hay efectivo en mixto → se descuenta
    if (metodosMixtos.includes("efectivo")) {
        const ef = Number(document.getElementById("mixtoEfectivo").value);
        baseTarjeta -= ef;
    }

    const comMixto = baseTarjeta * COMISION_TARJETA;

    total += comMixto;

    detalleMixto += `\n💳 Pago con tarjeta (3.5% extra): +$${comMixto.toFixed(2)}\n`;
}

    }

    // ----- DETALLE DEL CARRITO (cómo va preparado) -----
    const productosMensaje = carrito
        .map((item, i) => `🍽️ *${i + 1}. ${item.nombre}*\n${item.descripcion}`)
        .join("\n\n");

    // ----- ARMAR MENSAJE FINAL -----
    let mensaje  = "📌 *Pedido La Carpita*\n\n";
    mensaje     += productosMensaje + "\n\n";
    mensaje     += "-----------------------\n";
    mensaje     += `🧾 Subtotal: ${precioFormato(subtotal)}\n`;
    mensaje     += `🚚 Envío: ${precioFormato(costoEnvio)}\n`;
    if (comisionTarjeta > 0) {
        mensaje += `💳 Comisión tarjeta: ${precioFormato(comisionTarjeta)}\n`;
    }
    mensaje     += `💰 Total: ${precioFormato(total)}\n`;
    mensaje     += "-----------------------\n";

    mensaje     += `👤 Nombre: *${nombre}*\n`;
mensaje += `📞 Teléfono: *${telefonoPedido}*\n`;

    // 🔹 AQUÍ VA LO DE LA IMAGEN (UBICACIÓN)
    // 🔹 UBICACIÓN
if (ubicacionManual) {
    mensaje += "📍 Ubicación: *Se enviará manualmente por WhatsApp*\n";
} else if (dire) {
    mensaje += "📍 Ubicación (Google Maps):\n";
    mensaje += `${dire}\n`;
}


    if (ref)   mensaje += `📌 Referencias: ${ref}\n`;
    if (notas) mensaje += `📝 Notas: ${notas}\n`;

    mensaje += `\n💳 Método de pago: *${metodoPago}*\n`;

// 🔥 DETALLE DE PAGO ANTES DEL LINK
if (metodoPago === "mixto" && detalleMixto) {
    mensaje += "\n💳 *Detalle pago mixto:*\n" + detalleMixto;
} 
else if (metodoPago === "efectivo") {
    const pagoCon = Number(document.getElementById("pagoCon").value);
    const cambio  = pagoCon - total;
    mensaje += `\n💵 Pagas con: $${pagoCon.toFixed(2)}\n`;
    mensaje += `🔁 Cambio: $${cambio.toFixed(2)}\n`;
}
else if (metodoPago === "transferencia") {
    mensaje +=
        "\n🏦 *Datos para transferir:*\n" +
        "Banco: Nu\n" +
        "Nombre: Fernando Gael Duran Zamora\n" +
        "CLABE: 638180000136730578\n";
}
else if (metodoPago === "tarjeta") {
    mensaje += "\n💳 Pago con tarjeta (3.5% extra)\n";
}

// 🔗 AHORA SÍ, CREAR LINK
// 🧠 Guardar pedido localmente (RESPALDO)


const pedidoId = Date.now(); // ID único

const pedidoObj = {
  id: pedidoId,
  telefono: telefonoPedido,
  texto: mensaje,
  estado: "RECIBIDO",
  fecha: new Date().toLocaleString()
};

// 📦 carpeta por teléfono
const key = "pedidos_" + telefonoPedido;
let pedidos = JSON.parse(localStorage.getItem(key)) || [];

pedidos.push(pedidoObj);
localStorage.setItem(key, JSON.stringify(pedidos));

// 📋 cola de cocina (referencia)
let cola = JSON.parse(localStorage.getItem("cola_pedidos")) || [];
cola.push({ tel: telefonoPedido, id: pedidoId });
localStorage.setItem("cola_pedidos", JSON.stringify(cola));

const linkPanel =
  `${URL_PANEL_NEGOCIO}?tel=${telefonoPedido}`;

mensaje += `\n\n🧾 *Abrir pedido en sistema:*\n${linkPanel}`;



    // Enviar a WhatsApp
    const url = `https://wa.me/${525657861068}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}

/* ================================
      CÓDIGO VERIFICADOR
   ================================ */

function generarCodigo(){
  const r = Math.floor(Math.random() * 90000) + 10000;
  return "LC-" + r;
}

/* ================================
      HELPER: NOMBRE ADEREZO COMBO
   ================================ */

function nombreAderezoCombo(i, prod){

  // SUPER COMBOS – 2 alimentos + papas
  if(prod.tipoCombo === "super"){
      switch(prod.id){
          case "super1": 
              return i === 1 ? "Boneless" : "Alitas";
          case "super2":
              return i === 1 ? "Tenders" : "Boneless";
          case "super3":
              return i === 1 ? "Dedos" : "Palomitas";
          case "super4":
              return i === 1 ? "Dedos" : "Boneless";
          case "super5":
              return i === 1 ? "Alitas" : "Palomitas";
          case "super6":
              return i === 1 ? "Palomitas" : "Tenders";
      }
  }

  // MEGA COMBOS – 3 alimentos
  if(prod.tipoCombo === "mega"){
      switch(prod.id){
          case "mega1":
              return i === 1 ? "Boneless" :
                     i === 2 ? "Alitas" : "Dedos";

          case "mega2":
              return i === 1 ? "Tenders" :
                     i === 2 ? "Palomitas" : "Boneless";

          case "mega3":
              return i === 1 ? "Tenders" :
                     i === 2 ? "Dedos" : "Boneless";
      }
  }

  return "Aderezo " + i;
}

function selectPapasModo(tipo){
  const btnTodo = document.getElementById("btnTodo");
  const btnSolo = document.getElementById("btnSolo");
  const btnPers = document.getElementById("btnPers");
  const box = document.getElementById("boxPersonalizarPapas");

  // 👉 GUARDAR ESTADO
  modoPapas = tipo;

  // reset visual
  [btnTodo, btnSolo, btnPers].forEach(b => b && b.classList.remove("active"));

  if(tipo === "todo"){
    btnTodo.classList.add("active");
    box.style.display = "none";

    document.querySelector("input[name='quesoPapa'][value='Untado']").checked = true;
    document.querySelector("input[name='catsupPapa'][value='Untado']").checked = true;
    document.querySelector("input[name='salsaPapa'][value='Untado']").checked = true;

  } 
  else if(tipo === "solo"){
    btnSolo.classList.add("active");
    box.style.display = "none";

    document.querySelector("input[name='quesoPapa'][value='Sin']").checked = true;
    document.querySelector("input[name='catsupPapa'][value='Sin']").checked = true;
    document.querySelector("input[name='salsaPapa'][value='Sin']").checked = true;
  } 
  else {
    btnPers.classList.add("active");
    box.style.display = "block";
  }

  actualizarPreviewPedido();
}


function formatearDescripcion(texto){
  let lineas = texto.trim().split("\n");

  let html = `<div style="line-height:1.4; font-size:0.9rem; color:#5a3212;">`;

  // Primera línea: Nombre + precio
  html += `<div style="font-weight:800; font-size:1rem; margin-bottom:8px;">
            ${lineas[0]}
          </div>`;

  // Secciones
  let buffer = [];

  for(let i = 1; i < lineas.length; i++){
    const l = lineas[i].trim();
    if(l === "") continue;

    buffer.push(`• ${l}`);
  }

  html += buffer.join("<br>");

  html += `</div>`;
  return html;
}
function actualizarCostoPedido(){
  const subtotal = subtotalCarrito();

  // ENVÍO
  const envioSel = document.querySelector('input[name="envio"]:checked')?.value;
  const costoEnvio = envioSel === "domicilio" ? 10 : 0;

  // COMISIÓN (solo tarjeta)
  const pagoSel = document.querySelector('input[name="pago"]:checked')?.value;
  const costoComision = pagoSel === "tarjeta" ? subtotal * 0.035 : 0;

  const total = subtotal + costoEnvio + costoComision;

  document.getElementById("pedidoEnvio").textContent   = precioFormato(costoEnvio);
  document.getElementById("pedidoComision").textContent = precioFormato(costoComision);
  document.getElementById("pedidoTotal").textContent     = precioFormato(total);
// --- CÁLCULO DE CAMBIO ---
const metodo = getRadioValue("pago");
if (metodo === "efectivo") {
    const pagoCon = Number(document.getElementById("pagoCon").value);
    if (pagoCon && pagoCon >= total) {
        const cambio = pagoCon - total;
        document.getElementById("pedidoCambio").textContent = precioFormato(cambio);
    } else {
        document.getElementById("pedidoCambio").textContent = "$0.00";
    }
} else {
    // Si NO es efectivo, limpiamos el campo del cambio
    document.getElementById("pedidoCambio").textContent = "$0.00";
}

// CALCULAR CAMBIO SI ES EFECTIVO
const inputPago = document.getElementById("pagoCon");
const lineaCambio = document.getElementById("lineaCambio");
const cambioText = document.getElementById("pedidoCambio");

if(pagoSel === "efectivo"){
    const pago = parseFloat(inputPago.value);

    if(!isNaN(pago) && pago >= total){
        const cambio = pago - total;
        lineaCambio.style.display = "flex";
        cambioText.textContent = precioFormato(cambio);
    } else {
        lineaCambio.style.display = "none";
    }
} else {
    lineaCambio.style.display = "none";
}

}

// CAMBIOS AUTOMÁTICOS
document.addEventListener("change", (e)=>{
  if(e.target.name === "envio" || e.target.name === "pago"){
    actualizarCostoPedido();
  }
});
document.addEventListener("input", (e)=>{
    if(e.target.id === "pagoCon"){  
        actualizarCostoPedido();
    }
});
/**************************************
 * ACTIVADOR PARA RADIO Y CHECKBOX BONITO
 **************************************/

// RADIO BONITO
document.addEventListener("click", function(e){
  const radio = e.target.closest(".radio-bonito");
  if(radio){
    const group = radio.closest(".radio-bonito-group");

    // quitar selección previa
    group.querySelectorAll(".radio-bonito").forEach(r => r.classList.remove("selected"));

    // marcar seleccionado
    radio.classList.add("selected");

    // activar input
    const input = radio.querySelector("input");
    if(input) input.checked = true;
  }
});

// CHECKBOX BONITO
document.addEventListener("click", function(e){
  const check = e.target.closest(".checkbox-bonito");
  if(check){
    check.classList.toggle("selected");

    const input = check.querySelector("input");
    if(input){
      input.checked = check.classList.contains("selected");
    }
  }
});
// =====================
// CHECKBOX BONITO FIXED
// =====================
document.addEventListener("click", function(e){
    const box = e.target.closest(".checkbox-bonito");
    if(box){
        box.classList.toggle("selected");

        const input = box.querySelector("input[type='checkbox']");
        input.checked = box.classList.contains("selected");

        // Mostrar/ocultar sección de doble aderezo
        if(input.id === "dobleAderezo"){
            document.getElementById("seccionDobleAderezo").style.display =
                input.checked ? "block" : "none";
        }
    }
});
// === Manejador del checkbox "Doble aderezo" con diseño bonito ===
document.addEventListener("change", function (e) {
  // Solo queremos escuchar cuando cambia el checkbox oculto
  if (e.target && e.target.id === "dobleAderezo") {
    const chk   = e.target;
    const label = document.getElementById("checkboxDoble");
    const box   = document.getElementById("seccionDobleAderezo");

    // poner / quitar clase visual
    if (label) {
      label.classList.toggle("selected", chk.checked);
    }

    // mostrar / ocultar la sección de aderezo extra
    if (box) {
      box.style.display = chk.checked ? "block" : "none";
    }
  }
});
function toggleCheckboxDoble() {
  const label = document.getElementById("checkboxDoble");
  const chk = document.getElementById("dobleAderezo");
  const box = document.getElementById("seccionDobleAderezo");

  chk.checked = !chk.checked; // alterna valor

  if (chk.checked) {
    label.classList.add("selected");
    box.style.display = "block";
  } else {
    label.classList.remove("selected");
    box.style.display = "none";
  }
}
function toggleCheckBonito(label, index){
  const chk = label.querySelector("input");
  chk.checked = !chk.checked;

  label.classList.toggle("selected", chk.checked);

  const box = document.getElementById("comboDobleBox" + index);
  box.style.display = chk.checked ? "block" : "none";
}
function seleccionarRadioBonito(label){
  const parent = label.parentNode;
  parent.querySelectorAll(".radio-bonito").forEach(x => x.classList.remove("selected"));
  label.classList.add("selected");
}
function actualizarVisibilidadPagoCon() {
  const metodo = getRadioValue("pago");

  const contenedor = document.getElementById("contenedorPagoCon");
  const lineaCambio = document.getElementById("lineaCambio");

  if (metodo === "efectivo") {
    contenedor.style.display = "block";
    lineaCambio.style.display = "flex";
  } else {
    contenedor.style.display = "none";
    lineaCambio.style.display = "none";
  }

  actualizarCostoPedido();
}

function mostrarOpcionesMixto() {
    document.getElementById("pagoMixtoOpciones").style.display = "block";
    document.getElementById("contenedorPagoCon").style.display = "none"; // evita confusión
}
function validarMixto() {
    const metodos = document.querySelectorAll("input[name='mixtoMetodo']:checked");

    if (metodos.length > 2) {
        mostrarAlert("Solo puedes elegir dos métodos en pago mixto", "Límite alcanzado");
        event.target.checked = false;
        return;
    }

    // Mostrar caja de efectivo solo si seleccionó EFECTIVO
    const efectivo = [...metodos].some(m => m.value === "efectivo");
    document.getElementById("mixtoEfectivoBox").style.display = efectivo ? "block" : "none";
}
function ocultarMixtoSiNoCorresponde() {
    const pagoMixtoOpciones = document.getElementById("pagoMixtoOpciones");
    const checkMixto = document.querySelectorAll("input[name='mixtoMetodo']");

    // Ocultar opciones mixtas
    pagoMixtoOpciones.style.display = "none";

    // Limpiar checks
    checkMixto.forEach(c => c.checked = false);

    // Ocultar campo de efectivo en mixto
    document.getElementById("mixtoEfectivoBox").style.display = "none";
}
function tieneDosAderezosGratis(p){
  const nombre = p.nombre.toLowerCase();

  return (
    nombre.includes("alitas gd") ||
    nombre.includes("dedos gd")
  );
}
/* =========================
   GUIA PARA CLIENTES (PRO)
========================= */

const pasosGuia = [
  `
  👋 <b>Bienvenido a La Carpita</b><br><br>
  Te enseñamos con un <b>ejemplo real</b> cómo pedir 👇
  `,
  `
  🍗 <b>Paso 1: Elegir producto</b><br><br>
  Ejemplo:<br>
  👉 Tocas <b>Boneless con papas</b>
  `,
  `
  🎛️ <b>Paso 2: Personalizar</b><br><br>
  Ejemplo:<br>
  • Papas: <b>con todo</b><br>
  • Aderezo: <b>BBQ untado</b>
  `,
  `
  🧾 <b>Paso 3: Revisar</b><br><br>
  Ves algo así:<br>
  <i>
  Boneless con papas<br>
  Papas con todo<br>
  Aderezo BBQ
  </i>
  `,
  `
  🛒 <b>Paso 4: Carrito</b><br><br>
  Puedes:<br>
  ✏️ Editar<br>
  ❌ Quitar productos
  `,
  `
  📍 <b>Paso 5: Tus datos</b><br><br>
  Escribes tu nombre<br>
  y compartes ubicación 📍
  `,
  `
  💬 <b>Paso 6: Enviar</b><br><br>
  Tocás <b>Enviar pedido</b><br>
  y listo, llega por WhatsApp 🔥
  `
];

let pasoGuiaActual = 0;

function iniciarGuia(){
  const overlay = document.getElementById("guiaOverlay");
  const texto = document.getElementById("guiaTexto");
  const btn = document.getElementById("guiaBtn");
  const skip = document.getElementById("guiaSkip");

  pasoGuiaActual = 0;
  overlay.style.display = "flex";
  texto.innerHTML = pasosGuia[pasoGuiaActual];

  btn.onclick = () => {
    pasoGuiaActual++;
    if(pasoGuiaActual >= pasosGuia.length){
      cerrarGuia();
    }else{
      texto.innerHTML = pasosGuia[pasoGuiaActual];
    }
  };

  skip.onclick = cerrarGuia;
}

function cerrarGuia(){
  document.getElementById("guiaOverlay").style.display = "none";
  localStorage.setItem("guiaVista", "1");
}

/* MOSTRAR SOLO LA PRIMERA VEZ */
document.addEventListener("DOMContentLoaded", ()=>{
  if(!localStorage.getItem("guiaVista")){
    setTimeout(iniciarGuia, 800);
  }
});
/**************************************
 * CHECKBOX MIX PAPAS – AISLADO
 **************************************/
document.addEventListener("click", function (e) {
  const label = e.target.closest(".checkbox-mix");
  if (!label) return;

  // 🔒 Evita que se dispare el resto de handlers
  e.stopPropagation();
  e.preventDefault();

  const input = label.querySelector("input[type='checkbox']");
  if (!input) return;

  // Toggle manual
  input.checked = !input.checked;
  label.classList.toggle("selected", input.checked);

  // Refrescar preview
  setTimeout(actualizarPreviewPedido, 0);
});
function mostrarAlert(mensaje, titulo = "Atención"){
  document.getElementById("alertTitle").textContent = titulo;
  document.getElementById("alertMessage").textContent = mensaje;
  document.getElementById("alertModal").style.display = "flex";
}

function cerrarAlert(){
  document.getElementById("alertModal").style.display = "none";
}
/**************************************
 * AUTO SELECCIÓN MIX DE PAPAS (4)
 **************************************/
document.addEventListener("change", function (e) {
  if (e.target && e.target.id === "mixCantidad") {

    const cantidad = Number(e.target.value);
    const checks = document.querySelectorAll("input[name='mixPapa']");
    
    // 🔥 SI SELECCIONA 4 → MARCAR TODAS
    if (cantidad === 4) {
      checks.forEach(chk => {
        chk.checked = true;
        chk.closest(".checkbox-bonito")?.classList.add("selected");
      });
    } 
    // 🔁 SI BAJA DE 4 → DESMARCAR TODAS
    else {
      checks.forEach(chk => {
        chk.checked = false;
        chk.closest(".checkbox-bonito")?.classList.remove("selected");
      });
    }

    // Refrescar preview
    setTimeout(actualizarPreviewPedido, 0);
  }
});
/* ===============================
   MODO OSCURO
================================ */

function toggleTheme(){
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");

  if(current === "dark"){
    html.removeAttribute("data-theme");
    localStorage.setItem("theme","light");
    document.getElementById("btnTheme").textContent = "🌙";
  }else{
    html.setAttribute("data-theme","dark");
    localStorage.setItem("theme","dark");
    document.getElementById("btnTheme").textContent = "☀️";
  }
}

/* Cargar preferencia */
document.addEventListener("DOMContentLoaded", ()=>{
  const theme = localStorage.getItem("theme");
  if(theme === "dark"){
    document.documentElement.setAttribute("data-theme","dark");
    const btn = document.getElementById("btnTheme");
    if(btn) btn.textContent = "☀️";
  }
});
/* ==============================
   BOTÓN SECRETO COCINA
================================ */

/* ==============================
   ACCESO SECRETO COCINA (5 TOQUES)
================================ */

(function activarAccesoCocina(){
  const logo = document.getElementById("logoSecreto");
  if(!logo) return;

  let contador = 0;
  let timerReset = null;

  logo.addEventListener("click", () => {
    contador++;

    // reset si tarda mucho
    clearTimeout(timerReset);
    timerReset = setTimeout(() => {
      contador = 0;
    }, 1500);

    // 🔓 5 toques = acceso
    if(contador >= 5){
      contador = 0;
      abrirPanelCocina();
    }
  });
})();

function abrirPanelCocina(){
  const pin = prompt("PIN cocina:");

  if(pin !== "230321"){   // 🔒 cambia el PIN
    showToast("Acceso denegado");
    return;
  }

  window.location.href = "./pedido-negocio.html";
}

function limpiarTelefono(txt){
  return txt.replace(/\D/g, "").slice(-10);
}
