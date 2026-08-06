/* ==========================================================================
   FLAME STEAKHOUSE - CORE JS ENGINE (i18n, INTERACTION & DATABASE)
   ========================================================================== */

// 1. DATABASE STRUCTURE
const menuDatabase = [
  {
    id: "wagyu-steak",
    name_en: "A5 Japanese Wagyu Steak",
    name_ar: "واغيو ياباني A5 فاخر",
    category: "Steak",
    price: 180,
    rating: 5.0,
    calories: 850,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80",
    description_en: "Miyazaki Prefecture A5 Wagyu with rich marbling, grilled over oak embers.",
    description_ar: "شرائح لحم الواغيو الياباني بدرجة تعريق A5 مطهوة على جمر أخشاب البلوط.",
    ingredients_en: ["A5 Wagyu Beef", "Sea Salt", "Rosemary Butter", "Garlic Confit"],
    ingredients_ar: ["لحم واغيو A5", "ملح بحري", "زبدة الروزماري", "ثوم مهروس"]
  },
  {
    id: "tomahawk-ribeye",
    name_en: "Dry-Aged Tomahawk",
    name_ar: "توماهوك معتق 45 يوم",
    category: "Steak",
    price: 145,
    rating: 4.9,
    calories: 1100,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    description_en: "45-day dry-aged Australian ribeye served on the bone.",
    description_ar: "لحم ريب آي استرالي معتق لمدة 45 يوماً يقدم مع العظم الأصلي.",
    ingredients_en: ["Prime Ribeye", "Herb Butter", "Smoked Salt"],
    ingredients_ar: ["لحم ريب آي فاخر", "زبدة الأعشاب", "ملح مدخن"]
  },
  {
    id: "lobster-thermidor",
    name_en: "Atlantic Lobster Thermidor",
    name_ar: "لوبستر ثيرميدور أطلسي",
    category: "Seafood",
    price: 95,
    rating: 4.8,
    calories: 620,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
    description_en: "Whole wild-caught lobster baked with rich cognac mushroom cream.",
    description_ar: "استاكوزا كاملة مخبوزة بصلصة المشروم والكريمة الفاخرة.",
    ingredients_en: ["Atlantic Lobster", "Cognac", "Gruyere Cheese", "Truffle Oil"],
    ingredients_ar: ["استاكوزا أطلسية", "صلصة فاخرة", "جبن غرويير", "زيت الترفل"]
  }
];

// 2. i18n TRANSLATIONS DICTIONARY
const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_menu: "Menu",
    nav_reservation: "Reservation",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    btn_book: "Book Table",
    lang_btn: "العربية",
    hero_sub: "EXQUISITE FINE DINING",
    hero_title: "Where Precision Meets Embers",
    hero_desc: "Experience dry-aged prime cuts and artisanal gastronomy prepared over natural wood fires.",
    btn_explore: "Explore Menu",
    sec_highlights: "Chef's Selection",
    sec_featured: "Featured Creations",
    sec_story_sub: "OUR HERITAGE",
    sec_story_title: "Crafting Perfection Since 2008",
    sec_story_desc1: "At Flame Steakhouse, grilling isn't just a cooking method—it's an ancient ritual refined through modern techniques.",
    sec_story_desc2: "Aged in our custom salt chambers for up to 60 days, our beef develops an extraordinary depth of flavor.",
    btn_read_more: "Discover Our Story",
    why_sub: "THE FLAME DIFFERENCE",
    why_title: "Why Dining With Us Is Exceptional",
    why_1_title: "Prime Ingredients",
    why_1_desc: "Ethically sourced A5 Wagyu and Black Angus certified beef.",
    why_2_title: "Wood-Fired Precision",
    why_2_desc: "Seared over natural white oak and hickory embers.",
    why_3_title: "Master Sommelier Pairing",
    why_3_desc: "Exclusive collection of rare vintage drinks curated to match your cut.",
    stat_1: "Happy Guests",
    stat_2: "Days Aged Beef",
    stat_3: "Culinary Awards",
    stat_4: "Organic Ingredients",
    chef_sub: "MASTER OF EMBERS",
    chef_desc: '"Cooking over open flame requires listening to the sizzle and respecting the cut."',
    chef_role: "Executive Head Chef & Founder",
    test_sub: "REVIEWS",
    test_title: "What Our Guests Say",
    test_1_text: '"The Wagyu A5 literally melted on my tongue. Hands down the best steakhouse experience!"',
    test_2_text: '"Unbelievable atmosphere, seamless service, and an exquisite wine list."',
    news_title: "Join The Culinary Club",
    news_desc: "Subscribe to receive secret menu releases and special invitations.",
    btn_subscribe: "Subscribe",
    modal_success_title: "Reservation Confirmed!",
    modal_success_msg: "Thank you for choosing Flame Steakhouse. We look forward to hosting you.",
    modal_close: "Close"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_menu: "قائمة الطعام",
    nav_reservation: "الحجز",
    nav_gallery: "المعرض",
    nav_contact: "اتصل بنا",
    btn_book: "احجز طاولة",
    lang_btn: "English",
    hero_sub: "تجربة طعام فاخرة واستثنائية",
    hero_title: "حيث تلتقي الفخامة بالشغف",
    hero_desc: "تذوق أفخر قطع اللحم المعتقة والمطهوة على جمر أخشاب الطبيعة لأوقات لا تُنسى.",
    btn_explore: "استكشف القائمة",
    sec_highlights: "اختيارات الشيف",
    sec_featured: "أطباقنا المميزة",
    sec_story_sub: "تاريخنا وتراثنا",
    sec_story_title: "صناعة الكمال منذ عام 2008",
    sec_story_desc1: "في فليم ستيك هاوس، الطهي بالشي ليس مجرد طريقة—بل هو طقس أصيل قمنا بتطويره بتقنيات حديثة.",
    sec_story_desc2: "معتقة في غرف الملح المخصصة لمدة تصل إلى 60 يوماً لتعطي عمقاً ونكهة استثنائية.",
    btn_read_more: "اكتشف قصتنا",
    why_sub: "بماذا نتميز",
    why_title: "لماذا تختار تناول الطعام لدينا؟",
    why_1_title: "مكونات فاخرة",
    why_1_desc: "لحوم واغيو A5 وبلاك أنجوس موثقة ومن مصادر أخلاقية.",
    why_2_title: "طهي على جمر الطبيعة",
    why_2_desc: "مطهوة على أخشاب البلوط والهايكوري الطبيعية لنكهة مدخنة مثالية.",
    why_3_title: "مشروبات مختارة بعناية",
    why_3_desc: "تشكيلة فاخرة تناسب كل قطعة لحم تختارها.",
    stat_1: "عميل سعيد",
    stat_2: "يوماً تعتيق للحوم",
    stat_3: "جائزة طهي عالمية",
    stat_4: "مكونات طبيعية 100%",
    chef_sub: "سيد الجمر والشعلة",
    chef_desc: '"الطهي على النار المباشرة يتطلب الاستماع لصوت الشواء واحترام قطعة اللحم."',
    chef_role: "رئيس الطهاة ومؤسس المطعم",
    test_sub: "آراء العملاء",
    test_title: "ماذا يقول زوارنا",
    test_1_text: '"لحم الواغيو A5 كان يذوب في الفم! بالتأكيد أفضل مطعم ستيك جربته."',
    test_2_text: '"أجواء لا تُصدق، خدمة ممتازة، وقائمة طعام متكاملة."',
    news_title: "انضم للنادي الحصري",
    news_desc: "اشترك للحصول على قوائم الطعام السرية والعروض الخاطفة.",
    btn_subscribe: "اشتراك",
    modal_success_title: "تم تأكيد الحجز بنجاح!",
    modal_success_msg: "شكراً لاختيارك مطعم فليم ستيك هاوس. نتطلع لاستقبالك قريباً.",
    modal_close: "إغلاق"
  }
};

let currentLang = localStorage.getItem('flame_lang') || 'en';

// 3. CHANGE LANGUAGE ENGINE
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('flame_lang', lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.textContent = translations[lang].lang_btn;

  // Render menu dynamically if the grid exists on the page
  if (typeof renderMenuGrid === 'function' && document.getElementById('menu-grid')) {
    renderMenuGrid();
  }
}

// 4. CUSTOM MODAL SYSTEM (No alert())
function showModal(title, message) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-content">
      <h2 style="color: var(--secondary); margin-bottom: 1rem;">${title}</h2>
      <p style="color: var(--text-muted); margin-bottom: 2rem;">${message}</p>
      <button class="btn-primary" id="modal-close-btn">${translations[currentLang].modal_close || 'Close'}</button>
    </div>
  `;
  document.body.appendChild(overlay);

  setTimeout(() => overlay.classList.add('active'), 10);

  document.getElementById('modal-close-btn').addEventListener('click', () => {
    overlay.classList.remove('active');
    setTimeout(() => overlay.remove(), 300);
  });
}

// 5. DOM LOADED INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  // Language Button Event Listener
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
  }

  // Scroll Actions: Navbar background & Progress bar
  window.addEventListener('scroll', () => {
    const progress = document.getElementById('scroll-progress');
    const navbar = document.getElementById('navbar');
    const backTopBtn = document.getElementById('back-to-top');
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (progress && totalHeight > 0) {
      progress.style.width = `${(window.scrollY / totalHeight) * 100}%`;
    }
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
    if (backTopBtn) {
      backTopBtn.classList.toggle('visible', window.scrollY > 400);
    }
  });

  // Back To Top Click Handler
  const backTopBtn = document.getElementById('back-to-top');
  if (backTopBtn) {
    backTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Reservation Form Handler
  const resForm = document.getElementById('reservation-form');
  if (resForm) {
    resForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showModal(translations[currentLang].modal_success_title, translations[currentLang].modal_success_msg);
      resForm.reset();
    });
  }
});