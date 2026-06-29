const products = [
    // --- BONELESS ---
    { id: 1, name: 'Boneless Sencillos', price: 70, category: 'snacks', subCategory: 'boneless', desc: 'Trozos de pechuga crujientes y jugosos.', hasChips: false, image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Boneless con Papas', price: 85, category: 'snacks', subCategory: 'boneless', desc: 'Nuestros boneless clásicos acompañados de papas.', hasChips: true, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzjyV70NalE8nXTM69Abs6Ssl8JwHCz5jY1q6wvi1BA&s' },

    // --- TENDERS ---
    { id: 3, name: 'Tenders (5 pz)', price: 70, category: 'snacks', subCategory: 'tenders', desc: '5 tiras de pollo perfectamente empanizadas.', hasChips: false, image: 'https://foodservice.grupobachoco.com/images/productos/5171_TENDER-EMPANIZADO_Plat.jpg' },
    { id: 4, name: 'Tenders con Papas', price: 85, category: 'snacks', subCategory: 'tenders', desc: '5 tiras de pollo crujiente servidas con papas.', hasChips: true, image: 'https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/chicken_tenders_and_fries.jpg' },

    // --- PALOMITAS ---
    { id: 5, name: 'Palomitas de Pollo', price: 70, category: 'snacks', subCategory: 'palomitas', desc: 'Esferas crujientes de pollo sazonado.', hasChips: false, image: 'https://www.cocinadelirante.com/sites/default/files/images/2024/03/receta-de-palomitas-de-pollo-sin-freir.jpg' },
    { id: 6, name: 'Palomitas con Papas', price: 85, category: 'snacks', subCategory: 'palomitas', desc: 'Popcorn chicken acompañado de papas fritas.', hasChips: true, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxMGqp_dn1p7m6z42HWdrL4AB-GdiNfaGMkiCQ2SOwf6zckW-5jtr6QP5&s=10' },

    // --- ALITAS ---
    { id: 7, name: 'Alitas Chicas (6 pz)', price: 75, category: 'snacks', subCategory: 'alitas', desc: '6 jugosas alitas listas para bañar en salsa.', hasChips: false, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTecW6_WLBEhdeKKcdXHjZPZQhP9---D_O-7npkRq0JRVdfIv1uYTQ-Aylx&s=10' },
    { id: 8, name: 'Alitas Chicas con Papas', price: 90, category: 'snacks', subCategory: 'alitas', desc: '6 alitas acompañadas de una porción de papas.', hasChips: true, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Q3_kgVxn0VFSarsMAJ-I53zG3DQsCp2lWBvE3TLqlg&s=10' },
    { id: 9, name: 'Alitas Grandes (14 pz)', price: 175, category: 'snacks', subCategory: 'alitas', desc: 'Para compartir: 14 piezas de nuestras alitas.', hasChips: false, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuEFrHg40DfabrLwnzajLb1lfsMTpuxnfgHGF3dghoIl2_aVtouDPXoYxm&s=10' },
    { id: 10, name: 'Alitas Grandes con Papas', price: 195, category: 'snacks', subCategory: 'alitas', desc: '14 alitas grandes acompañadas con papas.', hasChips: true, image: 'https://media-cdn.tripadvisor.com/media/photo-s/18/ae/84/30/tiernas-alitas-de-pollo.jpg' },

    // --- DEDOS DE QUESO ---
    { id: 11, name: 'Dedos Chicos (6 pz)', price: 60, category: 'banderillas', subCategory: 'dedos', desc: '6 palitos de queso mozzarella crujiente.', hasChips: false, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9j9NPCr7vAcjj4NCwHaPNdRo5Db9ykoPJVBJMJsn0SA&s=10' },
    { id: 12, name: 'Dedos Chicos con Papas', price: 80, category: 'banderillas', subCategory: 'dedos', desc: '6 dedos de queso acompañados de papas.', hasChips: true, image: 'https://http2.mlstatic.com/D_Q_NP_680244-MLM109823452274_042026-F.webp' },
    { id: 13, name: 'Dedos Grandes (14 pz)', price: 135, category: 'banderillas', subCategory: 'dedos', desc: 'Charola grande con 14 dedos de queso mozzarella.', hasChips: false, image: 'https://i.blogs.es/ae5816/dedos-de-queso-empanizados-freidora-de-aire-2-/650_1200.jpg' },
    { id: 14, name: 'Dedos Grandes con Papas', price: 155, category: 'banderillas', subCategory: 'dedos', desc: '14 dedos de queso acompañados con papas.', hasChips: true, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLT1gd8ac49vy2ufWlcAqC_Nio14TteC84BkFWuD2C1dRQfxkAOxav8jUN&s=10' },

    // --- BANDERILLAS Y SALCHIS ---
    { id: 15, name: 'Banderilla Salchicha', price: 30, category: 'banderillas', subCategory: 'banderillas', desc: 'Banderilla clásica frita al momento.', hasChips: false, image: 'img/BS.jpg' },
    { id: 16, name: 'Banderilla Queso', price: 35, category: 'banderillas', subCategory: 'banderillas', desc: 'Rellena completamente de queso derretido.', hasChips: false, image: 'img/BQ.jpg' },
    { id: 17, name: 'Banderilla Combinada', price: 35, category: 'banderillas', subCategory: 'banderillas', desc: 'Mitad salchicha y mitad queso mozzarella.', hasChips: false, image: 'img/BC.jpg' },
    { id: 18, name: 'Mini Salchicha (6 pz)', price: 60, category: 'banderillas', subCategory: 'banderillas', desc: '6 deliciosas minibanderillas de salchicha.', hasChips: false, image: 'img/MBS.jpg' },
    { id: 19, name: 'Mini Salchicha con Papas', price: 75, category: 'banderillas', subCategory: 'banderillas', desc: '6 minibanderillas de salchicha con papas.', hasChips: true, image: 'img/MBSP.jpg' },
    { id: 20, name: 'Mini Queso (6 pz)', price: 65, category: 'banderillas', subCategory: 'banderillas', desc: '6 minibanderillas rellenas puramente de queso.', hasChips: false, image: 'img/MBQ.jpg' },
    { id: 21, name: 'Mini Queso con Papas', price: 80, category: 'banderillas', subCategory: 'banderillas', desc: '6 minibanderillas de queso acompañadas con papas.', hasChips: true, image: 'img/MBQP.jpg' },
    { id: 22, name: 'Mini Combinadas (6 pz)', price: 65, category: 'banderillas', subCategory: 'banderillas', desc: '6 piezas de minibanderillas surtidas.', hasChips: false, image: 'img/MBC.jpg' },
    { id: 23, name: 'Mini Combinadas con Papas', price: 80, category: 'banderillas', subCategory: 'banderillas', desc: '6 piezas de minibanderillas mixtas con papas.', hasChips: true, image: 'img/MBCP.jpg' },
    { id: 24, name: 'Salchipulpos (10 pz)', price: 55, category: 'banderillas', subCategory: 'banderillas', desc: '10 piezas divertidas de salchicha frita.', hasChips: false, image: 'https://i.pinimg.com/736x/a1/e3/e6/a1e3e64cb8746e8711f0ec98b0562fb0.jpg' },
    { id: 25, name: 'Salchipapas', price: 70, category: 'banderillas', subCategory: 'banderillas', desc: 'Combinación perfecta de salchichas y papas.', hasChips: true, image: 'https://tofuu.getjusto.com/orioneat-local/resized2/wbDJFHXo6gKgkBp4m-2400-x.webp' },

    // --- PAQUETES ---
    { id: 26, name: 'Paquete Súper 1', price: 150, category: 'paquetes', subCategory: 'paquetes', desc: 'Boneless (1 aderezo) + Alitas (1 aderezo) + Papas. (2 Aderezos en total)', hasChips: true, image: 'img/S1.jpg' },
    { id: 27, name: 'Paquete Súper 2', price: 140, category: 'paquetes', subCategory: 'paquetes', desc: 'Tenders (1 aderezo) + Boneless (1 aderezo) + Papas. (2 Aderezos en total)', hasChips: true, image: 'img/S2.jpg' },
    { id: 28, name: 'Paquete Súper 3', price: 120, category: 'paquetes', subCategory: 'paquetes', desc: 'Dedos (1 aderezo) + Palomitas (1 aderezo) + Papas. (2 Aderezos en total)', hasChips: true, image: 'img/S3.jpg' },
    { id: 29, name: 'Paquete Súper 4', price: 140, category: 'paquetes', subCategory: 'paquetes', desc: 'Dedos (1 aderezo) + Boneless (1 aderezo) + Papas. (2 Aderezos en total)', hasChips: true, image: 'img/S4.jpg' },
    { id: 30, name: 'Paquete Súper 5', price: 135, category: 'paquetes', subCategory: 'paquetes', desc: 'Alitas (1 aderezo) + Palomitas (1 aderezo) + Papas. (2 Aderezos en total)', hasChips: true, image: 'img/S5.jpg' },
    { id: 31, name: 'Paquete Súper 6', price: 135, category: 'paquetes', subCategory: 'paquetes', desc: 'Palomitas (1 aderezo) + Tenders (1 aderezo) + Papas. (2 Aderezos en total)', hasChips: true, image: 'img/S6.jpg' },
    { id: 32, name: 'Paquete Mega 1', price: 185, category: 'paquetes', subCategory: 'paquetes', desc: 'Boneless + Alitas + Dedos.', hasChips: false, image: 'img/M1.jpg' },
    { id: 33, name: 'Paquete Mega 2', price: 175, category: 'paquetes', subCategory: 'paquetes', desc: 'Tenders + Palomitas + Boneless.', hasChips: false, image: 'img/M2.jpg' },
    { id: 34, name: 'Paquete Súper Mega', price: 200, category: 'paquetes', subCategory: 'paquetes', desc: 'Tenders + Dedos + Boneless + Papas.', hasChips: true, image: 'img/SM.jpg' },

    // --- PAPAS INDIVIDUALES ---
    { id: 35, name: 'Papas Francesa', price: 60, category: 'paquetes', subCategory: 'papas', desc: 'Porción individual clásica de papas fritas.', hasChips: true, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoAhis1z1PdZuJ0LPPkfAccVlv86n1aSayDoJKrB34ysr-RS2C-JwZnAU&s=10' },
    { id: 36, name: 'Papas Curly', price: 60, category: 'paquetes', subCategory: 'papas', desc: 'Papas sazonadas en espiral.', hasChips: true, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDg8lJ0xBVThwuCjQSxS6bNgav9lLNKsfIgiTSgSmYlX1E7fERwyWz9RL7&s=10' },
    { id: 37, name: 'Papas Waffle', price: 60, category: 'paquetes', subCategory: 'papas', desc: 'Papas en corte rejilla crujientes.', hasChips: true, image: 'https://carnesmag.mx/storage/app/media/products/papas-waffle.jpg' },
    { id: 38, name: 'Papas Gajo', price: 60, category: 'paquetes', subCategory: 'papas', desc: 'Gajos de papa sazonados con piel.', hasChips: true, image: 'https://thecookinglab.es/wp-content/uploads/2024/09/Patatas-gajo-en-freidora-de-aire.jpg' },
    { id: 39, name: 'Mix de Papas', price: 115, category: 'paquetes', subCategory: 'papas', desc: 'Combinación especial de todos nuestros cortes.', hasChips: true, image: 'https://luisarturoacademy.com/wp-content/uploads/2022/04/Tipos-de-papas.png' },
    { id: 40, name: 'Aros de Cebolla (15 pz)', price: 55, category: 'paquetes', subCategory: 'papas', desc: '15 aros de cebolla empanizados extra crujientes.', hasChips: false, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL1B0r_sw54Mv63DkMvY5iNcTfbTmxTf8hqghN1U4UR7_2auoxlhUmeiU&s=10' },

    // --- ADEREZOS / SALSAS ---
    { id: 41, name: 'Aderezo Ranch Extra', price: 8, category: 'paquetes', subCategory: 'aderezos', desc: 'Aderezo cremoso clásico de la casa.', hasChips: false, isSauceProduct: true, image: 'img/R.jpg' },
    { id: 42, name: 'Aderezo Ranch Habanero Extra', price: 8, category: 'paquetes', subCategory: 'aderezos', desc: 'El toque cremoso clásico con un picor único.', hasChips: false, isSauceProduct: true, image: 'img/RH.jpg' },
    { id: 43, name: 'Salsa Mango Habanero Extra', price: 8, category: 'paquetes', subCategory: 'aderezos', desc: 'Combinación perfecta entre dulce y bastante picante.', hasChips: false, isSauceProduct: true, image: 'img/MH.jpg' },
    { id: 44, name: 'Salsa Buffalo Extra', price: 8, category: 'paquetes', subCategory: 'aderezos', desc: 'Salsa ácida y picante tradicional de alitas.', hasChips: false, isSauceProduct: true, image: 'img/B.jpg' },
    { id: 45, name: 'Salsa BBQ Extra', price: 8, category: 'paquetes', subCategory: 'aderezos', desc: 'Salsa ahumada, dulce y espesa.', hasChips: false, isSauceProduct: true, image: 'img/BBQ.jpg' },
    { id: 46, name: 'Salsa Tamarindo Habanero Extra', price: 8, category: 'paquetes', subCategory: 'aderezos', desc: 'Toque agridulce frutal con picante habanero.', hasChips: false, isSauceProduct: true, image: 'img/TH.jpg' },
    { id: 47, name: 'Salsa Ajo Parmesano Extra', price: 8, category: 'paquetes', subCategory: 'aderezos', desc: 'Mezcla cremosa e intensa de ajo y queso parmesano.', hasChips: false, isSauceProduct: true, image: 'img/AP.jpg' },
    { id: 48, name: 'Salsa Mostaza y Miel', price: 8, category: 'paquetes', subCategory: 'aderezos', desc: 'Mezcla cremosa e intensa de mostaza y miel.', hasChips: false, isSauceProduct: true, image: 'img/MM.jpg' },
];
const sauceOptions = ['Ranch', 'Ranch Habanero', 'Mango Habanero', 'Buffalo', 'BBQ', 'Tamarindo Habanero', 'Ajo Parmesano', 'Adobadas (Maggi, Inglesa, Tajin y Salsa)', 'Mostaza y Miel'];


// ==========================================
// ESTADOS GLOBALES
// ==========================================
let cart = [];
let currentCategory = 'todos';
let selectedProductForModal = null;
let editingCartItem = null; // NUEVA VARIABLE PARA CONTROLAR LA EDICIÓN

// ==========================================
// RENDERIZADO DE PRODUCTOS
// ==========================================
function renderProducts(items) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-card-body">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.desc}</p>
                </div>
                <div class="product-meta">
                    <span class="price">$${product.price}.00</span>
                    <button class="add-btn" onclick="openCustomModal(${product.id})" aria-label="Agregar">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderProductsWithCheck(items) {
    const grid = document.getElementById('products-grid');
    if (items.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-cookie-bite" style="font-size: 1.5rem; margin-bottom: 10px; display: block;"></i>
                No encontramos snacks que coincidan con tu búsqueda.
            </div>`;
        return;
    }
    renderProducts(items);
}

// ==========================================
// FILTRADO Y BÚSQUEDA (ACTUALIZADO)
// ==========================================

// Variable global para controlar si el filtro actual pertenece a una subcategoría
let isSubCategoryMode = false;

/**
 * Filtra el catálogo mediante los botones de navegación.
 * Soporta tanto categorías originales como subcategorías exactas.
 * * @param {string} categoryTarget - Nombre de la categoría o subcategoría (ej. 'snacks', 'boneless')
 * @param {boolean} isSub - Opcional. 'true' si el botón pertenece a una subcategoría de alimento.
 */
// Enlace de compatibilidad para evitar el error del HTML
function filterMenu(categoryTarget, isSub = false) {
    filterCategory(categoryTarget, isSub);
}

function filterCategory(categoryTarget, isSub = false) {
    currentCategory = categoryTarget;
    isSubCategoryMode = isSub;

    // 1. Limpiar el input de búsqueda de texto al cambiar de sección
    document.getElementById('search-input').value = '';

    // 2. Manejo visual de botones activos
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Asigna la clase activa al botón presionado de forma segura
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }

    // 3. Ejecutar el filtro combinado
    applyCombinedFilter();
}

/**
 * Maneja el evento de escritura en la barra de búsqueda (oninput="handleSearch()")
 */
function handleSearch() {
    const searchInput = document.getElementById('search-input').value.trim();

    // Si el usuario escribe algo, desactivamos visualmente los botones de categoría
    if (searchInput !== '') {
        const buttons = document.querySelectorAll('.category-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
    } else {
        // Si borra el texto por completo, re-activamos visualmente el botón de la sección actual
        // (Opcional: puedes dejar que vuelva a 'todos' o buscar el botón guardado en currentCategory)
    }

    // Ejecutar el filtro combinado
    applyCombinedFilter();
}

/**
 * Procesa el estado de los botones y el texto de búsqueda de forma simultánea,
 * garantizando que el contenedor nunca se rompa y muestre mensajes de error limpios.
 */
function applyCombinedFilter() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();

    // Filtrar la base de datos oficial
    const filtered = products.filter(product => {
        let matchesButton = true;

        // 1. Evaluar filtro por botón activo
        if (currentCategory !== 'todos') {
            if (isSubCategoryMode) {
                matchesButton = product.subCategory === currentCategory;
            } else {
                matchesButton = product.category === currentCategory;
            }
        }

        // 2. Evaluar filtro por texto ingresado
        const matchesText = product.name.toLowerCase().includes(query) ||
                            product.desc.toLowerCase().includes(query);

        // Si la barra de búsqueda tiene texto, este tiene prioridad absoluta sobre las pestañas
        if (query !== '') {
            return matchesText;
        }

        return matchesButton;
    });

    // 3. Renderizar los resultados usando tu validador de catálogo vacío integrado
    renderProductsWithCheck(filtered);
}

// ==========================================
// MODAL DE PERSONALIZACIÓN
// ==========================================
// ==========================================
// FUNCIÓN AUXILIAR PARA LOS SUBPANELES DINÁMICOS
// ==========================================
function toggleDynamicExtraSauce(targetId) {
    const checkbox = document.getElementById(`checkbox-extra-${targetId}`);
    const subpanel = document.getElementById(`subpanel-extra-${targetId}`);
    if (checkbox && subpanel) {
        subpanel.style.display = checkbox.checked ? 'block' : 'none';
    }
    updateModalPrice(); // Recalcula el precio total al marcar o desmarcar
}

// ==========================================
// MODAL DE PERSONALIZACIÓN COMPLETO
// ==========================================
function openCustomModal(productId) {

    // 1. Cerramos el carrito si estuviera abierto para evitar colisiones visuales
    const cartSidebar = document.getElementById('cart-sidebar');
    if (cartSidebar) {
        cartSidebar.classList.remove('open');
    }

    // 2. Activamos el overlay y el modal correspondiente del producto
    document.getElementById('checkout-modal').classList.remove('open');

    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.classList.add('open');
    }

    const product = products.find(p => p.id === productId);
    if (!product) return;

    const extraSauceIds = [41, 42, 43, 44, 45, 46, 47, 48];
    const isExtraSauce = extraSauceIds.includes(product.id);

    if (product.isSauceProduct && !isExtraSauce) {
        addToCartDirectly(product);
        return;
    }

    selectedProductForModal = product;

    const banderillaIds = [15, 16, 17, 18, 19, 20, 21, 22, 23];
    const salchiIds = [24, 25];
    const chipsProductIds = [35, 36, 37, 38];

    const isBanderilla = banderillaIds.includes(product.id);
    const isSalchi = salchiIds.includes(product.id);
    const isIndividualChips = chipsProductIds.includes(product.id);
    const isMixPapas = product.id === 39;
    const isArosCebolla = product.id === 40;

    // Paquetes Grandes (Alitas G, Dedos G, combos grandes individuales del 26 al 31)
    const isLargeSize = [9, 10, 13, 14, 26, 27, 28, 29, 30, 31].includes(product.id);
    // Paquetes Megas y Súper Megas (32, 33, 34)
    const isMegaSize = [32, 33, 34].includes(product.id);
    const allowsExtraFriesMega = [32, 33].includes(product.id);

    // REGLA ACTUALIZADA PARA EL ADEREZO EXTRA DE $8:
    // SÍ se permite en Alitas G, Dedos G, Paquetes Súper 1-6, Mega 1-2 y Súper Mega.
    const excludedFromExtra8Pesos = [35, 36, 37, 38, 39];
    const allowsExtraSauceOption = !excludedFromExtra8Pesos.includes(product.id) && !isBanderilla && !isSalchi && !isExtraSauce;

    let modalHTML = `
        <div class="custom-modal-header">
            <h3>Personalizar Alimento</h3>
            <button class="close-modal-btn" onclick="closeCustomModal()">&times;</button>
        </div>
        <div class="custom-modal-body">
            <div class="modal-product-summary">
                <h4>${product.name}</h4>
                <p>${product.desc}</p>
                ${isLargeSize ? '<p style="color: var(--accent-color); font-weight: 600; font-size: 0.85rem;"><i class="fa-solid fa-star"></i> ¡Este paquete incluye 2 aderezos!</p>' : ''}
                ${isMegaSize ? '<p style="color: var(--accent-color); font-weight: 600; font-size: 0.85rem;"><i class="fa-solid fa-crown"></i> ¡Este paquete incluye 3 aderezos independientes!</p>' : ''}
            </div>
    `;

    // CASO: TAMAÑO PARA ADEREZOS EXTRAS INDIVIDUALES (41 al 48)
    if (isExtraSauce) {
        modalHTML += `
            <div class="custom-section">
                <label class="section-title"><i class="fa-solid fa-bottle-droplet"></i> Selecciona el Tamaño del Aderezo:</label>
                <div class="radio-tile-group" id="sauce-size-control" onchange="updateModalPrice()" style="margin-top: 8px;">
                    <label class="radio-tile"><input type="radio" name="sauce-size" value="2oz" checked><span>2 oz ($8.00)</span></label>
                    <label class="radio-tile"><input type="radio" name="sauce-size" value="4oz"><span>4 oz ($16.00)</span></label>
                </div>
            </div>
        `;
    }

    // CONFIGURACIÓN EXCLUSIVA PARA EL MIX DE PAPAS
    if (isMixPapas) {
        modalHTML += `
            <div class="custom-section">
                <label class="section-title"><i class="fa-solid fa-layer-group"></i> Selecciona el Tamaño del Mix:</label>
                <select id="mix-size-select" class="minimal-select" onchange="handleMixSizeChange()">
                    <option value="2">Mix de 2 Papas — $115.00</option>
                    <option value="3">Mix de 3 Papas — $165.00</option>
                    <option value="4">Mix de 4 Papas — $215.00</option>
                </select>
            </div>
            <div class="custom-section border-top">
                <label class="section-title"><i class="fa-solid fa-potato"></i> Elige los tipos de papa (<span id="mix-max-count">2</span> opciones):</label>
                <div class="checkbox-tile-group" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 8px;">
                    <label class="radio-tile checkbox-tile" style="padding: 10px; margin: 0;"><input type="checkbox" name="mix-chips" value="Francesa" onchange="handleMixCheckboxes()"><span>Francesa</span></label>
                    <label class="radio-tile checkbox-tile" style="padding: 10px; margin: 0;"><input type="checkbox" name="mix-chips" value="Curly" onchange="handleMixCheckboxes()"><span>Curly</span></label>
                    <label class="radio-tile checkbox-tile" style="padding: 10px; margin: 0;"><input type="checkbox" name="mix-chips" value="Waffle" onchange="handleMixCheckboxes()"><span>Waffle</span></label>
                    <label class="radio-tile checkbox-tile" style="padding: 10px; margin: 0;"><input type="checkbox" name="mix-chips" value="Gajo" onchange="handleMixCheckboxes()"><span>Gajo</span></label>
                </div>
            </div>
        `;
    }

    // SI ES SALCHIPAPAS O SALCHIPULPOS
    if (isSalchi) {
        modalHTML += `
            <div class="custom-section">
                <label class="section-title"><i class="fa-solid fa-fire"></i> Condimentos del Platillo:</label>
                <div class="radio-tile-group" id="salchi-main-control" onchange="handleSalchiModeChange()" style="margin-bottom: 16px;">
                    <label class="radio-tile"><input type="radio" name="salchi-mode" value="Con Todo" checked><span>Con todo</span></label>
                    <label class="radio-tile"><input type="radio" name="salchi-mode" value="Todo Aparte"><span>Todo aparte</span></label>
                    <label class="radio-tile"><input type="radio" name="salchi-mode" value="Solos"><span>Solos</span></label>
                    <label class="radio-tile"><input type="radio" name="salchi-mode" value="Personalizar"><span>Personalizar</span></label>
                </div>
                <div id="detailed-salchi-addons" style="display: none; background-color: var(--bg-color); padding: 12px; border-radius: var(--radius-sm); margin-bottom: 16px;">
                    <div class="addon-row"><span>Mayonesa</span><div class="radio-tile-group small-group"><label class="radio-tile"><input type="radio" name="s-mayo" value="Untado" checked><span>Untado</span></label><label class="radio-tile"><input type="radio" name="s-mayo" value="Aparte"><span>Aparte</span></label><label class="radio-tile"><input type="radio" name="s-mayo" value="Solo"><span>Solo</span></label></div></div>
                    <div class="addon-row"><span>Queso</span><div class="radio-tile-group small-group"><label class="radio-tile"><input type="radio" name="s-queso" value="Untado" checked><span>Untado</span></label><label class="radio-tile"><input type="radio" name="s-queso" value="Aparte"><span>Aparte</span></label><label class="radio-tile"><input type="radio" name="s-queso" value="Solo"><span>Solo</span></label></div></div>
                    <div class="addon-row"><span>Catsup</span><div class="radio-tile-group small-group"><label class="radio-tile"><input type="radio" name="s-catsup" value="Untado" checked><span>Untado</span></label><label class="radio-tile"><input type="radio" name="s-catsup" value="Aparte"><span>Aparte</span></label><label class="radio-tile"><input type="radio" name="s-catsup" value="Solo"><span>Solo</span></label></div></div>
                    <div class="addon-row"><span>Salsa</span><div class="radio-tile-group small-group"><label class="radio-tile"><input type="radio" name="s-salsa" value="Untado" checked><span>Untado</span></label><label class="radio-tile"><input type="radio" name="s-salsa" value="Aparte"><span>Aparte</span></label><label class="radio-tile"><input type="radio" name="s-salsa" value="Solo"><span>Solo</span></label></div></div>
                </div>
            </div>
        `;
    }
    // SECCIÓN DE ADEREZOS INCLUIDOS POR DEFECTO
    else if (!isBanderilla && !isIndividualChips && !isMixPapas && !isArosCebolla && !isExtraSauce) {
        let labelSauce1 = 'Elige el Aderezo / Salsa:';
        let labelSauce2 = 'Elige el Aderezo 2:';
        let labelSauce3 = 'Elige el Aderezo 3:';

        // Mapeo de alimentos internos para las preguntas dinámicas de aderezo extra
        let subItemNames = ["Alimento"];

        if (product.id === 9 || product.id === 10) { labelSauce1 = 'Aderezo 1 para las Alitas:'; labelSauce2 = 'Aderezo 2 para las Alitas:'; subItemNames = ["Alitas"]; }
        else if (product.id === 13 || product.id === 14) { labelSauce1 = 'Aderezo 1 para los Dedos:'; labelSauce2 = 'Aderezo 2 para los Dedos:'; subItemNames = ["Dedos de Queso"]; }
        else if (product.id === 26) { labelSauce1 = 'Aderezo para los Boneless:'; labelSauce2 = 'Aderezo para las Alitas:'; subItemNames = ["Boneless", "Alitas"]; }
        else if (product.id === 27) { labelSauce1 = 'Aderezo para los Tenders:'; labelSauce2 = 'Aderezo para los Boneless:'; subItemNames = ["Tenders", "Boneless"]; }
        else if (product.id === 28) { labelSauce1 = 'Aderezo para los Dedos:'; labelSauce2 = 'Aderezo para las Palomitas:'; subItemNames = ["Dedos de Queso", "Palomitas de Pollo"]; }
        else if (product.id === 29) { labelSauce1 = 'Aderezo para los Dedos:'; labelSauce2 = 'Aderezo para los Boneless:'; subItemNames = ["Dedos", "Boneless"]; }
        else if (product.id === 30) { labelSauce1 = 'Aderezo para las Alitas:'; labelSauce2 = 'Aderezo para las Palomitas:'; subItemNames = ["Alitas", "Palomitas de Pollo"]; }
        else if (product.id === 31) { labelSauce1 = 'Aderezo para las Palomitas:'; labelSauce2 = 'Aderezo para los Tenders:'; subItemNames = ["Palomitas de Pollo", "Tenders"]; }
        else if (product.id === 32) { labelSauce1 = 'Aderezo para los Boneless:'; labelSauce2 = 'Aderezo para las Alitas:'; labelSauce3 = 'Aderezo para los Dedos de Queso:'; subItemNames = ["Boneless", "Alitas", "Dedos de Queso"]; }
        else if (product.id === 33) { labelSauce1 = 'Aderezo para los Tenders:'; labelSauce2 = 'Aderezo para las Palomitas:'; labelSauce3 = 'Aderezo para los Boneless:'; subItemNames = ["Tenders", "Palomitas de Pollo", "Boneless"]; }
        else if (product.id === 34) { labelSauce1 = 'Aderezo para los Tenders:'; labelSauce2 = 'Aderezo para los Dedos:'; labelSauce3 = 'Aderezo para los Boneless:'; subItemNames = ["Tenders", "Dedos de Queso", "Boneless"]; }
        else if (isLargeSize) { labelSauce1 = 'Elige el Aderezo 1:'; labelSauce2 = 'Elige el Aderezo 2:'; }

        modalHTML += `
            <div class="custom-section">
                <label class="section-title"><i class="fa-solid fa-drumstick-bite"></i> ${labelSauce1}</label>
                <select id="modal-sauce-select" class="minimal-select">${sauceOptions.map(sauce => `<option value="${sauce}">${sauce}</option>`).join('')}</select>
                <div class="radio-tile-group" id="sauce-prep-container">
                    <label class="radio-tile"><input type="radio" name="sauce-prep" value="Untado" checked><span>Untado</span></label>
                    <label class="radio-tile"><input type="radio" name="sauce-prep" value="Aparte"><span>Aparte</span></label>
                    <label class="radio-tile"><input type="radio" name="sauce-prep" value="Solo"><span>Solos</span></label>
                </div>
            </div>
        `;

        if (isLargeSize || isMegaSize) {
            modalHTML += `
                <div class="custom-section border-top">
                    <label class="section-title"><i class="fa-solid fa-bowl-food"></i> ${labelSauce2}</label>
                    <select id="modal-sauce-select-2" class="minimal-select">${sauceOptions.map(sauce => `<option value="${sauce}">${sauce}</option>`).join('')}</select>
                    <div class="radio-tile-group" id="sauce-prep-container-2">
                        <label class="radio-tile"><input type="radio" name="sauce-prep-2" value="Untado" checked><span>Untado</span></label>
                        <label class="radio-tile"><input type="radio" name="sauce-prep-2" value="Aparte"><span>Aparte</span></label>
                        <label class="radio-tile"><input type="radio" name="sauce-prep-2" value="Solo"><span>Solos</span></label>
                    </div>
                </div>
            `;
        }

        if (isMegaSize) {
            modalHTML += `
                <div class="custom-section border-top">
                    <label class="section-title"><i class="fa-solid fa-cheese"></i> ${labelSauce3}</label>
                    <select id="modal-sauce-select-3" class="minimal-select">${sauceOptions.map(sauce => `<option value="${sauce}">${sauce}</option>`).join('')}</select>
                    <div class="radio-tile-group" id="sauce-prep-container-3">
                        <label class="radio-tile"><input type="radio" name="sauce-prep-3" value="Untado" checked><span>Untado</span></label>
                        <label class="radio-tile"><input type="radio" name="sauce-prep-3" value="Aparte"><span>Aparte</span></label>
                        <label class="radio-tile"><input type="radio" name="sauce-prep-3" value="Solo"><span>Solos</span></label>
                    </div>
                </div>
            `;
        }

        // --- PREGUNTAS COMPLEMENTARIAS INDEPENDIENTES DE ADEREZO EXTRA ($8) ---
        if (allowsExtraSauceOption) {
            modalHTML += `
                <div class="custom-section border-top">
            `;

            subItemNames.forEach((name, index) => {
                const targetId = `subitem-${index}`;
                modalHTML += `
                    <div style="margin-top: 12px;">
                        <label class="checkbox-tile" style="margin:0; padding: 10px; display: flex; align-items: center; gap: 10px; cursor: pointer;">
                            <input type="checkbox" class="modal-extra-sauce-checkbox" id="checkbox-extra-${targetId}" onchange="toggleDynamicExtraSauce('${targetId}')">
                            <span style="font-weight: 500;">Aderezo extra para tus <strong>${name}</strong> (+$8.00)</span>
                        </label>

                        <div id="subpanel-extra-${targetId}" style="display: none; background-color: var(--bg-color); padding: 12px; border-radius: var(--radius-sm); margin-top: 8px; border-left: 3px solid var(--accent-color)">
                            <label class="section-title" style="font-size:0.85rem; margin-bottom: 6px; display: block;">Selecciona el Aderezo Extra:</label>
                            <select id="select-extra-${targetId}" class="minimal-select" style="margin-bottom:8px;">
                                ${sauceOptions.map(sauce => `<option value="${sauce}">${sauce}</option>`).join('')}
                            </select>
                            <div class="radio-tile-group small-group">
                                <label class="radio-tile"><input type="radio" name="prep-extra-${targetId}" value="Untado" checked><span>Untado</span></label>
                                <label class="radio-tile"><input type="radio" name="prep-extra-${targetId}" value="Aparte"><span>Aparte</span></label>
                            </div>
                        </div>
                    </div>
                `;
            });

            modalHTML += `</div>`;
        }
    } else if (isBanderilla) {
        modalHTML += `
            <div class="custom-section">
                <label class="section-title"><i class="fa-solid fa-hotdog"></i> Condimentos de la Banderilla:</label>
                <div class="radio-tile-group" id="banderilla-main-control" onchange="handleBanderillaModeChange()" style="margin-bottom: 16px;">
                    <label class="radio-tile"><input type="radio" name="banderilla-mode" value="Con Todo" checked><span>Con todo</span></label>
                    <label class="radio-tile"><input type="radio" name="banderilla-mode" value="Todo Aparte"><span>Todo aparte</span></label>
                    <label class="radio-tile"><input type="radio" name="banderilla-mode" value="Solas"><span>Solas</span></label>
                    <label class="radio-tile"><input type="radio" name="banderilla-mode" value="Personalizar"><span>Personalizar</span></label>
                </div>
                <div id="detailed-banderilla-addons" style="display: none; background-color: var(--bg-color); padding: 12px; border-radius: var(--radius-sm); margin-bottom: 16px;">
                    <div class="addon-row"><span>Mayonesa</span><div class="radio-tile-group small-group"><label class="radio-tile"><input type="radio" name="b-mayo" value="Untado" checked><span>Untado</span></label><label class="radio-tile"><input type="radio" name="b-mayo" value="Aparte"><span>Aparte</span></label><label class="radio-tile"><input type="radio" name="b-mayo" value="Solo"><span>Solo</span></label></div></div>
                    <div class="addon-row"><span>Queso</span><div class="radio-tile-group small-group"><label class="radio-tile"><input type="radio" name="b-queso" value="Untado" checked><span>Untado</span></label><label class="radio-tile"><input type="radio" name="b-queso" value="Aparte"><span>Aparte</span></label><label class="radio-tile"><input type="radio" name="b-queso" value="Solo"><span>Solo</span></label></div></div>
                    <div class="addon-row"><span>Catsup</span><div class="radio-tile-group small-group"><label class="radio-tile"><input type="radio" name="b-catsup" value="Untado" checked><span>Untado</span></label><label class="radio-tile"><input type="radio" name="b-catsup" value="Aparte"><span>Aparte</span></label><label class="radio-tile"><input type="radio" name="b-catsup" value="Solo"><span>Solo</span></label></div></div>
                    <div class="addon-row"><span>Salsa</span><div class="radio-tile-group small-group"><label class="radio-tile"><input type="radio" name="b-salsa" value="Untado" checked><span>Untado</span></label><label class="radio-tile"><input type="radio" name="b-salsa" value="Aparte"><span>Aparte</span></label><label class="radio-tile"><input type="radio" name="b-salsa" value="Solo"><span>Solo</span></label></div></div>
                </div>
            </div>
        `;
    }

    // --- SECCIÓN DE COMPLEMENTOS FRITOS ---
    if ((product.hasChips && !isSalchi) || isIndividualChips || isMixPapas || isArosCebolla) {
        const sectionTitleText = isArosCebolla ? 'Condimentos de los Aros:' : 'Condimentos de las Papas:';

        modalHTML += `
            <div class="custom-section chips-addons border-top">
        `;

        if (!isIndividualChips && !isMixPapas && !isArosCebolla) {
            const extraTenIds = [10, 14, 26, 27, 28, 29, 30, 31, 34];
            const isExtraTen = extraTenIds.includes(product.id);
            const costText = isExtraTen ? '+$10' : '+$5';

            modalHTML += `
                <label class="section-title"><i class="fa-solid fa-potato"></i> Tipo de Papa:</label>
                <select id="modal-chip-type-select" class="minimal-select" onchange="updateModalPrice()">
                    <option value="Francesa">Papa Francesa (Por defecto - +$0)</option>
                    <option value="Curly">Papa Curly (${costText})</option>
                    <option value="Waffle">Papa Waffle (${costText})</option>
                    <option value="Gajo">Papa Gajo (${costText})</option>
                </select>
            `;
        }

        modalHTML += `
                <label class="section-title"><i class="fa-solid fa-cheese"></i> ${sectionTitleText}</label>
                <div class="radio-tile-group" id="chips-main-control" onchange="handleChipsModeChange()" style="margin-bottom: 16px;">
                    <label class="radio-tile"><input type="radio" name="chips-mode" value="Con Todo" checked><span>Con todo</span></label>
                    <label class="radio-tile"><input type="radio" name="chips-mode" value="Todo Aparte"><span>Todo aparte</span></label>
                    <label class="radio-tile"><input type="radio" name="chips-mode" value="Solas"><span>Solos</span></label>
                    <label class="radio-tile"><input type="radio" name="chips-mode" value="Personalizar"><span>Personalizar</span></label>
                </div>

                <div id="detailed-chips-addons" style="display: none; background-color: var(--bg-color); padding: 12px; border-radius: var(--radius-sm);">
                    <div class="addon-row">
                        <span>Salsa Catsup</span>
                        <div class="radio-tile-group small-group">
                            <label class="radio-tile"><input type="radio" name="prep-catsup" value="Untado" checked><span>Untado</span></label>
                            <label class="radio-tile"><input type="radio" name="prep-catsup" value="Aparte"><span>Aparte</span></label>
                            <label class="radio-tile"><input type="radio" name="prep-catsup" value="Solo"><span>Solo / No</span></label>
                        </div>
                    </div>
                    <div class="addon-row">
                        <span>Queso Líquido</span>
                        <div class="radio-tile-group small-group">
                            <label class="radio-tile"><input type="radio" name="prep-queso" value="Untado" checked><span>Untado</span></label>
                            <label class="radio-tile"><input type="radio" name="prep-queso" value="Aparte"><span>Aparte</span></label>
                            <label class="radio-tile"><input type="radio" name="prep-queso" value="Solo"><span>Solo / No</span></label>
                        </div>
                    </div>
                    <div class="addon-row">
                        <span>Salsa Casera</span>
                        <div class="radio-tile-group small-group">
                            <label class="radio-tile"><input type="radio" name="prep-salsa" value="Untado" checked><span>Untado</span></label>
                            <label class="radio-tile"><input type="radio" name="prep-salsa" value="Aparte"><span>Aparte</span></label>
                            <label class="radio-tile"><input type="radio" name="prep-salsa" value="Solo"><span>Solo / No</span></label>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    if (allowsExtraFriesMega) {
    modalHTML += `
        <div class="custom-section border-top">
            <label class="checkbox-tile"
                   style="margin:0;padding:12px;display:flex;align-items:center;gap:10px;">
                <input
                    type="checkbox"
                    id="mega-extra-fries"
                    onchange="toggleMegaFriesPanel()">
                <span>
                    Agregar Papas (+$20.00)
                </span>
            </label>

            <div id="mega-fries-panel"
                 style="display:none;margin-top:12px;">

                <label class="section-title">
                    <i class="fa-solid fa-potato"></i>
                    Tipo de Papa:
                </label>

                <select
                    id="mega-fries-type"
                    class="minimal-select">
                    <option value="Francesa">Papa Francesa</option>
                    <option value="Waffle">Papa Waffle</option>
                    <option value="Curly">Papa Curly</option>
                    <option value="Gajo">Papa Gajo</option>
                </select>

                <label class="section-title"
                       style="margin-top:15px;">
                    <i class="fa-solid fa-cheese"></i>
                    Condimentos:
                </label>

                <div class="radio-tile-group"
                     onchange="handleMegaFriesModeChange()">

                    <label class="radio-tile">
                        <input type="radio"
                               name="mega-fries-mode"
                               value="Con Todo"
                               checked>
                        <span>Con todo</span>
                    </label>

                    <label class="radio-tile">
                        <input type="radio"
                               name="mega-fries-mode"
                               value="Todo Aparte">
                        <span>Todo aparte</span>
                    </label>

                    <label class="radio-tile">
                        <input type="radio"
                               name="mega-fries-mode"
                               value="Solas">
                        <span>Solos</span>
                    </label>

                    <label class="radio-tile">
                        <input type="radio"
                               name="mega-fries-mode"
                               value="Personalizar">
                        <span>Personalizar</span>
                    </label>

                </div>

                <div id="mega-fries-custom"
                     style="display:none;
                            background:var(--bg-color);
                            padding:12px;
                            border-radius:var(--radius-sm);
                            margin-top:10px;">

                    <div class="addon-row">
                        <span>Catsup</span>

                        <div class="radio-tile-group small-group">

                            <label class="radio-tile">
                                <input type="radio"
                                       name="mega-catsup"
                                       value="Untado"
                                       checked>
                                <span>Untado</span>
                            </label>

                            <label class="radio-tile">
                                <input type="radio"
                                       name="mega-catsup"
                                       value="Aparte">
                                <span>Aparte</span>
                            </label>

                            <label class="radio-tile">
                                <input type="radio"
                                       name="mega-catsup"
                                       value="Solo">
                                <span>Solo</span>
                            </label>

                        </div>
                    </div>

                    <div class="addon-row">
                        <span>Queso</span>

                        <div class="radio-tile-group small-group">

                            <label class="radio-tile">
                                <input type="radio"
                                       name="mega-queso"
                                       value="Untado"
                                       checked>
                                <span>Untado</span>
                            </label>

                            <label class="radio-tile">
                                <input type="radio"
                                       name="mega-queso"
                                       value="Aparte">
                                <span>Aparte</span>
                            </label>

                            <label class="radio-tile">
                                <input type="radio"
                                       name="mega-queso"
                                       value="Solo">
                                <span>Solo</span>
                            </label>

                        </div>
                    </div>

                    <div class="addon-row">
                        <span>Salsa Casera</span>

                        <div class="radio-tile-group small-group">

                            <label class="radio-tile">
                                <input type="radio"
                                       name="mega-salsa"
                                       value="Untado"
                                       checked>
                                <span>Untado</span>
                            </label>

                            <label class="radio-tile">
                                <input type="radio"
                                       name="mega-salsa"
                                       value="Aparte">
                                <span>Aparte</span>
                            </label>

                            <label class="radio-tile">
                                <input type="radio"
                                       name="mega-salsa"
                                       value="Solo">
                                <span>Solo</span>
                            </label>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    `;
}
    modalHTML += `
        </div>
        <div class="custom-modal-footer">
            <button id="modal-submit-btn" class="action-btn-primary" onclick="confirmCustomization()">Agregar al Carrito • $${product.price}.00</button>
        </div>
    `;

    const modalWindow = document.getElementById('custom-product-modal');
    if (modalWindow) {
        modalWindow.innerHTML = modalHTML;
        modalWindow.classList.add('open');
    }

    document.getElementById('overlay').classList.add('open');
    updateModalPrice();
}

function toggleExtraSauceSubpanel() {
    const checkbox = document.getElementById('modal-extra-sauce-checkbox');
    const subpanel = document.getElementById('extra-sauce-subpanel');
    if (!checkbox || !subpanel) return;

    if (checkbox.checked) {
        subpanel.style.display = 'block';
    } else {
        subpanel.style.display = 'none';
    }
    updateModalPrice();
}

function toggleOptionalSauceSelector() {
    const checkBox = document.getElementById('modal-extra-sauce-checkbox');
    const container = document.getElementById('optional-extra-sauce-container');

    if (checkBox && container) {
        container.style.display = checkBox.checked ? 'block' : 'none';
    }

    // Forzamos la actualización instantánea del subtotal reflejado en el botón
    updateModalPrice();
}

// Controla el cambio de tamaño del mix y refresca las reglas y precios
function handleMixSizeChange() {
    const sizeSelect = document.getElementById('mix-size-select');
    if (!sizeSelect) return;

    const maxCount = parseInt(sizeSelect.value, 10);
    document.getElementById('mix-max-count').innerText = maxCount;

    // Resetea los checkboxes cada que cambien de paquete para evitar incongruencias
    const checkboxes = document.querySelectorAll('input[name="mix-chips"]');
    checkboxes.forEach(cb => {
        cb.checked = false;
        cb.disabled = false;
    });

    updateModalPrice();
}

// Bloquea los checkboxes vacíos si se alcanza el límite seleccionado
function handleMixCheckboxes() {
    const sizeSelect = document.getElementById('mix-size-select');
    if (!sizeSelect) return;

    const maxAllowed = parseInt(sizeSelect.value, 10);
    const checkedBoxes = document.querySelectorAll('input[name="mix-chips"]:checked');
    const allBoxes = document.querySelectorAll('input[name="mix-chips"]');

    if (checkedBoxes.length >= maxAllowed) {
        // Bloquea únicamente los que NO están seleccionados
        allBoxes.forEach(cb => {
            if (!cb.checked) cb.disabled = true;
        });
    } else {
        // Habilita todos si está por debajo del límite
        allBoxes.forEach(cb => cb.disabled = false);
    }
}

function handleSalchiModeChange() {
    const salchiMode = document.querySelector('input[name="salchi-mode"]:checked').value;
    const detailedContainer = document.getElementById('detailed-salchi-addons');
    detailedContainer.style.display = (salchiMode === 'Personalizar') ? 'block' : 'none';
}

function handleBanderillaModeChange() {
    const banderillaMode = document.querySelector('input[name="banderilla-mode"]:checked').value;
    const detailedContainer = document.getElementById('detailed-banderilla-addons');
    detailedContainer.style.display = (banderillaMode === 'Personalizar') ? 'block' : 'none';
}

// ==========================================
// FUNCIÓN DE ACTUALIZACIÓN DE PRECIOS
// ==========================================
function updateModalPrice() {
    if (!selectedProductForModal) return;

    let currentPrice = selectedProductForModal.price;
    const extraSauceIds = [41, 42, 43, 44, 45, 46, 47, 48];

    if (extraSauceIds.includes(selectedProductForModal.id)) {
        const selectedSizeRadio = document.querySelector('input[name="sauce-size"]:checked');
        if (selectedSizeRadio) {
            const size = selectedSizeRadio.value;
            currentPrice = (size === '4oz') ? 16 : 8;
        }
    }
    else if (selectedProductForModal.id === 39) {
        const sizeSelect = document.getElementById('mix-size-select');
        if (sizeSelect) {
            const size = sizeSelect.value;
            if (size === "2") currentPrice = 115;
            else if (size === "3") currentPrice = 165;
            else if (size === "4") currentPrice = 215;
        }
    }
    else {
        const chipSelect = document.getElementById('modal-chip-type-select');
        if (chipSelect) {
            const chipType = chipSelect.value;
            if (chipType !== 'Francesa') {
                currentPrice += [10, 14, 26, 27, 28, 29, 30, 31, 34].includes(selectedProductForModal.id) ? 10 : 5;
            }
        }
    }

    const megaFriesCheck =
    document.getElementById('mega-extra-fries');

if (
    megaFriesCheck &&
    megaFriesCheck.checked
) {
    currentPrice += 20;
}

    // --- NUEVO CONTROL MULTI-CHECKBOX DE ADEREZOS EXTRAS ---
    // Selecciona todos los checkboxes dinámicos de aderezo extra y suma $8 por cada uno marcado
    const extraSauceCheckboxes = document.querySelectorAll('.modal-extra-sauce-checkbox');
    extraSauceCheckboxes.forEach(checkbox => {
        if (checkbox && checkbox.checked) {
            currentPrice += 8;
        }
    });

    const submitBtn = document.getElementById('modal-submit-btn');
    if (submitBtn) {
        if (editingCartItem) {
            submitBtn.innerHTML = `<i class="fa-solid fa-pen"></i> Actualizar Pedido • $${currentPrice}.00`;
        } else {
            submitBtn.innerHTML = `Agregar al Carrito • $${currentPrice}.00`;
        }
    }
}

function handleSaucePrepChange2() {
    const saucePrep2 = document.querySelector('input[name="sauce-prep-2"]:checked').value;
    const sauceSelect2 = document.getElementById('modal-sauce-select-2');

    if (saucePrep2 === 'Solo') {
        sauceSelect2.disabled = true;
        sauceSelect2.style.opacity = '0.5';
    } else {
        sauceSelect2.disabled = false;
        sauceSelect2.style.opacity = '1';
    }
}

function handleChipsModeChange() {
    const chipsMode = document.querySelector('input[name="chips-mode"]:checked').value;
    const detailedContainer = document.getElementById('detailed-chips-addons');
    detailedContainer.style.display = (chipsMode === 'Personalizar') ? 'block' : 'none';
}

function toggleMegaFriesPanel() {
    const check = document.getElementById('mega-extra-fries');
    const panel = document.getElementById('mega-fries-panel');

    if (panel) {
        panel.style.display = check.checked ? 'block' : 'none';
    }

    updateModalPrice();
}

function handleMegaFriesModeChange() {
    const mode = document.querySelector(
        'input[name="mega-fries-mode"]:checked'
    )?.value;

    const custom = document.getElementById('mega-fries-custom');

    if (custom) {
        custom.style.display =
            mode === 'Personalizar'
                ? 'block'
                : 'none';
    }
}

function handleSaucePrepChange() {
    const saucePrep = document.querySelector('input[name="sauce-prep"]:checked').value;
    const sauceSelect = document.getElementById('modal-sauce-select');

    if (saucePrep === 'Solo') {
        sauceSelect.disabled = true;
        sauceSelect.style.opacity = '0.5'; // Efecto visual de apagado
    } else {
        sauceSelect.disabled = false;
        sauceSelect.style.opacity = '1';
    }
}

function closeCustomModal() {
    const modalWindow = document.getElementById('custom-product-modal');
    modalWindow.classList.remove('open');
    document.getElementById('overlay').classList.remove('open');

    // Limpiamos el estado por si el usuario canceló la edición
    editingCartItem = null;
}

function showMinimalAlert(message) {
    // Eliminar si ya existe una alerta previa en pantalla
    const existingToast = document.querySelector('.custom-toast');
    if (existingToast) existingToast.remove();

    // Crear el contenedor del Toast
    const toast = document.createElement('div');
    toast.className = 'custom-toast';

    // Insertar icono minimalista de advertencia junto al mensaje
    toast.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> <span>${message}</span>`;

    document.body.appendChild(toast);

    // Animación de entrada
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // Animación de salida y remoción después de 3.5 segundos
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3500);
}

function confirmCustomization() {
    if (!selectedProductForModal) return;

    let specs = [];
    let finalPrice = selectedProductForModal.price;

    const banderillaIds = [15, 16, 17, 18, 19, 20, 21, 22, 23];
    const salchiIds = [24, 25];
    const chipsProductIds = [35, 36, 37, 38];
    const extraSauceIds = [41, 42, 43, 44, 45, 46, 47, 48];

    const isMixPapas = selectedProductForModal.id === 39;
    const isArosCebolla = selectedProductForModal.id === 40;
    const isExtraSauce = extraSauceIds.includes(selectedProductForModal.id);

    const isBanderilla = banderillaIds.includes(selectedProductForModal.id);
    const isSalchi = salchiIds.includes(selectedProductForModal.id);
    const isIndividualChips = chipsProductIds.includes(selectedProductForModal.id);

    const isLargeSize = [9, 10, 13, 14, 26, 27, 28, 29, 30, 31].includes(selectedProductForModal.id);
    const isMegaSize = [32, 33, 34].includes(selectedProductForModal.id);

    // 1. CASO: SI EL PRODUCTO ES UN BOTE DE ADEREZO EXTRA (IDs 41 al 48)
    if (isExtraSauce) {
        const selectedSize = document.querySelector('input[name="sauce-size"]:checked').value;
        finalPrice = (selectedSize === '4oz') ? 16 : 8;
        specs.push(`Tamaño: ${selectedSize}`);
    }

    // 2. CONFIGURACIÓN DEL MIX DE PAPAS
    if (isMixPapas) {
        const sizeSelect = document.getElementById('mix-size-select');
        const requiredCount = parseInt(sizeSelect.value, 10);
        const selectedChips = Array.from(document.querySelectorAll('input[name="mix-chips"]:checked')).map(cb => cb.value);

        if (selectedChips.length < requiredCount) {
            showMinimalAlert(`Por favor, selecciona las ${requiredCount} papas para tu Mix.`);
            return;
        }

        if (requiredCount === 2) finalPrice = 115;
        else if (requiredCount === 3) finalPrice = 165;
        else if (requiredCount === 4) finalPrice = 215;

        specs.push(`Mix ${requiredCount} Papas: ${selectedChips.join(', ')}`);
    }

    // 3. CONFIGURACIÓN DE SALCHIPAPAS / SALCHIPULPOS
    if (isSalchi) {
        const sMode = document.querySelector('input[name="salchi-mode"]:checked').value;
        if (sMode === 'Con Todo') specs.push('Con todo');
        else if (sMode === 'Todo Aparte') specs.push('Todo aparte');
        else if (sMode === 'Solos') specs.push('Solos');
        else if (sMode === 'Personalizar') {
            const mayo = document.querySelector('input[name="s-mayo"]:checked').value;
            const queso = document.querySelector('input[name="s-queso"]:checked').value;
            const catsup = document.querySelector('input[name="s-catsup"]:checked').value;
            const salsa = document.querySelector('input[name="s-salsa"]:checked').value;

            if (mayo === 'Untado' && queso === 'Untado' && catsup === 'Untado' && salsa === 'Untado') specs.push('Con todo');
            else if (mayo === 'Aparte' && queso === 'Aparte' && catsup === 'Aparte' && salsa === 'Aparte') specs.push('Todo aparte');
            else if (mayo === 'Solo' && queso === 'Solo' && catsup === 'Solo' && salsa === 'Solo') specs.push('Solos');
            else {
                let sActivos = [];
                if (mayo !== 'Solo') sActivos.push(`Mayonesa: ${mayo}`);
                if (queso !== 'Solo') sActivos.push(`Queso: ${queso}`);
                if (catsup !== 'Solo') sActivos.push(`Catsup: ${catsup}`);
                if (salsa !== 'Solo') sActivos.push(`Salsa: ${salsa}`);
                specs.push(`${sActivos.join(', ')}`);
            }
        }
    }
    // 4. CONFIGURACIÓN DE BANDERILLAS
    else if (isBanderilla) {
        const bMode = document.querySelector('input[name="banderilla-mode"]:checked').value;
        if (bMode === 'Con Todo') specs.push('Con Todo');
        else if (bMode === 'Todo Aparte') specs.push('Todo Aparte');
        else if (bMode === 'Solas') specs.push('Solas');
        else if (bMode === 'Personalizar') {
            const mayo = document.querySelector('input[name="b-mayo"]:checked').value;
            const queso = document.querySelector('input[name="b-queso"]:checked').value;
            const catsup = document.querySelector('input[name="b-catsup"]:checked').value;
            const salsa = document.querySelector('input[name="b-salsa"]:checked').value;

            if (mayo === 'Untado' && queso === 'Untado' && catsup === 'Untado' && salsa === 'Untado') specs.push('Con Todo');
            else if (mayo === 'Aparte' && queso === 'Aparte' && catsup === 'Aparte' && salsa === 'Aparte') specs.push('Todo Aparte');
            else if (mayo === 'Solo' && queso === 'Solo' && catsup === 'Solo' && salsa === 'Solo') specs.push('Solas');
            else {
                let bActivos = [];
                if (mayo !== 'Solo') bActivos.push(`Mayonesa: ${mayo}`);
                if (queso !== 'Solo') bActivos.push(`Queso: ${queso}`);
                if (catsup !== 'Solo') bActivos.push(`Catsup: ${catsup}`);
                if (salsa !== 'Solo') bActivos.push(`Salsa: ${salsa}`);
                specs.push(`${bActivos.join(', ')}`);
            }
        }
    }
    // 5. CAPTURA AGRUPADA DE LOS ADEREZOS INCLUIDOS Y EXTRAS
    else if (!isIndividualChips && !isMixPapas && !isArosCebolla && !isExtraSauce) {
        const sauceSelected1 = document.getElementById('modal-sauce-select').value;
        const saucePrep1 = document.querySelector('input[name="sauce-prep"]:checked').value;

        // Títulos simplificados para el ticket
        let label1 = isLargeSize ? 'Aderezo 1' : 'Aderezo';
        let label2 = 'Aderezo 2';
        let label3 = 'Aderezo 3';

        let subItemNames = ["Alimento"];

        if (selectedProductForModal.id === 9 || selectedProductForModal.id === 10) { label1 = 'Alitas (1)'; label2 = 'Alitas (2)'; subItemNames = ["Alitas"]; }
        else if (selectedProductForModal.id === 13 || selectedProductForModal.id === 14) { label1 = 'Dedos (1)'; label2 = 'Dedos (2)'; subItemNames = ["Dedos de Queso"]; }
        else if (selectedProductForModal.id === 26) { label1 = 'Boneless'; label2 = 'Alitas'; subItemNames = ["Boneless", "Alitas"]; }
        else if (selectedProductForModal.id === 27) { label1 = 'Tenders'; label2 = 'Boneless'; subItemNames = ["Tenders", "Boneless"]; }
        else if (selectedProductForModal.id === 28) { label1 = 'Dedos'; label2 = 'Palomitas'; subItemNames = ["Dedos de Queso", "Palomitas de Pollo"]; }
        else if (selectedProductForModal.id === 29) { label1 = 'Dedos'; label2 = 'Boneless'; subItemNames = ["Dedos", "Boneless"]; }
        else if (selectedProductForModal.id === 30) { label1 = 'Alitas'; label2 = 'Palomitas'; subItemNames = ["Alitas", "Palomitas de Pollo"]; }
        else if (selectedProductForModal.id === 31) { label1 = 'Palomitas'; label2 = 'Tenders'; subItemNames = ["Palomitas de Pollo", "Tenders"]; }
        else if (selectedProductForModal.id === 32) { label1 = 'Boneless'; label2 = 'Alitas'; label3 = 'Dedos'; subItemNames = ["Boneless", "Alitas", "Dedos de Queso"]; }
        else if (selectedProductForModal.id === 33) { label1 = 'Tenders'; label2 = 'Palomitas'; label3 = 'Boneless'; subItemNames = ["Tenders", "Palomitas de Pollo", "Boneless"]; }
        else if (selectedProductForModal.id === 34) { label1 = 'Tenders'; label2 = 'Dedos'; label3 = 'Boneless'; subItemNames = ["Tenders", "Dedos de Queso", "Boneless"]; }

        // Formato ultra corto para extras: "+ Extra: Ranch (Untado)"
        const getExtraSauceText = (index) => {
            const targetId = `subitem-${index}`;
            const extraSauceCheckbox = document.getElementById(`checkbox-extra-${targetId}`);
            if (extraSauceCheckbox && extraSauceCheckbox.checked) {
                const extraName = document.getElementById(`select-extra-${targetId}`).value;
                const extraPrep = document.querySelector(`input[name="prep-extra-${targetId}"]:checked`).value;
                finalPrice += 8;
                return `+ Extra: ${extraName} (${extraPrep})`;
            }
            return null;
        };

        if (subItemNames.length === 1) {
            if (saucePrep1 === 'Solo') specs.push(`${label1}: Solos`);
            else specs.push(`${label1}: ${sauceSelected1} (${saucePrep1})`);

            if (isLargeSize || isMegaSize) {
                const sauceSelected2 = document.getElementById('modal-sauce-select-2').value;
                const saucePrep2 = document.querySelector('input[name="sauce-prep-2"]:checked').value;
                if (saucePrep2 === 'Solo') specs.push(`${label2}: Solos`);
                else specs.push(`${label2}: ${sauceSelected2} (${saucePrep2})`);
            }

            const extra = getExtraSauceText(0);
            if (extra) specs.push(extra);
        } else {
            // Alimento 1
            if (saucePrep1 === 'Solo') specs.push(`${label1}: Solos`);
            else specs.push(`${label1}: ${sauceSelected1} (${saucePrep1})`);
            const extra0 = getExtraSauceText(0);
            if (extra0) specs.push(extra0);

            // Alimento 2
            if (isLargeSize || isMegaSize) {
                const sauceSelected2 = document.getElementById('modal-sauce-select-2').value;
                const saucePrep2 = document.querySelector('input[name="sauce-prep-2"]:checked').value;
                if (saucePrep2 === 'Solo') specs.push(`${label2}: Solos`);
                else specs.push(`${label2}: ${sauceSelected2} (${saucePrep2})`);

                const extra1 = getExtraSauceText(1);
                if (extra1) specs.push(extra1);
            }

            // Alimento 3
            if (isMegaSize) {
                const sauceSelected3 = document.getElementById('modal-sauce-select-3').value;
                const saucePrep3 = document.querySelector('input[name="sauce-prep-3"]:checked').value;
                if (saucePrep3 === 'Solo') specs.push(`${label3}: Solos`);
                else specs.push(`${label3}: ${sauceSelected3} (${saucePrep3})`);

                const extra2 = getExtraSauceText(2);
                if (extra2) specs.push(extra2);
            }
        }
    }

    // 6. CONFIGURACIÓN DE COMPLEMENTOS FRITOS (PAPAS / AROS) SIMPLIFICADO
    if (((selectedProductForModal.hasChips && !isSalchi) || isIndividualChips || isMixPapas || isArosCebolla) && !isExtraSauce) {
        const chipSelect = document.getElementById('modal-chip-type-select');
        let chipName = isArosCebolla ? 'Aros' : 'Papas'; // Nombre base

        // Si se puede elegir tipo, adjuntamos el tipo al nombre (Ej. "Papas Curly")
        if (chipSelect && !isIndividualChips && !isMixPapas && !isArosCebolla) {
            const chipType = chipSelect.value;
            chipName = `Papas ${chipType}`;
            if (chipType !== 'Francesa') {
                finalPrice += [10, 14, 26, 27, 28, 29, 30, 31, 34].includes(selectedProductForModal.id) ? 10 : 5;
            }
        }

        const chipsModeRadio = document.querySelector('input[name="chips-mode"]:checked');
        if (chipsModeRadio) {
            const chipsMode = chipsModeRadio.value;

            if (chipsMode === 'Con Todo') {
                specs.push(`${chipName}: Con todo`);
            } else if (chipsMode === 'Todo Aparte') {
                specs.push(`${chipName}: Todo aparte`);
            } else if (chipsMode === 'Solas') {
                specs.push(`${chipName}: Solas`);
            } else if (chipsMode === 'Personalizar') {
                const catsupPapas = document.querySelector('input[name="prep-catsup"]:checked').value;
                const quesoPapas = document.querySelector('input[name="prep-queso"]:checked').value;
                const salsaPapas = document.querySelector('input[name="prep-salsa"]:checked').value;

                if (catsupPapas === 'Untado' && quesoPapas === 'Untado' && salsaPapas === 'Untado') specs.push(`${chipName}: Con todo`);
                else if (catsupPapas === 'Aparte' && quesoPapas === 'Aparte' && salsaPapas === 'Aparte') specs.push(`${chipName}: Todo aparte`);
                else if (catsupPapas === 'Solo' && quesoPapas === 'Solo' && salsaPapas === 'Solo') specs.push(`${chipName}: Solas`);
                else {
                    let condimentosActivos = [];
                    if (catsupPapas !== 'Solo') condimentosActivos.push(`Catsup: ${catsupPapas}`);
                    if (quesoPapas !== 'Solo') condimentosActivos.push(`Queso: ${quesoPapas}`);
                    if (salsaPapas !== 'Solo') condimentosActivos.push(`Salsa: ${salsaPapas}`);
                    specs.push(`${chipName} :${condimentosActivos.join(', ')}`);
                }
            }
        }
    }

    // 7. PAPAS EXTRA EN PAQUETES MEGA SIMPLIFICADO
    const megaFriesCheck = document.getElementById('mega-extra-fries');
    if (megaFriesCheck && megaFriesCheck.checked) {
        finalPrice += 20;
        const friesType = document.getElementById('mega-fries-type').value;
        const mode = document.querySelector('input[name="mega-fries-mode"]:checked')?.value;

        let megaName = `Extra Papas ${friesType}`;

        if (mode === 'Con Todo') specs.push(`${megaName}: Con todo`);
        else if (mode === 'Todo Aparte') specs.push(`${megaName}: Todo aparte`);
        else if (mode === 'Solas') specs.push(`${megaName}: Solas`);
        else if (mode === 'Personalizar') {
            const mCatsup = document.querySelector('input[name="mega-catsup"]:checked').value;
            const mQueso = document.querySelector('input[name="mega-queso"]:checked').value;
            const mSalsa = document.querySelector('input[name="mega-salsa"]:checked').value;

            let mActivos = [];
            if (mCatsup !== 'Solo') mActivos.push(`Catsup: ${mCatsup}`);
            if (mQueso !== 'Solo') mActivos.push(`Queso: ${mQueso}`);
            if (mSalsa !== 'Solo') mActivos.push(`Salsa: ${mSalsa}`);
            specs.push(`${megaName} :${mActivos.join(', ')}`);
        }
    }

    const finalDetails = specs.join(' | ');

    if (typeof cart !== 'undefined') {
        if (editingCartItem !== null) {
            // === PROCESO DE EDICIÓN ===
            const originalIndex = editingCartItem.index;
            const originalQty = editingCartItem.quantity;

            cart.splice(originalIndex, 1);

            const existing = cart.find(item => item.id === selectedProductForModal.id && item.customization === finalDetails && item.price === finalPrice);

            if (existing) {
                existing.quantity += originalQty;
            } else {
                cart.splice(originalIndex, 0, {
                    ...selectedProductForModal,
                    price: finalPrice,
                    quantity: originalQty,
                    customization: finalDetails
                });
            }

            editingCartItem = null;

            if (typeof showAddedToCartModal === 'function') {
                showAddedToCartModal("Pedido actualizado");
            }

        } else {
            // === PROCESO NORMAL (Agregar nuevo) ===
            const existing = cart.find(item => item.id === selectedProductForModal.id && item.customization === finalDetails && item.price === finalPrice);
            if (existing) existing.quantity += 1;
            else {
                cart.push({
                    ...selectedProductForModal,
                    price: finalPrice,
                    quantity: 1,
                    customization: finalDetails
                });
            }
            if (typeof showAddedToCartModal === 'function') {
                showAddedToCartModal(selectedProductForModal.name);
            }
        }
    }

    if (typeof updateCartUI === 'function') updateCartUI();
    if (typeof closeCustomModal === 'function') closeCustomModal();
    showAddedToCartModal(selectedProductForModal.name);
}

function addToCartDirectly(product) {
    const existing = cart.find(item => item.id === product.id && !item.customization);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
    ...product,
    quantity: 1,
    customization: ''
});
    }

    updateCartUI();
}

// ==========================================
// CONTROL DEL CARRITO
// ==========================================
function toggleCart() {
    if (document.getElementById('custom-product-modal').classList.contains('open') ||
        document.getElementById('checkout-modal').classList.contains('open')) return;
    document.getElementById('cart-sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('open');
}

function changeQuantity(id, customization, delta) {
    const item = cart.find(item => item.id === id && item.customization === customization);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => !(i.id === id && i.customization === customization));
    }

    updateCartUI();

}

function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    const countBadge = document.getElementById('cart-count');
    const totalSpan = document.getElementById('cart-total');

    container.innerHTML = '';
    let total = 0;
    let itemCount = 0;

    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-cart-msg">Tu carrito está vacío.</p>';
    } else {
       cart.forEach((item, index) => { // <-- Agrega el parámetro 'index' aquí
            total += item.price * item.quantity;
            itemCount += item.quantity;

            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';

            const detailsDisplay = item.customization
                ? `<div class="cart-item-details">${item.customization.replace(/ \| /g, '<br>')}</div>`
                : '';

            itemEl.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span>$${item.price}.00 c/u</span>
                    ${detailsDisplay}
                </div>
                <!-- CONTENEDOR MODIFICADO PARA INCLUIR EL BOTÓN EDITAR -->
                <div class="cart-item-actions" style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
                    <button onclick="editCartItem(${index})" style="background: none; border: none; color: var(--accent-color); cursor: pointer; font-size: 0.85rem; font-weight: 600; display: flex; gap: 5px; align-items: center;">
                        <i class="fa-solid fa-pen"></i> Editar
                    </button>
                    <div class="quantity-controls">
                        <button onclick="changeQuantity(${item.id}, '${item.customization}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity(${item.id}, '${item.customization}', 1)">+</button>
                    </div>
                </div>
            `;
            container.appendChild(itemEl);
        });
    }

    countBadge.innerText = itemCount;
    totalSpan.innerText = `$${total}.00`;
}

function editCartItem(index) {
    const item = cart[index];
    if (!item) return;

    // Guardamos el índice y la cantidad original en nuestra variable global
    editingCartItem = { index: index, quantity: item.quantity };

    // Cerramos el carrito lateral para evitar que estorbe visualmente
    document.getElementById('cart-sidebar').classList.remove('open');

    // Abrimos el modal de configuración de este producto
    openCustomModal(item.id);
}

// ==========================================
// INTERRUPTOR DE TEMA (CLARO / OSCURO)
// ==========================================
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('theme-toggle-btn');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
}

// ==========================================
// NUEVA LOGA DE CONTROL: FORMULARIO DE CLIENTE
// ==========================================
let gpsLocationUrl = ""; // Guarda el enlace de Google Maps

function openCheckoutModal() {
    // Cerramos el carrito lateral de forma limpia
    document.getElementById('cart-sidebar').classList.remove('open');

    // Abrimos el modal de datos del cliente
    document.getElementById('checkout-modal').classList.add('open');
    document.getElementById('overlay').classList.add('open');

    handleDeliveryChange(); // Inicializa el estado del campo dirección
}

function closeCheckoutModal() {
    document.getElementById('checkout-modal').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
}

function handleDeliveryChange() {
    // 1. Validamos primero que exista un método seleccionado para evitar colapsar si no hay ninguno marcado
    const checkedMethod = document.querySelector('input[name="delivery-method"]:checked');
    if (!checkedMethod) return;

    const deliveryMethod = checkedMethod.value;
    const addressContainer = document.getElementById('address-container');
    const addressInput = document.getElementById('client-address');

    if (deliveryMethod === 'Domicilio') {
        if (addressContainer) {
            addressContainer.style.display = 'block';
        }
    } else {
        if (addressContainer) {
            addressContainer.style.display = 'none';
        }
        // PROTECCIÓN: Solo limpiamos el valor si el input realmente existe en el DOM
        if (addressInput) {
            addressInput.value = "";
        }
        gpsLocationUrl = "";
    }
}

function handlePaymentSelection() {
    const checkboxes = document.querySelectorAll('input[name="payment-method"]:checked');
    const warning = document.getElementById('payment-warning');

    if (checkboxes.length > 3) {
        warning.style.display = 'block';
        if(event) event.target.checked = false;
    } else {
        warning.style.display = 'none';
    }
}

// ==========================================
// LOGICA DE CONTROL DE CHECKOUT ACTUALIZADA
// ==========================================
// Variable global para controlar si el cliente avisó que mandará la ubicación por la app
let clientWillSendWhatsAppGps = false;

function sendLocationViaWhatsApp() {
    // 1. Modificamos el input del cliente para que quede registrado en el formulario y en el ticket
    const addressInput = document.getElementById('client-address');
    if (addressInput) {
        addressInput.value = "[Enviaré mi ubicación actual directo por el chat de WhatsApp]";
    }

    // 2. Activamos la bandera interna por si acaso
    clientWillSendWhatsAppGps = true;

    // 3. Notificación visual rápida y discreta en la página de que se guardó la preferencia
    showMinimalAlert("Preferencia guardada: Enviarás tu ubicación al recibir el ticket.", "success");
}

function getUserLocation() {
    if (!navigator.geolocation) {
        showMinimalAlert("Tu navegador no soporta geolocalización.", "error");
        return;
    }
    showMinimalAlert("Obteniendo coordenadas GPS... Por favor permite el acceso en tu dispositivo.", "info");

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            gpsLocationUrl = `https://www.google.com/maps?q=${lat},${lng}`;
            const addressInput = document.getElementById('client-address');

            if (addressInput) {
                if (addressInput.value.trim() === "" || clientWillSendWhatsAppGps) {
                    addressInput.value = "[Ubicación GPS digital vinculada]";
                    clientWillSendWhatsAppGps = false; // Reseteamos la bandera si usó el GPS nativo al final
                } else {
                    addressInput.value += " (GPS Vinculado)";
                }
            } else {
                console.warn("Nota: El elemento 'client-address' no se encontró en el HTML, pero las coordenadas se guardaron.");
            }

            showMinimalAlert("¡Ubicación GPS guardada exitosamente!", "success");
        },
        (error) => {
            showMinimalAlert("No se pudo obtener la geolocalización. Escribe tu dirección manualmente o usa el botón de WhatsApp.", "error");
            console.error(error);
        },
        { enableHighAccuracy: true, timeout: 10000 }
    );
}

function getCheckoutCurrentTotal() {
    let totalCarrito = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryMethod = document.querySelector('input[name="delivery-method"]:checked')
        ? document.querySelector('input[name="delivery-method"]:checked').value
        : 'Domicilio';
    let costoEnvio = (deliveryMethod === 'Domicilio') ? 10 : 0;
    return totalCarrito + costoEnvio;
}

function handlePaymentMethodChange() {
    const mainMethod = document.getElementById('payment-method-select').value;

    document.getElementById('panel-efectivo-solo').style.display = 'none';
    document.getElementById('panel-transferencia-solo').style.display = 'none';
    document.getElementById('panel-mixto').style.display = 'none';

    document.getElementById('pay-cash-amount').value = "";
    document.getElementById('cash-change-feedback').innerText = "";
    document.getElementById('mix-amount-cash').value = "";
    document.getElementById('mix-amount-transfer').value = "";
    document.getElementById('mix-calculations-feedback').innerText = "";
    document.getElementById('mix-bank-details').style.display = 'none';

    const mixCheckboxes = document.querySelectorAll('input[name="mix-payment-type"]');
    mixCheckboxes.forEach(cb => cb.checked = false);
    document.getElementById('mix-field-efectivo').style.display = 'none';
    document.getElementById('mix-field-transferencia').style.display = 'none';

    if (mainMethod === 'Efectivo') {
        document.getElementById('panel-efectivo-solo').style.display = 'block';
    } else if (mainMethod === 'Transferencia') {
        document.getElementById('panel-transferencia-solo').style.display = 'block';
    } else if (mainMethod === 'Mixto') {
        document.getElementById('panel-mixto').style.display = 'block';
    }
}

function calculateSoloChange() {
    const totalFinal = getCheckoutCurrentTotal();
    const inputCash = parseFloat(document.getElementById('pay-cash-amount').value) || 0;
    const feedback = document.getElementById('cash-change-feedback');

    if (inputCash === 0) {
        feedback.innerText = "";
    } else if (inputCash < totalFinal) {
        feedback.innerText = `Faltan $${(totalFinal - inputCash).toFixed(2)} pesos.`;
        feedback.style.color = "red";
    } else {
        feedback.innerText = `Tu cambio será de: $${(inputCash - totalFinal).toFixed(2)} pesos.`;
        feedback.style.color = "green";
    }
}

function handleMixCheckboxLogic() {
    const checkboxes = document.querySelectorAll('input[name="mix-payment-type"]:checked');
    if (checkboxes.length > 2) {
        showMinimalAlert("En el modo Mixto solo puedes seleccionar hasta 2 métodos de pago.", "error");
        if(event) event.target.checked = false;
        return;
    }

    const selected = Array.from(checkboxes).map(cb => cb.value);

    document.getElementById('mix-field-efectivo').style.display = selected.includes('Efectivo') ? 'block' : 'none';
    document.getElementById('mix-field-transferencia').style.display = selected.includes('Transferencia') ? 'block' : 'none';

    if (!selected.includes('Efectivo')) document.getElementById('mix-amount-cash').value = "";
    if (!selected.includes('Transferencia')) document.getElementById('mix-amount-transfer').value = "";

    calculateMixOutputs();
}

function calculateMixOutputs() {
    const totalFinal = getCheckoutCurrentTotal();
    const checkboxes = document.querySelectorAll('input[name="mix-payment-type"]:checked');
    const selected = Array.from(checkboxes).map(cb => cb.value);
    const feedback = document.getElementById('mix-calculations-feedback');
    const bankDetails = document.getElementById('mix-bank-details');

    feedback.innerText = "";
    bankDetails.style.display = 'none';

    if (selected.length === 0) return;

    if (selected.length === 1) {
        feedback.innerText = `Total a cubrir: $${totalFinal}.00\nSelecciona el segundo método de pago para calcular los montos.`;
        feedback.style.color = "#555";
        return;
    }

    if (selected.includes('Efectivo') && selected.includes('Transferencia')) {
        const cashValue = parseFloat(document.getElementById('mix-amount-cash').value) || 0;
        const remainderTransfer = totalFinal - cashValue;

        if (cashValue <= 0) {
            feedback.innerText = `Ingresa cuánto se pagará en Efectivo para calcular la transferencia restante.`;
            feedback.style.color = "#555";
        } else if (remainderTransfer < 0) {
            feedback.innerText = `El dinero en efectivo ($${cashValue}) supera el total de la cuenta ($${totalFinal}). El cambio será de $${Math.abs(remainderTransfer).toFixed(2)}. Lo restante para Transferencia es $0.00`;
            feedback.style.color = "green";
        } else {
            feedback.innerText = `Efectivo: $${cashValue.toFixed(2)}\nRestante por Transferir: $${remainderTransfer.toFixed(2)}`;
            feedback.style.color = "green";
            bankDetails.style.display = 'block';
        }
    }
    else if (selected.includes('Transferencia') && selected.includes('Tarjeta')) {
        const transferValue = parseFloat(document.getElementById('mix-amount-transfer').value) || 0;
        const remainderCard = totalFinal - transferValue;

        if (transferValue <= 0) {
            feedback.innerText = `Ingresa el monto de la Transferencia para calcular lo restante para Tarjeta.`;
            feedback.style.color = "#555";
            bankDetails.style.display = 'block';
        } else if (remainderCard < 0) {
            feedback.innerText = `El monto asignado a transferencia ($${transferValue}) excede el total de la cuenta ($${totalFinal}).`;
            feedback.style.color = "red";
            bankDetails.style.display = 'block';
        } else {
            feedback.innerText = `Monto Transferencia: $${transferValue.toFixed(2)}\nMonto restante a cobrar con Tarjeta: $${remainderCard.toFixed(2)}`;
            feedback.style.color = "green";
            bankDetails.style.display = 'block';
        }
    }
    else if (selected.includes('Efectivo') && selected.includes('Tarjeta')) {
        const cashValue = parseFloat(document.getElementById('mix-amount-cash').value) || 0;
        const remainderCard = totalFinal - cashValue;

        if (cashValue <= 0) {
            feedback.innerText = `Ingresa el monto en Efectivo para calcular lo restante para Tarjeta.`;
            feedback.style.color = "#555";
        } else if (remainderCard < 0) {
            feedback.innerText = `El dinero en efectivo ($${cashValue}) supera el total de la cuenta. El cambio es de $${Math.abs(remainderCard).toFixed(2)}.`;
            feedback.style.color = "green";
        } else {
            feedback.innerText = `Monto Efectivo: $${cashValue.toFixed(2)}\nMonto restante a cobrar con Tarjeta: $${remainderCard.toFixed(2)}`;
            feedback.style.color = "green";
        }
    }
}

// Modificar tu función de escucha de entrega para que actualice la matemática de los aditamentos de pago
const originalHandleDeliveryChange = handleDeliveryChange;
handleDeliveryChange = function() {
    if (typeof originalHandleDeliveryChange === 'function') {
        originalHandleDeliveryChange();
    }
    calculateSoloChange();
    calculateMixOutputs();
};

// ==========================================
// ENVÍO DE PEDIDO A WHATSAPP
// ==========================================
function sendWhatsAppOrder() {
    if (cart.length === 0) {
        showMinimalAlert('Por favor, agrega productos al carrito antes de enviar.', 'error');
        return;
    }
    openCheckoutModal();
}

function finalCheckoutSubmit() {
    const name = document.getElementById('client-name').value.trim();
    const phone = document.getElementById('client-phone').value.trim();
    const deliveryMethod = document.querySelector('input[name="delivery-method"]:checked').value;

    // Validación de la dirección
    const addressInput = document.getElementById('client-address');
    const address = addressInput ? addressInput.value.trim() : "";
    const notes = document.getElementById('order-notes').value.trim();

    const paymentMethodSelect = document.getElementById('payment-method-select').value;
    const mixCheckboxes = document.querySelectorAll('input[name="mix-payment-type"]:checked');
    const checkedMixPayments = Array.from(mixCheckboxes).map(cb => cb.value);

    // Alertas de Validación
    if (!name) { showMinimalAlert("Por favor, ingresa tu nombre.", "error"); return; }
    if (phone.length !== 10) { showMinimalAlert("El número de teléfono debe tener exactamente 10 dígitos numéricos.", "error"); return; }
    if (deliveryMethod === 'Domicilio' && !address && !gpsLocationUrl) {
        showMinimalAlert("Ingresa tu dirección de envío o presiona el botón de obtener ubicación.", "error");
        return;
    }

    let totalCarrito = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let costoEnvio = (deliveryMethod === 'Domicilio') ? 10 : 0;
    let totalFinal = totalCarrito + costoEnvio;

    let metodoPagoTexto = "";
    let especificacionesPago = "";

    // Lógica para estructurar el mensaje del Método de Pago
    if (paymentMethodSelect === 'Efectivo') {
        const cashValue = parseFloat(document.getElementById('pay-cash-amount').value) || 0;
        if (cashValue <= 0) { showMinimalAlert("Por favor ingresa la cantidad con la que vas a pagar en efectivo.", "error"); return; }
        if (cashValue < totalFinal) { showMinimalAlert(`El efectivo ingresado ($${cashValue}) es menor al costo total del pedido ($${totalFinal}).`, "error"); return; }

        metodoPagoTexto = "Efectivo";
        especificacionesPago = `💵 Pagas con: $${cashValue.toFixed(2)}\n🔁 Cambio: $${(cashValue - totalFinal).toFixed(2)}\n`;

    } else if (paymentMethodSelect === 'Tarjeta') {
        metodoPagoTexto = "Tarjeta (Pago al recibir/entregar)";
        especificacionesPago = "💳 Se requiere terminal para cobro.\n";

    } else if (paymentMethodSelect === 'Transferencia') {
        metodoPagoTexto = "Transferencia Bancaria";
        especificacionesPago = "🏦 *Cuenta NU:* 638180000136730578\n   - Beneficiario: Fernando Gael Duran Zamora\n⚠️ _Favor de compartir su comprobante por este chat._\n";

    } else if (paymentMethodSelect === 'Mixto') {
        if (checkedMixPayments.length !== 2) {
            showMinimalAlert("Para el pago Mixto, debes seleccionar exactamente 2 métodos de pago.", "error");
            return;
        }

        metodoPagoTexto = `Mixto (${checkedMixPayments.join(' + ')})`;

        if (checkedMixPayments.includes('Efectivo') && checkedMixPayments.includes('Transferencia')) {
            const mCash = parseFloat(document.getElementById('mix-amount-cash').value) || 0;
            if (mCash <= 0) { showMinimalAlert("Ingresa el monto a cubrir en efectivo.", "error"); return; }
            const mTransfer = totalFinal - mCash;

            if (mTransfer < 0) {
                especificacionesPago = `💵 Pagas con: $${mCash}.00 (Cubre el total)\n🔁 Cambio: $${Math.abs(mTransfer).toFixed(2)}\n🏦 Transferencia: $0.00\n`;
            } else {
                especificacionesPago = `💵 Efectivo: $${mCash}.00\n🏦 Transferencia: $${mTransfer.toFixed(2)}\n🏦 *Cuenta NU:* 638180000136730578\n`;
            }
        }
        else if (checkedMixPayments.includes('Transferencia') && checkedMixPayments.includes('Tarjeta')) {
            const mTransfer = parseFloat(document.getElementById('mix-amount-transfer').value) || 0;
            if (mTransfer <= 0) { showMinimalAlert("Ingresa el monto a transferir.", "error"); return; }
            if (mTransfer > totalFinal) { showMinimalAlert("El monto por transferencia no puede ser mayor que el total.", "error"); return; }
            const mCard = totalFinal - mTransfer;

            especificacionesPago = `🏦 Transferencia: $${mTransfer.toFixed(2)}\n💳 Tarjeta (Terminal): $${mCard.toFixed(2)}\n🏦 *Cuenta NU:* 638180000136730578\n`;
        }
        else if (checkedMixPayments.includes('Efectivo') && checkedMixPayments.includes('Tarjeta')) {
            const mCash = parseFloat(document.getElementById('mix-amount-cash').value) || 0;
            if (mCash <= 0) { showMinimalAlert("Ingresa el monto a cubrir en efectivo.", "error"); return; }
            const mCard = totalFinal - mCash;

            if (mCard < 0) {
                especificacionesPago = `💵 Efectivo: $${mCash}.00 (Cubre el total)\n🔁 Cambio: $${Math.abs(mCard).toFixed(2)}\n💳 Tarjeta: $0.00\n`;
            } else {
                especificacionesPago = `💵 Efectivo: $${mCash}.00\n💳 Tarjeta: $${mCard.toFixed(2)}\n`;
            }
        }
    }

    const phoneNumber = '525657861068';

    // Generar la fecha con el nuevo formato
    const ahora = new Date();
    const opcionesFecha = { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', hour12: true };
    const fechaHora = ahora.toLocaleString('es-MX', opcionesFecha);

    // ==========================================
    // CONSTRUCCIÓN DEL NUEVO MENSAJE DE WHATSAPP
    // ==========================================
    let message = '📌 *Pedido La Carpita*\n';
    message += `🕒 Fecha y hora del pedido: *${fechaHora}*\n\n`;

    // Iteración de productos más limpia
    cart.forEach((item, index) => {
        // Variable para controlar qué nombre imprimimos en el WhatsApp
        let displayName = item.name;

        // Añadimos el subtítulo con los alimentos correspondientes si detecta un Paquete
        if (item.id === 26) displayName += " (Boneless y Alitas)";
        else if (item.id === 27) displayName += " (Tenders y Boneless)";
        else if (item.id === 28) displayName += " (Dedos y Palomitas)";
        else if (item.id === 29) displayName += " (Dedos y Boneless)";
        else if (item.id === 30) displayName += " (Alitas y Palomitas)";
        else if (item.id === 31) displayName += " (Palomitas y Tenders)";
        else if (item.id === 32) displayName += " (Boneless, Alitas y Dedos)";
        else if (item.id === 33) displayName += " (Tenders, Palomitas y Boneless)";
        else if (item.id === 34) displayName += " (Tenders, Dedos y Boneless)";

        message += `🍽️ *${index + 1}- (x${item.quantity}) ${displayName} — $${item.price * item.quantity}.00*\n`;

        if (item.customization) {
            const lines = item.customization.split(' | ');
            lines.forEach(line => {
                message += `${line}\n`;
            });
        }
        message += '\n'; // Espacio vital para separar visualmente cada platillo
    });

    message += '-----------------------\n';
    message += `🧾 Subtotal: $${totalCarrito}.00\n`;
    if (costoEnvio > 0) message += `🚚 Envío: $${costoEnvio}.00\n`;
    message += `💰 Total: $${totalFinal}.00\n`;
    message += '-----------------------\n';

    // Área de Pago
    message += `💳 Método de pago: *${metodoPagoTexto}*\n`;
    message += especificacionesPago;
    message += '-----------------------\n';

    // Información del Cliente
    message += `👤 Nombre: *${name}*\n`;
    message += `📞 Teléfono: *${phone}*\n`;

    // Manejo de la ubicación para envíos a domicilio vs sucursal
    let dirEnvio = "Se enviará manualmente por WhatsApp";
    if (address && address !== "[Enviaré mi ubicación actual directo por el chat de WhatsApp]") {
        dirEnvio = address;
    }

    if (deliveryMethod === 'Domicilio') {
        message += `📍 Ubicación: *${dirEnvio}*\n`;
        if (gpsLocationUrl) message += `📍 Link GPS: ${gpsLocationUrl}\n`;
        message += `🚚 Entrega: *Envío a domicilio*\n`;
    } else {
        message += `📍 Ubicación: *Sucursal La Carpita*\n`;
        message += `🚚 Entrega: *Pasar por Sucursal*\n`;
    }

    if (notes) message += `📝 Notas Extras: *${notes}*\n`;

    // Footer de la orden
    message += '-----------------------\n';
    message += `Tiempo de preparacion: *15 min a 30 min dependiendo cantidad de producto y clientes en espera*\n`;
    message += `💡 *Todo alimento se prepara al momento de su orden*\n`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    closeCheckoutModal();
}

// ==========================================
// INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle-btn').innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    document.getElementById('overlay').addEventListener('click', () => {

    closeCustomModal();
    closeCheckoutModal();

    document.getElementById('cart-sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');

});
});

// Ejecuta la lógica del método de pago inmediatamente al cargar para sincronizar la interfaz
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('payment-method-select')) {
        handlePaymentMethodChange();
    }
});

function showAddedToCartModal(productName) {
    const modal = document.getElementById("success-modal");
    const text = document.getElementById("success-product-name");

    text.textContent = `${productName} agregado correctamente`;

    modal.classList.add("show");

    setTimeout(() => {
        modal.classList.remove("show");
    }, 1800);
}

window.addEventListener("load", () => {

    if(!localStorage.getItem("welcomeShown")){
        document.getElementById("welcome-modal").classList.remove("hide");
    }else{
        document.getElementById("welcome-modal").style.display = "none";
    }

});

function closeWelcomeModal(){

    document.getElementById("welcome-modal").classList.add("hide");

    localStorage.setItem("welcomeShown","true");
}
