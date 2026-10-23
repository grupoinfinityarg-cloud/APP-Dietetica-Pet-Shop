// Natural Market & Pet - POS Logic & State Management
// Progressive Web App Architecture

const DEFAULT_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Almendras Nonpareil',
    desc: 'Calidad Extra Premium',
    category: 'granel',
    type: 'bulk', // bulk (granel) vs unit (unidad)
    unit: 'kg',
    price: 12000,
    stock: 48.5,
    barcode: '7791234560012',
    salesCount: 64,
    image: './img/almendras.jpg'
  },
  {
    id: 'prod-2',
    name: 'Alimento Perro Cachorro 3kg',
    desc: 'Pollo & Arroz Integral Natural',
    category: 'mascotas',
    type: 'unit',
    unit: 'un',
    price: 8900,
    stock: 14,
    barcode: '7791234560074',
    salesCount: 52,
    image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-3',
    name: 'Nueces Chandler Mariposa',
    desc: 'Cosecha Nueva Seleccionada',
    category: 'granel',
    type: 'bulk',
    unit: 'kg',
    price: 15800,
    stock: 32.0,
    barcode: '7791234560029',
    salesCount: 47,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-4',
    name: 'Arena Sanitaria Bentonita 5kg',
    desc: 'Aglutinante Control Olor',
    category: 'accesorios',
    type: 'unit',
    unit: 'un',
    price: 6900,
    stock: 22,
    barcode: '7791234560180',
    salesCount: 44,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-5',
    name: 'Alimento Gato Castrado 3kg',
    desc: 'Salmón & Vegetales Control Peso',
    category: 'mascotas',
    type: 'unit',
    unit: 'un',
    price: 14200,
    stock: 9,
    barcode: '7791234560098',
    salesCount: 39,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-6',
    name: 'Semillas de Chía Agroecológica',
    desc: 'Omega 3 y Fibra Pura',
    category: 'granel',
    type: 'bulk',
    unit: 'kg',
    price: 4200,
    stock: 25.0,
    barcode: '7791234560043',
    salesCount: 37,
    image: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-7',
    name: 'Pipeta Antipulgas Gatos',
    desc: 'Protección Integral x 30 días',
    category: 'accesorios',
    type: 'unit',
    unit: 'un',
    price: 6500,
    stock: 18,
    barcode: '7791234560166',
    salesCount: 36,
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-8',
    name: 'Avena Arrollada Gruesa',
    desc: 'Orgánica sin aditivos',
    category: 'granel',
    type: 'bulk',
    unit: 'kg',
    price: 2100,
    stock: 60.0,
    barcode: '7791234560036',
    salesCount: 33,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-9',
    name: 'Snack Dental Sticks Perros x7',
    desc: 'Cuidado Bucal & Sarro',
    category: 'mascotas',
    type: 'unit',
    unit: 'un',
    price: 4800,
    stock: 28,
    barcode: '7791234560111',
    salesCount: 31,
    image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-10',
    name: 'Citrato de Magnesio 200g',
    desc: 'Puro Grado USP Suplemento',
    category: 'suplementos',
    type: 'unit',
    unit: 'un',
    price: 11500,
    stock: 15,
    barcode: '7791234560197',
    salesCount: 28,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-11',
    name: 'Miel de Monte Pura 500g',
    desc: 'Agroecológica de Floración Silvestre',
    category: 'dietetica',
    type: 'unit',
    unit: 'un',
    price: 4500,
    stock: 19,
    barcode: '7791234560135',
    salesCount: 26,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-12',
    name: 'Alimento Perro Premium Granel',
    desc: 'Venta suelta por kilogramo',
    category: 'mascotas',
    type: 'bulk',
    unit: 'kg',
    price: 2800,
    stock: 45.0,
    barcode: '7791234560104',
    salesCount: 25,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-13',
    name: 'Harina de Almendras Sin TACC',
    desc: '100% Almendra micropulverizada 500g',
    category: 'dietetica',
    type: 'unit',
    unit: 'un',
    price: 5200,
    stock: 12,
    barcode: '7791234560128',
    salesCount: 22,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-14',
    name: 'Granola Artesanal con Miel',
    desc: 'Semillas, Pasas & Copos Tostados',
    category: 'granel',
    type: 'bulk',
    unit: 'kg',
    price: 6400,
    stock: 30.0,
    barcode: '7791234560050',
    salesCount: 21,
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-15',
    name: 'Pipeta Perro Mediano (10-20kg)',
    desc: 'Doble acción pulgas y garrapatas',
    category: 'accesorios',
    type: 'unit',
    unit: 'un',
    price: 7800,
    stock: 16,
    barcode: '7791234560173',
    salesCount: 19,
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod-16',
    name: 'Colágeno Hidrolizado + Vit C',
    desc: 'Nutrición articular 250g',
    category: 'suplementos',
    type: 'unit',
    unit: 'un',
    price: 13800,
    stock: 8,
    barcode: '7791234560203',
    salesCount: 17,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80'
  }
];

class NaturalPOSApp {
  constructor() {
    this.products = this.loadProducts();
    this.cart = this.loadCart();
    this.salesHistory = this.loadSalesHistory();
    this.currentCategory = 'top'; // 'top' = Más Vendidos por defecto!
    this.searchQuery = '';
    this.discountPercent = 0;
    this.currentView = 'pos'; // 'pos', 'stock', 'cierre', 'historial'
    this.scaleWeightGrams = 350; // peso activo simulado
    this.weighingProduct = null;
    this.currentOrderNumber = this.generateOrderNumber();
    this.speechRecognition = null;
    this.isListening = false;
    this.paymentMethod = 'cash'; // 'cash', 'mercadopago', 'card', 'transfer'
    this.cashAmountGiven = 0;

    // Caja turno inicial
    this.cashRegister = this.loadCashRegister();

    this.init();
  }

  init() {
    this.initSpeechRecognition();
    this.renderProducts();
    this.renderCart();
    this.bindEvents();
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  loadProducts() {
    const saved = localStorage.getItem('natural_pos_products');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Actualizar automáticamente si tiene imágenes rotas en caché local
        parsed.forEach(p => {
          if (p.id === 'prod-1') {
            p.image = './img/almendras.jpg';
          }
          if (p.id === 'prod-16' && (p.image.includes('photo-1550572017') || !p.image)) {
            p.image = 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80';
          }
        });
        return parsed;
      } catch (e) {
        console.error('Error parseando productos guardados', e);
      }
    }
    return [...DEFAULT_PRODUCTS];
  }

  saveProducts() {
    localStorage.setItem('natural_pos_products', JSON.stringify(this.products));
  }

  loadCart() {
    const saved = localStorage.getItem('natural_pos_cart');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return [];
  }

  saveCart() {
    localStorage.setItem('natural_pos_cart', JSON.stringify(this.cart));
  }

  loadSalesHistory() {
    const saved = localStorage.getItem('natural_pos_sales');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return [
      {
        id: '#TK-4089',
        date: new Date(Date.now() - 3600000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        items: [
          { name: 'Almendras Nonpareil', qtyStr: '350g', subtotal: 4200 },
          { name: 'Pipeta Antipulgas Gatos', qtyStr: '1 un', subtotal: 6500 }
        ],
        total: 10700,
        payment: 'Mercado Pago'
      },
      {
        id: '#TK-4090',
        date: new Date(Date.now() - 2400000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        items: [
          { name: 'Alimento Perro Cachorro 3kg', qtyStr: '1 un', subtotal: 8900 }
        ],
        total: 8900,
        payment: 'Efectivo'
      }
    ];
  }

  saveSalesHistory() {
    localStorage.setItem('natural_pos_sales', JSON.stringify(this.salesHistory));
  }

  loadCashRegister() {
    const saved = localStorage.getItem('natural_pos_cash_register');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return {
      initialCash: 25000,
      cashSales: 8900,
      digitalSales: 10700,
      openedAt: '08:30 hs'
    };
  }

  saveCashRegister() {
    localStorage.setItem('natural_pos_cash_register', JSON.stringify(this.cashRegister));
  }

  generateOrderNumber() {
    const base = 4091 + this.salesHistory.length;
    return `#TK-${base}`;
  }

  formatMoney(num) {
    return '$' + Math.round(num).toLocaleString('es-AR');
  }

  updateClock() {
    const dateEl = document.getElementById('liveClock');
    if (dateEl) {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      dateEl.textContent = timeStr;
    }
  }

  // BÚSQUEDA Y FILTRADO
  getFilteredProducts() {
    let list = [...this.products];

    // Búsqueda por texto (nombre, barcode, categoría)
    if (this.searchQuery.trim() !== '') {
      const q = this.searchQuery.toLowerCase().trim();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.barcode.includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    } else {
      // Filtrado por categoría activa
      if (this.currentCategory === 'top') {
        // MÁS VENDIDOS: Se ordenan dinámicamente según ventas acumuladas!
        list.sort((a, b) => (b.salesCount || 0) - (a.salesCount || 0));
      } else if (this.currentCategory !== 'all') {
        list = list.filter(p => p.category === this.currentCategory);
      }
    }

    return list;
  }

  renderProducts() {
    const container = document.getElementById('productGrid');
    if (!container) return;

    const list = this.getFilteredProducts();

    if (list.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center text-outline">
          <span class="material-symbols-outlined text-5xl mb-2 text-outline-variant">search_off</span>
          <p class="font-headline-md text-on-surface">No se encontraron productos para "${this.searchQuery}"</p>
          <p class="text-body-sm text-on-surface-variant mt-1">Intenta con otro término o escanea el código de barras.</p>
          <button onclick="posApp.clearSearch()" class="mt-4 px-4 py-2 bg-surface-container-high rounded-xl text-primary font-semibold hover:bg-surface-container-highest transition-all">
            Limpiar Búsqueda
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(prod => {
      const isBulk = prod.type === 'bulk';
      const isTopSeller = prod.salesCount >= 30;

      return `
        <article class="group bg-surface-container-lowest rounded-2xl border border-surface-container-highest/80 p-3 sm:p-3.5 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-primary/50 transition-all cursor-pointer relative" onclick="posApp.handleProductClick('${prod.id}')">
          <div class="flex-1 flex flex-col">
            <!-- Imagen con badges posicionados sin colisión -->
            <div class="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-low mb-2.5 shadow-inner">
              <img src="${prod.image}" alt="${prod.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"/>
              
              <!-- Badge Tipo (Top-Left) -->
              <span class="absolute top-2 left-2 px-2 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-bold tracking-wide uppercase shadow-sm ${
                isBulk 
                  ? 'bg-primary text-on-primary flex items-center gap-1' 
                  : 'bg-surface-container-highest/90 text-on-surface backdrop-blur-sm'
              }">
                ${isBulk ? '<span class="material-symbols-outlined text-[13px]">scale</span> Granel' : 'Unidad'}
              </span>

              <!-- Badge Más Vendidos (Top-Right) -->
              ${isTopSeller ? `
                <span class="absolute top-2 right-2 px-2 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-extrabold bg-primary-container text-on-primary-container shadow-sm flex items-center gap-0.5">
                  🔥 #${prod.salesCount}
                </span>
              ` : ''}

              <!-- Badge Stock (Bottom-Left) -->
              <span class="absolute bottom-2 left-2 px-2 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-bold tracking-wide backdrop-blur-md shadow-sm ${
                prod.stock <= 10 
                  ? 'bg-error/90 text-on-error' 
                  : 'bg-inverse-surface/80 text-inverse-on-surface'
              }">
                Stock: ${prod.stock} ${prod.unit}
              </span>
            </div>

            <!-- Título y descripción con altura uniforme -->
            <h3 class="font-extrabold text-on-surface text-[14px] sm:text-[15px] leading-snug line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
              ${prod.name}
            </h3>
            <p class="text-xs text-on-surface-variant line-clamp-1 mt-0.5 mb-2">${prod.desc}</p>
          </div>

          <!-- Barra de Precio y Acción (Siempre alineada abajo y sin cortes) -->
          <div class="pt-2.5 mt-auto border-t border-surface-container-high/70 flex items-center justify-between gap-1.5 min-w-0">
            <div class="min-w-0 flex-1">
              <div class="text-base sm:text-lg font-black text-primary tabular-nums tracking-tight truncate leading-none">
                ${this.formatMoney(prod.price)}
              </div>
              <span class="text-[10px] sm:text-[11px] text-outline font-semibold block mt-0.5">por ${prod.unit}</span>
            </div>

            <button class="shrink-0 h-9 sm:h-10 px-2.5 sm:px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1 shadow-xs transition-all active:scale-95 ${
              isBulk 
                ? 'bg-primary text-on-primary hover:bg-primary-container' 
                : 'bg-primary-container text-on-primary-container hover:bg-primary'
            }" onclick="event.stopPropagation(); posApp.handleProductClick('${prod.id}')" title="${isBulk ? 'Pesar en balanza' : 'Agregar al ticket'}">
              <span class="material-symbols-outlined text-[17px] sm:text-[18px]">${isBulk ? 'scale' : 'add_shopping_cart'}</span>
              <span>${isBulk ? '+ Pesar' : '+ Agregar'}</span>
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  handleProductClick(productId) {
    const prod = this.products.find(p => p.id === productId);
    if (!prod) return;

    if (prod.type === 'bulk') {
      // Abre modal de balanza digital táctil
      this.openScaleModal(prod);
    } else {
      // Agrega 1 unidad directamente (flujo 1-tap estilo Square)
      this.addToCartUnit(prod);
    }
  }

  // CARRITO / TICKET ACTIVO
  addToCartUnit(prod, quantity = 1) {
    const existingIndex = this.cart.findIndex(i => i.id === prod.id && i.type === 'unit');
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
      this.cart[existingIndex].subtotal = this.cart[existingIndex].quantity * prod.price;
    } else {
      this.cart.push({
        id: prod.id,
        name: prod.name,
        type: 'unit',
        unitPrice: prod.price,
        quantity: quantity,
        unit: prod.unit,
        subtotal: prod.price * quantity,
        barcode: prod.barcode
      });
    }

    this.saveCart();
    this.renderCart();
    this.showQuickToast(`Agregado: ${prod.name}`);
  }

  addToCartBulk(prod, weightGrams) {
    const kilos = weightGrams / 1000;
    const subtotal = Math.round(prod.price * kilos);

    this.cart.push({
      id: prod.id,
      name: prod.name,
      type: 'bulk',
      unitPrice: prod.price,
      weightGrams: weightGrams,
      kilos: kilos,
      unit: 'kg',
      subtotal: subtotal,
      barcode: prod.barcode
    });

    this.saveCart();
    this.renderCart();
    this.closeScaleModal();
    this.showQuickToast(`Agregado a granel: ${weightGrams}g de ${prod.name}`);
  }

  updateItemQuantity(index, delta) {
    const item = this.cart[index];
    if (!item) return;

    if (item.type === 'unit') {
      item.quantity += delta;
      if (item.quantity <= 0) {
        this.cart.splice(index, 1);
      } else {
        item.subtotal = item.quantity * item.unitPrice;
      }
    } else if (item.type === 'bulk') {
      // Granel: ajusta +/- 50g
      item.weightGrams += (delta * 50);
      if (item.weightGrams <= 0) {
        this.cart.splice(index, 1);
      } else {
        item.kilos = item.weightGrams / 1000;
        item.subtotal = Math.round(item.unitPrice * item.kilos);
      }
    }

    this.saveCart();
    this.renderCart();
  }

  removeItem(index) {
    this.cart.splice(index, 1);
    this.saveCart();
    this.renderCart();
  }

  clearCart() {
    if (this.cart.length === 0) return;
    if (confirm('¿Vaciar toda la orden actual?')) {
      this.cart = [];
      this.discountPercent = 0;
      this.saveCart();
      this.renderCart();
      this.showQuickToast('Ticket vaciado');
    }
  }

  calculateTotals() {
    const subtotal = this.cart.reduce((acc, item) => acc + item.subtotal, 0);
    const discountAmount = Math.round(subtotal * (this.discountPercent / 100));
    const total = Math.max(0, subtotal - discountAmount);
    const totalItems = this.cart.reduce((acc, item) => acc + (item.type === 'unit' ? item.quantity : 1), 0);
    return { subtotal, discountAmount, total, totalItems };
  }

  renderCart() {
    const itemsListEl = document.getElementById('cartItemsList');
    const subtotalEl = document.getElementById('cartSubtotal');
    const discountEl = document.getElementById('cartDiscount');
    const totalEl = document.getElementById('cartTotal');
    const totalBadgeEl = document.getElementById('cartTotalBtnAmount');
    const mobileCartBar = document.getElementById('mobileCartBar');
    const mobileCartTotal = document.getElementById('mobileCartTotal');
    const mobileCartCount = document.getElementById('mobileCartCount');
    const orderNumEl = document.getElementById('cartOrderNumber');

    if (orderNumEl) orderNumEl.textContent = this.currentOrderNumber;

    const { subtotal, discountAmount, total, totalItems } = this.calculateTotals();

    // Actualizar textos financieros
    if (subtotalEl) subtotalEl.textContent = this.formatMoney(subtotal);
    if (discountEl) {
      if (this.discountPercent > 0) {
        discountEl.parentElement.classList.remove('hidden');
        discountEl.textContent = `-${this.formatMoney(discountAmount)} (${this.discountPercent}%)`;
      } else {
        discountEl.parentElement.classList.add('hidden');
      }
    }
    if (totalEl) totalEl.textContent = this.formatMoney(total);
    if (totalBadgeEl) totalBadgeEl.textContent = this.formatMoney(total);

    // Mobile floating summary
    if (mobileCartBar) {
      if (this.cart.length > 0) {
        mobileCartBar.classList.remove('hidden');
        if (mobileCartTotal) mobileCartTotal.textContent = this.formatMoney(total);
        if (mobileCartCount) mobileCartCount.textContent = `${totalItems} ítem${totalItems > 1 ? 's' : ''}`;
      } else {
        mobileCartBar.classList.add('hidden');
      }
    }

    if (!itemsListEl) return;

    if (this.cart.length === 0) {
      itemsListEl.innerHTML = `
        <div class="h-64 flex flex-col items-center justify-center text-center text-outline p-6">
          <div class="w-16 h-16 rounded-2xl bg-surface-container-low flex items-center justify-center text-outline-variant mb-3">
            <span class="material-symbols-outlined text-3xl">shopping_cart</span>
          </div>
          <p class="font-bold text-on-surface">Orden Vacía</p>
          <p class="text-body-sm text-on-surface-variant max-w-[200px] mt-1">Selecciona productos del catálogo o escanea con el lector.</p>
        </div>
      `;
      return;
    }

    itemsListEl.innerHTML = this.cart.map((item, idx) => {
      const isBulk = item.type === 'bulk';
      return `
        <div class="p-3 bg-surface-bright rounded-xl border border-surface-container-high/80 flex items-start justify-between gap-2.5 transition-all hover:border-outline-variant">
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                isBulk ? 'bg-primary-fixed text-on-primary-fixed' : 'bg-surface-container-highest text-on-surface'
              }">
                ${isBulk ? '⚖ Granel' : 'Unidad'}
              </span>
              <h4 class="font-bold text-on-surface text-body-md truncate">${item.name}</h4>
            </div>
            
            <p class="text-body-sm text-on-surface-variant mt-0.5">
              ${isBulk 
                ? `<span class="font-semibold text-primary">${item.weightGrams}g</span> × ${this.formatMoney(item.unitPrice)}/kg` 
                : `${this.formatMoney(item.unitPrice)} c/u`}
            </p>

            <!-- Stepper rápido -->
            <div class="flex items-center gap-2 mt-2">
              <div class="inline-flex items-center bg-surface-container-lowest border border-surface-container-highest rounded-lg overflow-hidden shadow-xs">
                <button class="w-7 h-7 flex items-center justify-center text-on-surface hover:bg-surface-container-low active:scale-95 transition-all" onclick="posApp.updateItemQuantity(${idx}, -1)" title="Disminuir">
                  <span class="material-symbols-outlined text-[16px]">remove</span>
                </button>
                <span class="w-8 text-center text-label-md font-bold tabular-nums">
                  ${isBulk ? (item.weightGrams + 'g') : item.quantity}
                </span>
                <button class="w-7 h-7 flex items-center justify-center text-on-surface hover:bg-surface-container-low active:scale-95 transition-all" onclick="posApp.updateItemQuantity(${idx}, 1)" title="Aumentar">
                  <span class="material-symbols-outlined text-[16px]">add</span>
                </button>
              </div>

              ${isBulk ? `
                <button class="text-xs text-primary font-semibold hover:underline flex items-center gap-0.5" onclick="posApp.reweighItem(${idx})">
                  <span class="material-symbols-outlined text-[13px]">scale</span> Re-pesar
                </button>
              ` : ''}
            </div>
          </div>

          <div class="text-right flex flex-col justify-between items-end self-stretch">
            <span class="text-headline-md font-extrabold text-on-surface tabular-nums">
              ${this.formatMoney(item.subtotal)}
            </span>
            <button class="p-1 text-outline hover:text-error rounded-md transition-colors" onclick="posApp.removeItem(${idx})" title="Eliminar ítem">
              <span class="material-symbols-outlined text-[18px]">delete</span>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  reweighItem(idx) {
    const item = this.cart[idx];
    const prod = this.products.find(p => p.id === item.id);
    if (!prod) return;
    this.removeItem(idx);
    this.openScaleModal(prod, item.weightGrams);
  }

  applyDiscount(percent) {
    this.discountPercent = percent;
    this.renderCart();
    this.showQuickToast(percent > 0 ? `Descuento ${percent}% aplicado` : 'Descuento quitado');
  }

  // MODAL BALANZA DIGITAL
  openScaleModal(product, initialGrams = 350) {
    this.weighingProduct = product;
    this.scaleWeightGrams = initialGrams;

    const modal = document.getElementById('scaleModal');
    const titleEl = document.getElementById('scaleModalProductName');
    const priceEl = document.getElementById('scaleModalBasePrice');
    
    if (titleEl) titleEl.textContent = product.name;
    if (priceEl) priceEl.textContent = `${this.formatMoney(product.price)} /kg`;

    this.updateScaleDisplay();
    if (modal) modal.classList.remove('hidden');
  }

  closeScaleModal() {
    const modal = document.getElementById('scaleModal');
    if (modal) modal.classList.add('hidden');
    this.weighingProduct = null;
  }

  setScaleWeight(grams) {
    this.scaleWeightGrams = Math.max(0, grams);
    this.updateScaleDisplay();
  }

  appendScaleDigit(digit) {
    let str = this.scaleWeightGrams.toString();
    if (str === '0') str = '';
    str += digit;
    if (str.length > 5) str = str.slice(0, 5); // máx 99.999g
    this.scaleWeightGrams = parseInt(str, 10) || 0;
    this.updateScaleDisplay();
  }

  clearScaleWeight() {
    this.scaleWeightGrams = 0;
    this.updateScaleDisplay();
  }

  tareScale() {
    this.scaleWeightGrams = 0;
    this.updateScaleDisplay();
    this.showQuickToast('Balanza Tarada a 0.000 kg');
  }

  updateScaleDisplay() {
    const weightEl = document.getElementById('scaleWeightDisplay');
    const priceEl = document.getElementById('scalePriceDisplay');
    const btnLabelEl = document.getElementById('scaleBtnLabel');

    if (!this.weighingProduct) return;

    const kilos = this.scaleWeightGrams / 1000;
    const subtotal = Math.round(this.weighingProduct.price * kilos);

    if (weightEl) weightEl.textContent = this.scaleWeightGrams;
    if (priceEl) priceEl.textContent = this.formatMoney(subtotal);
    if (btnLabelEl) btnLabelEl.textContent = `Agregar a la Venta (${this.formatMoney(subtotal)})`;
  }

  confirmScaleAdd() {
    if (!this.weighingProduct) return;
    if (this.scaleWeightGrams <= 0) {
      alert('Por favor coloque peso en la balanza o seleccione los gramos.');
      return;
    }
    this.addToCartBulk(this.weighingProduct, this.scaleWeightGrams);
  }

  // MODAL DE COBRO (CHECKOUT)
  openCheckoutModal() {
    if (this.cart.length === 0) {
      alert('El ticket está vacío. Agrega productos para cobrar.');
      return;
    }

    const { total } = this.calculateTotals();
    const modal = document.getElementById('checkoutModal');
    const totalEl = document.getElementById('checkoutTotalAmount');
    const ticketNumEl = document.getElementById('checkoutTicketNumber');
    
    if (totalEl) totalEl.textContent = this.formatMoney(total);
    if (ticketNumEl) ticketNumEl.textContent = this.currentOrderNumber;

    this.selectPaymentMethod(this.paymentMethod);
    this.setCashAmount(total);

    if (modal) modal.classList.remove('hidden');
  }

  closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (modal) modal.classList.add('hidden');
  }

  selectPaymentMethod(method) {
    this.paymentMethod = method;
    
    // Toggle active styles on payment buttons
    const methods = ['cash', 'mercadopago', 'card', 'transfer'];
    methods.forEach(m => {
      const btn = document.getElementById(`payBtn_${m}`);
      if (btn) {
        if (m === method) {
          btn.classList.add('border-primary', 'bg-primary/5', 'text-primary');
          btn.classList.remove('border-surface-container-highest', 'bg-surface-container-lowest');
        } else {
          btn.classList.remove('border-primary', 'bg-primary/5', 'text-primary');
          btn.classList.add('border-surface-container-highest', 'bg-surface-container-lowest');
        }
      }
    });

    const cashSection = document.getElementById('cashPaymentSection');
    const qrSection = document.getElementById('qrPaymentSection');
    const cardSection = document.getElementById('cardPaymentSection');
    const transferSection = document.getElementById('transferPaymentSection');

    if (cashSection) cashSection.classList.toggle('hidden', method !== 'cash');
    if (qrSection) qrSection.classList.toggle('hidden', method !== 'mercadopago');
    if (cardSection) cardSection.classList.toggle('hidden', method !== 'card');
    if (transferSection) transferSection.classList.toggle('hidden', method !== 'transfer');
  }

  setCashAmount(amount) {
    const { total } = this.calculateTotals();
    this.cashAmountGiven = amount;
    
    const input = document.getElementById('cashGivenInput');
    if (input) input.value = amount;

    const changeEl = document.getElementById('cashChangeAmount');
    const change = Math.max(0, this.cashAmountGiven - total);
    if (changeEl) {
      changeEl.textContent = this.formatMoney(change);
      if (this.cashAmountGiven < total) {
        changeEl.textContent = `Faltan ${this.formatMoney(total - this.cashAmountGiven)}`;
        changeEl.classList.add('text-error');
        changeEl.classList.remove('text-secondary');
      } else {
        changeEl.classList.remove('text-error');
        changeEl.classList.add('text-secondary');
      }
    }
  }

  // FINALIZAR VENTA & ACTUALIZAR MÁS VENDIDOS DINÁMICAMENTE
  finalizeSale(sendWhatsApp = false) {
    const { total, totalItems } = this.calculateTotals();
    const phoneInput = document.getElementById('customerPhoneInput');
    const customerPhone = phoneInput ? phoneInput.value.trim() : '';

    // 1. ACTUALIZAR ventasCount DE CADA PRODUCTO (CRUCIAL PARA "MÁS VENDIDOS" DINÁMICO)
    this.cart.forEach(item => {
      const prod = this.products.find(p => p.id === item.id);
      if (prod) {
        prod.salesCount = (prod.salesCount || 0) + (item.type === 'unit' ? item.quantity : 1);
        // Descontar stock
        if (item.type === 'unit') {
          prod.stock = Math.max(0, prod.stock - item.quantity);
        } else {
          prod.stock = Math.max(0, Math.round((prod.stock - item.kilos) * 10) / 10);
        }
      }
    });

    // Guardar productos con nuevos rankings y stock
    this.saveProducts();

    // 2. Registrar en Historial de Ventas
    const paymentNames = {
      cash: 'Efectivo',
      mercadopago: 'Mercado Pago / QR',
      card: 'Tarjeta Débito/Crédito',
      transfer: 'Transferencia'
    };

    const newSale = {
      id: this.currentOrderNumber,
      date: new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }),
      items: this.cart.map(i => ({
        name: i.name,
        qtyStr: i.type === 'bulk' ? `${i.weightGrams}g` : `${i.quantity} un`,
        subtotal: i.subtotal
      })),
      total: total,
      payment: paymentNames[this.paymentMethod] || 'Efectivo',
      phone: customerPhone
    };

    this.salesHistory.unshift(newSale);
    this.saveSalesHistory();

    // 3. Actualizar arqueo de caja
    if (this.paymentMethod === 'cash') {
      this.cashRegister.cashSales += total;
    } else {
      this.cashRegister.digitalSales += total;
    }
    this.saveCashRegister();

    // 4. Si se seleccionó WhatsApp, armar texto y abrir enlace
    if (sendWhatsApp && customerPhone) {
      this.openWhatsAppTicket(newSale, customerPhone);
    }

    // 5. Mostrar Modal de Ticket / Éxito
    this.closeCheckoutModal();
    this.openSuccessModal(newSale);

    // 6. Resetear carrito y generar nuevo ticket
    this.cart = [];
    this.discountPercent = 0;
    this.saveCart();
    this.currentOrderNumber = this.generateOrderNumber();
    this.renderCart();

    // 7. Re-renderizar productos inmediatamente para reflejar el nuevo orden de "Más Vendidos"
    this.renderProducts();
  }

  openWhatsAppTicket(sale, phone) {
    let cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone.startsWith('549') && cleanPhone.length === 10) {
      cleanPhone = '549' + cleanPhone; // Argentina default
    }

    let msg = `🌿 *NATURAL MARKET & PET SHOP*\n`;
    msg += `🧾 *Comprobante de Compra ${sale.id}*\n`;
    msg += `📅 ${new Date().toLocaleDateString('es-AR')} - ${sale.date}\n`;
    msg += `👤 Cajero: Franco R. - Caja 01\n`;
    msg += `--------------------------------\n`;
    sale.items.forEach(i => {
      msg += `• ${i.name} (${i.qtyStr}): ${this.formatMoney(i.subtotal)}\n`;
    });
    msg += `--------------------------------\n`;
    msg += `💰 *TOTAL PAGADO: ${this.formatMoney(sale.total)}*\n`;
    msg += `💳 Método: ${sale.payment}\n\n`;
    msg += `¡Muchas gracias por elegirnos! 🌱🐶🐱\n`;
    msg += `_Atención personalizada & Productos Naturales_`;

    const url = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }

  openSuccessModal(sale) {
    const modal = document.getElementById('successModal');
    const saleIdEl = document.getElementById('successSaleId');
    const totalEl = document.getElementById('successSaleTotal');
    const itemsEl = document.getElementById('successSaleItems');

    if (saleIdEl) saleIdEl.textContent = sale.id;
    if (totalEl) totalEl.textContent = this.formatMoney(sale.total);
    if (itemsEl) {
      itemsEl.innerHTML = sale.items.map(i => `
        <div class="flex justify-between py-1 text-body-sm border-b border-surface-container-highest/60">
          <span>${i.name} (${i.qtyStr})</span>
          <span class="font-bold tabular-nums">${this.formatMoney(i.subtotal)}</span>
        </div>
      `).join('');
    }

    if (modal) modal.classList.remove('hidden');
  }

  closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) modal.classList.add('hidden');
  }

  // BÚSQUEDA POR VOZ (Web Speech Recognition API)
  initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.speechRecognition = new SpeechRecognition();
      this.speechRecognition.lang = 'es-AR'; // Español Argentina
      this.speechRecognition.continuous = false;
      this.speechRecognition.interimResults = false;

      this.speechRecognition.onstart = () => {
        this.isListening = true;
        this.updateVoiceButton(true);
        this.showQuickToast('🎙️ Escuchando... Di el nombre del producto');
      };

      this.speechRecognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log('Voz reconocida:', transcript);
        this.searchQuery = transcript;
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = transcript;
        this.renderProducts();
        this.showQuickToast(`Buscando: "${transcript}"`);
      };

      this.speechRecognition.onerror = (event) => {
        console.warn('Error en reconocimiento de voz:', event.error);
        this.isListening = false;
        this.updateVoiceButton(false);
      };

      this.speechRecognition.onend = () => {
        this.isListening = false;
        this.updateVoiceButton(false);
      };
    } else {
      console.log('Web Speech API no disponible en este navegador');
    }
  }

  toggleVoiceSearch() {
    if (!this.speechRecognition) {
      alert('La búsqueda por voz requiere un navegador compatible con Web Speech API (como Chrome, Edge o Safari).');
      return;
    }

    if (this.isListening) {
      this.speechRecognition.stop();
    } else {
      try {
        this.speechRecognition.start();
      } catch (e) {
        console.error(e);
      }
    }
  }

  updateVoiceButton(listening) {
    const btn = document.getElementById('voiceSearchBtn');
    if (!btn) return;
    if (listening) {
      btn.classList.add('bg-primary', 'text-on-primary', 'animate-pulse');
      btn.classList.remove('text-outline');
    } else {
      btn.classList.remove('bg-primary', 'text-on-primary', 'animate-pulse');
      btn.classList.add('text-outline');
    }
  }

  // ESCÁNER DE CÓDIGO DE BARRAS & QR
  openScannerModal() {
    const modal = document.getElementById('scannerModal');
    if (modal) modal.classList.remove('hidden');

    // Intentar iniciar cámara
    const video = document.getElementById('scannerVideo');
    if (video && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
          this.cameraStream = stream;
          video.srcObject = stream;
          video.play();
        })
        .catch(err => {
          console.warn('Acceso a cámara no disponible:', err);
        });
    }
  }

  closeScannerModal() {
    const modal = document.getElementById('scannerModal');
    if (modal) modal.classList.add('hidden');

    if (this.cameraStream) {
      this.cameraStream.getTracks().forEach(track => track.stop());
      this.cameraStream = null;
    }
  }

  simulateBarcodeScan(barcode) {
    const prod = this.products.find(p => p.barcode === barcode);
    this.closeScannerModal();

    if (prod) {
      this.showQuickToast(`Escaneado: ${prod.name}`);
      this.handleProductClick(prod.id);
    } else {
      alert(`Código ${barcode} no encontrado en inventario.`);
    }
  }

  // NAVEGACIÓN ENTRE VISTAS
  switchView(viewName) {
    this.currentView = viewName;

    const views = ['pos', 'stock', 'cierre', 'historial'];
    views.forEach(v => {
      const el = document.getElementById(`view_${v}`);
      const navBtn = document.getElementById(`navBtn_${v}`);
      const bottomBtn = document.getElementById(`bottomNavBtn_${v}`);

      if (el) el.classList.toggle('hidden', v !== viewName);
      
      // Update top/bottom navigation buttons
      [navBtn, bottomBtn].forEach(btn => {
        if (btn) {
          if (v === viewName) {
            btn.classList.add('bg-primary', 'text-on-primary');
            btn.classList.remove('text-on-surface-variant', 'hover:bg-surface-container-low');
          } else {
            btn.classList.remove('bg-primary', 'text-on-primary');
            btn.classList.add('text-on-surface-variant', 'hover:bg-surface-container-low');
          }
        }
      });
    });

    if (viewName === 'stock') this.renderStockTable();
    if (viewName === 'cierre') this.renderCierreView();
    if (viewName === 'historial') this.renderHistorialView();
  }

  // VISTA AJUSTE DE PRECIOS & STOCK
  renderStockTable() {
    const tableBody = document.getElementById('stockTableBody');
    const mobileContainer = document.getElementById('stockMobileCards');

    // 1. Render Vista Móvil: Tarjetas compactas en 2 Líneas
    if (mobileContainer) {
      mobileContainer.innerHTML = this.products.map(p => `
        <div class="bg-surface-container-lowest p-2.5 rounded-2xl border border-surface-container-highest shadow-xs flex items-center gap-3 transition-all hover:border-outline-variant">
          <!-- Foto que abarca las 2 líneas -->
          <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-surface-container-low shadow-inner">
            <img src="${p.image}" class="w-full h-full object-cover" alt="${p.name}"/>
          </div>

          <!-- Contenedor Derecho: 2 Líneas de datos -->
          <div class="flex-1 min-w-0 flex flex-col justify-between gap-1.5">
            
            <!-- LÍNEA SUPERIOR: "PRODUCTO" | "TIPO" | "PRECIO" -->
            <div class="flex items-center justify-between gap-2 min-w-0">
              <div class="min-w-0 flex-1 truncate">
                <h4 class="font-extrabold text-on-surface text-[14px] leading-tight truncate">${p.name}</h4>
                <span class="text-[10px] text-outline font-mono block">${p.barcode}</span>
              </div>

              <span class="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                p.type === 'bulk' ? 'bg-primary-fixed text-on-primary-fixed' : 'bg-surface-container-highest text-on-surface'
              }">
                ${p.type === 'bulk' ? 'Granel' : 'Unidad'}
              </span>

              <div class="shrink-0 flex items-center gap-0.5">
                <span class="text-xs text-outline font-bold">$</span>
                <input 
                  type="number" 
                  value="${p.price}" 
                  class="w-20 px-1.5 py-0.5 bg-surface-container-low border border-surface-container-highest rounded-lg font-black text-right tabular-nums text-primary text-sm focus:border-primary focus:ring-1 focus:ring-primary" 
                  onchange="posApp.updateProductPrice('${p.id}', this.value)"
                />
              </div>
            </div>

            <!-- LÍNEA INFERIOR: "STOCK" | "VENTAS" | "ACCIONES" (sin nombres de etiquetas) -->
            <div class="flex items-center justify-between gap-2 pt-1 border-t border-surface-container-high/60">
              
              <!-- Control de Stock (sin la palabra "Stock") -->
              <div class="flex items-center gap-1 bg-surface-container-low border border-surface-container-highest rounded-lg px-1 py-0.5 shadow-2xs">
                <button class="w-6 h-6 rounded bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center text-xs font-bold active:scale-95" onclick="posApp.adjustProductStock('${p.id}', -1)">-</button>
                <span class="w-9 text-center font-extrabold tabular-nums text-xs text-on-surface">${p.stock}</span>
                <button class="w-6 h-6 rounded bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center text-xs font-bold active:scale-95" onclick="posApp.adjustProductStock('${p.id}', 1)">+</button>
              </div>

              <!-- Indicador de Ventas (sin la palabra "Ventas") -->
              <span class="text-secondary font-black text-xs px-2 py-0.5 rounded-md bg-secondary-container/50 flex items-center gap-0.5" title="${p.salesCount || 0} ventas">
                🔥 ${p.salesCount || 0}
              </span>

              <!-- Acciones: Editar y Eliminar (sin la palabra "Acciones") -->
              <div class="flex items-center gap-1">
                <button onclick="posApp.openProductModal('${p.id}')" class="w-7 h-7 flex items-center justify-center text-primary bg-primary-fixed/40 hover:bg-primary-fixed rounded-lg transition-colors active:scale-95" title="Editar producto">
                  <span class="material-symbols-outlined text-[16px]">edit</span>
                </button>
                <button onclick="posApp.deleteProduct('${p.id}')" class="w-7 h-7 flex items-center justify-center text-outline hover:text-error bg-surface-container-high hover:bg-error-container/40 rounded-lg transition-colors active:scale-95" title="Eliminar producto">
                  <span class="material-symbols-outlined text-[16px]">delete</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      `).join('');
    }

    // 2. Render Vista Desktop: Tabla Tradicional
    if (tableBody) {
      tableBody.innerHTML = this.products.map(p => `
        <tr class="border-b border-surface-container-highest hover:bg-surface-container-low/50 transition-colors">
          <td class="p-3">
            <div class="flex items-center gap-2.5">
              <img src="${p.image}" class="w-10 h-10 rounded-lg object-cover" alt="${p.name}"/>
              <div>
                <span class="font-bold text-on-surface block text-body-md">${p.name}</span>
                <span class="text-xs text-outline font-mono">${p.barcode}</span>
              </div>
            </div>
          </td>
          <td class="p-3">
            <span class="px-2 py-0.5 rounded-full text-xs font-bold ${
              p.type === 'bulk' ? 'bg-primary-fixed text-on-primary-fixed' : 'bg-surface-container-highest text-on-surface'
            }">
              ${p.type === 'bulk' ? 'Granel' : 'Unidad'}
            </span>
          </td>
          <td class="p-3">
            <div class="flex items-center gap-1.5">
              <span class="text-outline font-bold">$</span>
              <input type="number" value="${p.price}" class="w-24 px-2 py-1 bg-surface-container-lowest border border-surface-container-highest rounded-lg font-bold tabular-nums text-on-surface text-sm focus:border-primary focus:ring-1 focus:ring-primary" onchange="posApp.updateProductPrice('${p.id}', this.value)"/>
            </div>
          </td>
          <td class="p-3">
            <div class="flex items-center gap-1.5">
              <button class="w-6 h-6 rounded bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center text-xs font-bold" onclick="posApp.adjustProductStock('${p.id}', -1)">-</button>
              <span class="w-12 text-center font-bold tabular-nums text-sm">${p.stock}</span>
              <button class="w-6 h-6 rounded bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center text-xs font-bold" onclick="posApp.adjustProductStock('${p.id}', 1)">+</button>
            </div>
          </td>
          <td class="p-3 text-center">
            <span class="text-secondary font-bold text-sm">🔥 ${p.salesCount || 0}</span>
          </td>
          <td class="p-3 text-right">
            <div class="flex items-center justify-end gap-1.5">
              <button onclick="posApp.openProductModal('${p.id}')" class="p-1.5 text-primary hover:bg-primary-fixed/40 rounded-lg transition-colors" title="Editar producto completo">
                <span class="material-symbols-outlined text-[18px]">edit</span>
              </button>
              <button onclick="posApp.deleteProduct('${p.id}')" class="p-1.5 text-outline hover:text-error hover:bg-error-container/40 rounded-lg transition-colors" title="Eliminar producto">
                <span class="material-symbols-outlined text-[18px]">delete</span>
              </button>
            </div>
          </td>
        </tr>
      `).join('');
    }
  }

  // GESTIÓN COMPLETA DE PRODUCTOS (CREAR, EDITAR, ELIMINAR)
  openProductModal(productId = null) {
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('productModalTitle');
    const form = document.getElementById('productForm');
    if (!modal || !form) return;

    form.reset();
    document.getElementById('productEditId').value = productId || '';

    if (productId) {
      const prod = this.products.find(p => p.id === productId);
      if (prod) {
        modalTitle.textContent = 'Editar Producto';
        document.getElementById('prodName').value = prod.name;
        document.getElementById('prodDesc').value = prod.desc || '';
        document.getElementById('prodCategory').value = prod.category;
        document.getElementById('prodType').value = prod.type;
        document.getElementById('prodUnit').value = prod.unit;
        document.getElementById('prodPrice').value = prod.price;
        document.getElementById('prodStock').value = prod.stock;
        document.getElementById('prodBarcode').value = prod.barcode;
        document.getElementById('prodImage').value = prod.image || '';
      }
    } else {
      modalTitle.textContent = 'Crear Nuevo Producto';
      document.getElementById('prodBarcode').value = this.generateBarcode();
      document.getElementById('prodType').value = 'unit';
      document.getElementById('prodUnit').value = 'un';
    }

    modal.classList.remove('hidden');
  }

  closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) modal.classList.add('hidden');
  }

  saveProduct(e) {
    e.preventDefault();
    const editId = document.getElementById('productEditId').value;
    const name = document.getElementById('prodName').value.trim();
    const desc = document.getElementById('prodDesc').value.trim();
    const category = document.getElementById('prodCategory').value;
    const type = document.getElementById('prodType').value;
    const unit = document.getElementById('prodUnit').value.trim() || (type === 'bulk' ? 'kg' : 'un');
    const price = parseInt(document.getElementById('prodPrice').value, 10) || 0;
    const stock = parseFloat(document.getElementById('prodStock').value) || 0;
    let barcode = document.getElementById('prodBarcode').value.trim() || this.generateBarcode();
    let image = document.getElementById('prodImage').value.trim();

    // Imagen temática por defecto si está vacía
    if (!image) {
      const categoryImages = {
        granel: 'https://images.unsplash.com/photo-1508061252445-5350f3ab0a55?auto=format&fit=crop&w=400&q=80',
        mascotas: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=400&q=80',
        dietetica: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80',
        accesorios: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=400&q=80',
        suplementos: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80'
      };
      image = categoryImages[category] || categoryImages.dietetica;
    }

    if (editId) {
      // Actualizar producto existente
      const prod = this.products.find(p => p.id === editId);
      if (prod) {
        prod.name = name;
        prod.desc = desc;
        prod.category = category;
        prod.type = type;
        prod.unit = unit;
        prod.price = price;
        prod.stock = stock;
        prod.barcode = barcode;
        prod.image = image;
        this.showQuickToast(`Producto modificado: ${name}`);
      }
    } else {
      // Crear nuevo producto en inventario
      const newProd = {
        id: `prod-${Date.now()}`,
        name,
        desc,
        category,
        type,
        unit,
        price,
        stock,
        barcode,
        salesCount: 0,
        image
      };
      this.products.unshift(newProd);
      this.showQuickToast(`¡Nuevo producto creado!: ${name}`);
    }

    this.saveProducts();
    this.renderProducts();
    this.renderStockTable();
    this.closeProductModal();
  }

  deleteProduct(id) {
    const prod = this.products.find(p => p.id === id);
    if (!prod) return;
    if (confirm(`¿Estás seguro de que deseas eliminar permanentemente "${prod.name}" del catálogo?`)) {
      this.products = this.products.filter(p => p.id !== id);
      this.saveProducts();
      this.renderProducts();
      this.renderStockTable();
      this.showQuickToast(`Producto eliminado: ${prod.name}`);
    }
  }

  generateBarcode() {
    return '779' + Math.floor(1000000000 + Math.random() * 9000000000).toString();
  }

  // VENTA RÁPIDA / ÍTEM PERSONALIZADO SOBRE LA MARCHA (ESTILO SQUARE)
  openQuickItemModal() {
    const modal = document.getElementById('quickItemModal');
    if (!modal) return;
    document.getElementById('quickItemForm').reset();
    document.getElementById('quickItemQty').value = '1';
    modal.classList.remove('hidden');
  }

  closeQuickItemModal() {
    const modal = document.getElementById('quickItemModal');
    if (modal) modal.classList.add('hidden');
  }

  addQuickItem(e) {
    e.preventDefault();
    const name = document.getElementById('quickItemName').value.trim() || 'Ítem Personalizado';
    const type = document.getElementById('quickItemType').value; // 'unit' o 'bulk'
    const qty = parseFloat(document.getElementById('quickItemQty').value) || 1;
    const price = parseInt(document.getElementById('quickItemPrice').value, 10) || 0;

    if (type === 'bulk') {
      // qty son KILOS (ej: 5 para 5kg)
      const weightGrams = Math.round(qty * 1000);
      const subtotal = Math.round(price * qty);

      this.cart.push({
        id: `custom-${Date.now()}`,
        name: name,
        type: 'bulk',
        unitPrice: price,
        weightGrams: weightGrams,
        kilos: qty,
        unit: 'kg',
        subtotal: subtotal,
        barcode: 'MANUAL'
      });
      this.showQuickToast(`Agregado a la venta: ${name} (${qty} kg)`);
    } else {
      // qty son UNIDADES
      const subtotal = Math.round(price * qty);
      this.cart.push({
        id: `custom-${Date.now()}`,
        name: name,
        type: 'unit',
        unitPrice: price,
        quantity: qty,
        unit: 'un',
        subtotal: subtotal,
        barcode: 'MANUAL'
      });
      this.showQuickToast(`Agregado a la venta: ${name} (${qty} un)`);
    }

    this.saveCart();
    this.renderCart();
    this.closeQuickItemModal();
  }

  updateProductPrice(id, newPrice) {
    const prod = this.products.find(p => p.id === id);
    if (prod) {
      prod.price = Math.max(0, parseInt(newPrice, 10) || 0);
      this.saveProducts();
      this.renderProducts();
      this.showQuickToast(`Precio actualizado: ${prod.name}`);
    }
  }

  adjustProductStock(id, delta) {
    const prod = this.products.find(p => p.id === id);
    if (prod) {
      prod.stock = Math.max(0, prod.stock + delta);
      this.saveProducts();
      this.renderStockTable();
    }
  }

  applyBatchPriceIncrease(percentage) {
    if (!confirm(`¿Aplicar un aumento del ${percentage}% a todos los productos del inventario?`)) return;
    
    this.products.forEach(p => {
      p.price = Math.round(p.price * (1 + percentage / 100));
    });

    this.saveProducts();
    this.renderStockTable();
    this.renderProducts();
    this.showQuickToast(`Precios actualizados con +${percentage}%`);
  }

  // VISTA CIERRE DE CAJA
  renderCierreView() {
    const initialEl = document.getElementById('cierreInitialCash');
    const cashSalesEl = document.getElementById('cierreCashSales');
    const digitalSalesEl = document.getElementById('cierreDigitalSales');
    const totalDrawerEl = document.getElementById('cierreTotalDrawer');

    const totalCashInDrawer = this.cashRegister.initialCash + this.cashRegister.cashSales;

    if (initialEl) initialEl.textContent = this.formatMoney(this.cashRegister.initialCash);
    if (cashSalesEl) cashSalesEl.textContent = this.formatMoney(this.cashRegister.cashSales);
    if (digitalSalesEl) digitalSalesEl.textContent = this.formatMoney(this.cashRegister.digitalSales);
    if (totalDrawerEl) totalDrawerEl.textContent = this.formatMoney(totalCashInDrawer);

    this.calculateArqueoDifference();
  }

  calculateArqueoDifference() {
    const countedInput = document.getElementById('cierreCashCountedInput');
    const diffEl = document.getElementById('cierreDifferenceAmount');
    if (!countedInput || !diffEl) return;

    const counted = parseInt(countedInput.value, 10) || 0;
    const expected = this.cashRegister.initialCash + this.cashRegister.cashSales;
    const diff = counted - expected;

    if (diff === 0) {
      diffEl.textContent = 'Caja Cuadrada ($0)';
      diffEl.className = 'text-headline-md font-extrabold text-secondary';
    } else if (diff > 0) {
      diffEl.textContent = `Sobrante: +${this.formatMoney(diff)}`;
      diffEl.className = 'text-headline-md font-extrabold text-secondary';
    } else {
      diffEl.textContent = `Faltante: ${this.formatMoney(diff)}`;
      diffEl.className = 'text-headline-md font-extrabold text-error';
    }
  }

  exportCierreWhatsApp() {
    const expected = this.cashRegister.initialCash + this.cashRegister.cashSales;
    const countedInput = document.getElementById('cierreCashCountedInput');
    const counted = countedInput ? (parseInt(countedInput.value, 10) || expected) : expected;

    let msg = `📊 *CIERRE DE CAJA - NATURAL MARKET & PET*\n`;
    msg += `📅 ${new Date().toLocaleDateString('es-AR')} - ${new Date().toLocaleTimeString('es-AR')}\n`;
    msg += `👤 Cajero: Franco R. • Turno Mañana\n`;
    msg += `--------------------------------\n`;
    msg += `💵 Fondo Inicial: ${this.formatMoney(this.cashRegister.initialCash)}\n`;
    msg += `🛒 Ventas Efectivo: ${this.formatMoney(this.cashRegister.cashSales)}\n`;
    msg += `📱 Ventas Digitales (QR/Tarjetas): ${this.formatMoney(this.cashRegister.digitalSales)}\n`;
    msg += `💰 Total Facturado: ${this.formatMoney(this.cashRegister.cashSales + this.cashRegister.digitalSales)}\n`;
    msg += `--------------------------------\n`;
    msg += `📦 Efectivo Esperado en Cajón: ${this.formatMoney(expected)}\n`;
    msg += `🔢 Efectivo Contado por Cajero: ${this.formatMoney(counted)}\n`;
    msg += `⚖️ Diferencia: ${counted >= expected ? '+' : ''}${this.formatMoney(counted - expected)}\n\n`;
    msg += `_Cierre generado desde Terminal PWA_`;

    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }

  // VISTA HISTORIAL DE VENTAS
  renderHistorialView() {
    const listEl = document.getElementById('historialSalesList');
    if (!listEl) return;

    if (this.salesHistory.length === 0) {
      listEl.innerHTML = `<p class="p-8 text-center text-outline">No hay ventas registradas aún.</p>`;
      return;
    }

    listEl.innerHTML = this.salesHistory.map(sale => `
      <div class="bg-surface-container-lowest p-4 rounded-xl border border-surface-container-highest shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div class="flex items-center gap-2">
            <span class="font-bold text-primary text-headline-md">${sale.id}</span>
            <span class="text-xs text-outline">${sale.date}</span>
            <span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-surface-container-high text-on-surface">${sale.payment}</span>
          </div>
          <p class="text-body-sm text-on-surface-variant mt-1">
            ${sale.items.map(i => `${i.name} (${i.qtyStr})`).join(', ')}
          </p>
        </div>

        <div class="flex items-center gap-3 justify-between sm:justify-end">
          <span class="text-headline-lg font-bold text-on-surface tabular-nums">${this.formatMoney(sale.total)}</span>
          <button class="px-3 py-1.5 rounded-lg bg-secondary text-on-secondary font-bold text-xs flex items-center gap-1 hover:bg-secondary/90 transition-colors" onclick="posApp.reopenWhatsAppTicket('${sale.id}')">
            <span class="material-symbols-outlined text-sm">chat</span> WhatsApp
          </button>
        </div>
      </div>
    `).join('');
  }

  reopenWhatsAppTicket(saleId) {
    const sale = this.salesHistory.find(s => s.id === saleId);
    if (!sale) return;
    const phone = prompt('Ingrese teléfono del cliente para WhatsApp (ej: 1123456789):', sale.phone || '');
    if (phone) {
      this.openWhatsAppTicket(sale, phone);
    }
  }

  // EVENTOS Y SHORTCUTS
  bindEvents() {
    // Teclas rápidas para mostrador
    window.addEventListener('keydown', (e) => {
      // Si está en modal o editando texto no interceptar
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        if (e.key === 'Enter' && document.activeElement.id === 'searchInput') {
          // Si hay 1 solo resultado, agregarlo de inmediato
          const filtered = this.getFilteredProducts();
          if (filtered.length === 1) {
            this.handleProductClick(filtered[0].id);
            this.clearSearch();
          }
        }
        return;
      }

      if (e.key === 'F1' || e.key === ' ') { // Cobrar rápido
        e.preventDefault();
        this.openCheckoutModal();
      } else if (e.key === 'Escape') {
        this.closeScaleModal();
        this.closeCheckoutModal();
        this.closeScannerModal();
        this.closeSuccessModal();
      }
    });

    // Filtros de categoría chips
    document.querySelectorAll('[data-category-chip]').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('[data-category-chip]').forEach(c => {
          c.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
          c.classList.add('bg-surface-container-lowest', 'text-on-surface', 'border', 'border-surface-container-highest');
        });
        chip.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');
        chip.classList.remove('bg-surface-container-lowest', 'text-on-surface', 'border', 'border-surface-container-highest');

        this.currentCategory = chip.getAttribute('data-category-chip');
        this.renderProducts();
      });
    });

    // Input buscador
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.renderProducts();
      });
    }
  }

  clearSearch() {
    this.searchQuery = '';
    const input = document.getElementById('searchInput');
    if (input) input.value = '';
    this.renderProducts();
  }

  showQuickToast(text) {
    let toast = document.getElementById('quickToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'quickToast';
      toast.className = 'fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-inverse-surface text-inverse-on-surface px-4 py-2 rounded-xl shadow-lg text-body-sm font-semibold flex items-center gap-2 pointer-events-none transition-all duration-200 opacity-0 transform -translate-y-2';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span class="w-2 h-2 rounded-full bg-secondary"></span> ${text}`;
    toast.classList.remove('opacity-0', '-translate-y-2');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.classList.add('opacity-0', '-translate-y-2');
    }, 2200);
  }
}

// Inicialización global
window.posApp = new NaturalPOSApp();
