const generateCode = () => 'FK-' + Math.floor(Math.random() * 9000 + 1000);

// Products with verified matching images + bilingual names/descriptions
const productsData = [
    {
        id: 1,
        name: { ar: 'تيشيرت أوفر سايز', en: 'Oversized T-Shirt' },
        category: 'رجالي',
        price: 450,
        img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
        desc: {
            ar: 'تيشيرت قطن 100% مريح جداً للصيف.',
            en: '100% cotton oversized t-shirt, very comfortable for summer.'
        },
        variants: [
            { color: '#ffffff', name: { ar: 'أبيض', en: 'White' }, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80' },
            { color: '#000000', name: { ar: 'أسود', en: 'Black' }, img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80' }
        ]
    },
    {
        id: 2,
        name: { ar: 'جاكيت جينز كلاسيك', en: 'Classic Denim Jacket' },
        category: 'حريمي',
        price: 850,
        img: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=600&q=80',
        desc: {
            ar: 'جاكيت جينز بجودة عالية وتصميم كلاسيكي.',
            en: 'High-quality classic denim jacket with timeless design.'
        },
        variants: [
            { color: '#3b5998', name: { ar: 'أزرق', en: 'Blue' }, img: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=600&q=80' },
            { color: '#000000', name: { ar: 'أسود', en: 'Black' }, img: 'https://n.nordstrommedia.com/it/979ff089-66a1-4233-9619-606155015903.jpeg?h=368&w=240&dpr=2' }
        ]
    },
    {
        id: 3,
        name: { ar: 'حذاء رياضي مريح', en: 'Comfortable Sports Shoes' },
        category: 'أحذية',
        price: 1200,
        img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
        desc: {
            ar: 'حذاء رياضي خفيف الوزن للركض والاستخدام اليومي.',
            en: 'Lightweight sports shoes for running and everyday use.'
        },
        variants: [
            { color: '#ff0000', name: { ar: 'أحمر', en: 'Red' }, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
            { color: '#000000', name: { ar: 'أسود', en: 'Black' }, img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80' }
        ]
    },
    {
        id: 4,
        name: { ar: 'نظارة شمسية مودرن', en: 'Modern Sunglasses' },
        category: 'إكسسوارات',
        price: 350,
        img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
        desc: {
            ar: 'نظارة شمسية أنيقة مع عدسات تحمي من الأشعة فوق البنفسجية.',
            en: 'Stylish sunglasses with UV-protective lenses.'
        },
        variants: [
            { color: '#c9a227', name: { ar: 'ذهبي', en: 'Gold' }, img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80' },
            { color: '#000000', name: { ar: 'أسود', en: 'Black' }, img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80' }
        ]
    },
    {
        id: 5,
        name: { ar: 'قميص كتان صيفي', en: 'Summer Linen Shirt' },
        category: 'رجالي',
        price: 650,
        img: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80',
        desc: {
            ar: 'قميص كتان طبيعي راقي وشيك جداً، خفيف ومثالي للأجواء الصيفية.',
            en: 'Premium natural linen shirt, light and perfect for summer weather.'
        },
        variants: [
            { color: '#ffffff', name: { ar: 'أبيض', en: 'White' }, img: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80' },
            { color: '#16213e', name: { ar: 'كحلي', en: 'Navy' }, img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80' }
        ]
    },
    {
        id: 6,
        name: { ar: 'حقيبة يد جلد فاخرة', en: 'Luxury Leather Handbag' },
        category: 'إكسسوارات',
        price: 1350,
        img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
        desc: {
            ar: 'حقيبة يد واسعة وعملية مصنعة من أجود خامات الجلد.',
            en: 'Spacious practical handbag made from premium leather materials.'
        },
        variants: [
            { color: '#c45c26', name: { ar: 'أحمر نحاسي', en: 'Copper Red' }, img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80' },
            { color: '#0d7377', name: { ar: 'أخضر زمردي', en: 'Emerald' }, img: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=600&q=80' }
        ]
    },
    {
        id: 7,
        name: { ar: 'فستان صيفي مشجر', en: 'Summer Floral Dress' },
        category: 'حريمي',
        price: 780,
        img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80',
        desc: {
            ar: 'فستان صيفي مريح بألوان زاهية للخروجات.',
            en: 'Comfortable summer dress with vibrant colors for outings.'
        },
        variants: [
            { color: '#e74c3c', name: { ar: 'أحمر مشجر', en: 'Floral Red' }, img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80' },
            { color: '#ffffff', name: { ar: 'أبيض', en: 'White' }, img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&q=80' }
        ]
    },
    {
        id: 8,
        name: { ar: 'ساعة يد كلاسيك', en: 'Classic Wrist Watch' },
        category: 'إكسسوارات',
        price: 1950,
        img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80',
        desc: {
            ar: 'ساعة يد معدنية بتصميم كلاسيكي فاخر.',
            en: 'Classic luxury metal wristwatch with elegant design.'
        },
        variants: [
            { color: '#c0c0c0', name: { ar: 'فضي', en: 'Silver' }, img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80' },
            { color: '#b8860b', name: { ar: 'ذهبي', en: 'Gold' }, img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80' }
        ]
    },
    {
        id: 9,
        name: { ar: 'حذاء جلد كلاسيك', en: 'Classic Leather Shoes' },
        category: 'أحذية',
        price: 1100,
        img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80',
        desc: {
            ar: 'حذاء كلاسيكي أنيق جداً للبدل الرسمية والخروجات الهامة.',
            en: 'Very elegant classic leather shoes for formal suits and special occasions.'
        },
        variants: [
            { color: '#8b4513', name: { ar: 'بني', en: 'Brown' }, img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80' },
            { color: '#5d4037', name: { ar: 'بني غامق', en: 'Dark Brown' }, img: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=600&q=80' }
        ]
    },
    {
        id: 10,
        name: { ar: 'بليزر كاجوال رجالي', en: 'Casual Men\'s Blazer' },
        category: 'رجالي',
        price: 1400,
        img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
        desc: {
            ar: 'بليزر كاجوال عصري، يعطي مظهراً راقياً ومميزاً.',
            en: 'Modern casual blazer that gives a sophisticated and distinctive look.'
        },
        variants: [
            { color: '#1a1a2e', name: { ar: 'كحلي', en: 'Navy' }, img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80' },
            { color: '#4169e1', name: { ar: 'أزرق كاروهات', en: 'Blue Check' }, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80' }
        ]
    }
];

productsData.forEach(p => p.code = generateCode());

let currentLang = 'ar'; // default Arabic
let currentProductSelection = null;
let selectedVariant = null;
let cart = JSON.parse(localStorage.getItem('fikra_cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(productsData);
    updateCartBadge();
    applyLang();
});

function toggleLang() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('langBtn').innerText = currentLang === 'ar' ? 'EN' : 'عربي';
    applyLang();
    // re-render products to update names
    const activeCat = document.querySelector('.cat-badge.active');
    if (activeCat) {
        const cat = activeCat.getAttribute('data-ar') || 'الكل';
        filterCategory(cat, activeCat);
    } else {
        renderProducts(productsData);
    }
}

function applyLang() {
    document.querySelectorAll('[data-ar][data-en]').forEach(el => {
        el.innerText = el.getAttribute(`data-${currentLang}`);
    });
    // update search placeholder
    const search = document.getElementById('searchInput');
    if (search) {
        search.placeholder = currentLang === 'ar'
            ? 'ابحث عن منتج أو كود...'
            : 'Search product or code...';
    }
}

function normalizeArabic(text) {
    return text.replace(/[أإآا]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');
}

function getName(prod) {
    return typeof prod.name === 'object' ? prod.name[currentLang] : prod.name;
}

function getDesc(prod) {
    return typeof prod.desc === 'object' ? prod.desc[currentLang] : prod.desc;
}

function getVariantName(v) {
    return typeof v.name === 'object' ? v.name[currentLang] : v.name;
}

function renderProducts(products) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    if (products.length === 0) {
        grid.innerHTML = `<h3 style="grid-column: 1/-1; text-align:center; color:#777;">${currentLang === 'ar' ? 'لا توجد منتجات مطابقة' : 'No matching products'}</h3>`;
        return;
    }

    products.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openProductModal(prod);
        card.innerHTML = `
            <div class="product-code">${prod.code}</div>
            <img src="${prod.img}" class="product-img" alt="${getName(prod)}" loading="lazy">
            <div class="product-info">
                <h3 class="product-title">${getName(prod)}</h3>
                <div class="product-price">${prod.price} ج.م</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterCategory(cat, element) {
    if (element) {
        document.querySelectorAll('.cat-badge').forEach(el => el.classList.remove('active'));
        element.classList.add('active');
    }
    if (cat === 'الكل' || cat === 'All') {
        renderProducts(productsData);
    } else {
        const filtered = productsData.filter(p => p.category === cat);
        renderProducts(filtered);
    }
}

function resetToHome() {
    document.getElementById('searchInput').value = '';
    filterCategory('الكل', document.querySelector('.cat-badge:first-child'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function searchProducts() {
    const rawQuery = document.getElementById('searchInput').value.toLowerCase();
    const query = normalizeArabic(rawQuery);

    const filtered = productsData.filter(p => {
        const nameAr = (typeof p.name === 'object' ? p.name.ar : p.name).toLowerCase();
        const nameEn = (typeof p.name === 'object' ? p.name.en : p.name).toLowerCase();
        return normalizeArabic(nameAr).includes(query) ||
               nameEn.includes(rawQuery) ||
               p.code.toLowerCase().includes(rawQuery);
    });
    renderProducts(filtered);
}

function openProductModal(product) {
    currentProductSelection = product;
    selectedVariant = product.variants[0];

    const modalImg = document.getElementById('modalImg');
    modalImg.src = selectedVariant.img;

    document.getElementById('modalCode').innerText = product.code;
    document.getElementById('modalTitle').innerText = getName(product);
    document.getElementById('modalPrice').innerText = product.price + ' ج.م';
    document.getElementById('modalDesc').innerText = getDesc(product);

    const colorsDiv = document.getElementById('modalColors');
    colorsDiv.innerHTML = '';

    product.variants.forEach((v, idx) => {
        const circle = document.createElement('div');
        circle.className = 'color-circle' + (idx === 0 ? ' active' : '');
        circle.style.backgroundColor = v.color;
        circle.title = getVariantName(v);

        circle.onclick = (e) => {
            document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('active'));
            circle.classList.add('active');

            selectedVariant = v;
            modalImg.style.opacity = '0.5';
            setTimeout(() => {
                modalImg.src = v.img;
                modalImg.style.opacity = '1';
            }, 150);
        };
        colorsDiv.appendChild(circle);
    });

    const modal = document.getElementById('productModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
    document.body.style.overflow = 'auto';
}

function addToCartFromModal() {
    if (!currentProductSelection) return;

    const variantName = selectedVariant ? getVariantName(selectedVariant) : '';
    cart.push({
        id: currentProductSelection.id,
        name: `${getName(currentProductSelection)} (${variantName})`,
        code: currentProductSelection.code,
        price: currentProductSelection.price,
        img: selectedVariant ? selectedVariant.img : currentProductSelection.img
    });

    saveCart();
    closeModal('productModal');
    openCartModal();
}

function saveCart() {
    localStorage.setItem('fikra_cart', JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    document.getElementById('cartBadge').innerText = cart.length;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCartItems();
}

function openCartModal() {
    document.getElementById('receiptView').classList.remove('active');
    document.getElementById('cartView').style.display = 'block';

    renderCartItems();

    const modal = document.getElementById('cartModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function renderCartItems() {
    const list = document.getElementById('cartItemsList');
    const formDiv = document.getElementById('checkoutFormDiv');
    const sumEl = document.getElementById('cartTotalSum');
    const codesInput = document.getElementById('clientCodes');

    list.innerHTML = '';
    let sum = 0;
    let codesArr = [];

    if (cart.length === 0) {
        list.innerHTML = `<p style="text-align:center; padding: 20px; color:#888;">${currentLang === 'ar' ? 'العربة فارغة حالياً' : 'Cart is currently empty'}</p>`;
        formDiv.style.display = 'none';
        sumEl.innerText = '0';
        return;
    }

    formDiv.style.display = 'flex';

    cart.forEach((item, idx) => {
        sum += item.price;
        codesArr.push(item.code);

        list.innerHTML += `
            <div class="cart-item-row">
                <div class="cart-item-info">
                    <img src="${item.img}" alt="${item.name}">
                    <div>
                        <div style="font-weight:bold; color:var(--primary);">${item.name}</div>
                        <span class="cart-item-code">${item.code}</span>
                        <div style="color:var(--accent); font-weight:bold; margin-top:5px;">${item.price} ج.م</div>
                    </div>
                </div>
                <div class="remove-btn" onclick="removeFromCart(${idx})">
                    <i class="fas fa-trash-alt"></i>
                </div>
            </div>
        `;
    });

    sumEl.innerText = sum;
    codesInput.value = codesArr.join(currentLang === 'ar' ? ' ، ' : ', ');
}

function generateFinalReceipt() {
    const name = document.getElementById('clientName').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();
    const address = document.getElementById('clientAddress').value.trim();

    if (!name || !phone || !address) {
        alert(currentLang === 'ar'
            ? 'برجاء إكمال جميع البيانات (الاسم، الرقم، العنوان)'
            : 'Please fill all fields (Name, Phone, Address)');
        return;
    }

    const sum = cart.reduce((acc, item) => acc + item.price, 0);
    const codesHtml = cart.map(item => `<span class="code-chip">${item.code}</span>`).join(' ');

    const labels = currentLang === 'ar' ? {
        name: 'الاسم',
        phone: 'رقم التواصل',
        address: 'العنوان/الوصف',
        products: 'المنتجات المطلوبة',
        total: 'إجمالي الدفع'
    } : {
        name: 'Name',
        phone: 'Phone',
        address: 'Address / Notes',
        products: 'Ordered Products',
        total: 'Total Payment'
    };

    const receiptHTML = `
        <p><strong>${labels.name}:</strong> ${name}</p>
        <p><strong>${labels.phone}:</strong> <span dir="ltr">${phone}</span></p>
        <p><strong>${labels.address}:</strong> ${address}</p>
        <hr style="margin:10px 0; border:0; border-top:1px dashed #ccc;">
        <p style="margin-bottom:10px;"><strong>${labels.products}:</strong></p>
        <div style="margin-bottom:15px; text-align:${currentLang === 'ar' ? 'right' : 'left'};">${codesHtml}</div>
        <h3 style="color: var(--accent);">${labels.total}: ${sum} ج.م</h3>
    `;

    document.getElementById('receiptContent').innerHTML = receiptHTML;

    document.getElementById('cartView').style.display = 'none';
    document.getElementById('receiptView').classList.add('active');
}

function clearCartAndClose() {
    cart = [];
    saveCart();
    closeModal('cartModal');

    document.getElementById('clientName').value = '';
    document.getElementById('clientPhone').value = '';
    document.getElementById('clientAddress').value = '';
}

window.onclick = function (event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};
