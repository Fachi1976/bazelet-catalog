// Bazelet Catalog - Complete Products Data - UPDATED

const generateGallery = (folderName, count) => {
  return Array.from({ length: count }, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    return `./images/360/${folderName}/${folderName}-${num}.png`;
  });
};

export const mainCategories = [
  {
    id: 'flowers',
    name: 'תפרחות',
    description: 'פתרונות אריזה לתפרחות קנאביס',
    icon: './images/icons/flower-main-icon.png'
  },
  {
    id: 'prerolls',
    name: 'מגולגלות',
    description: 'פתרונות אריזה למגולגלות קנאביס',
    icon: './images/icons/preroll-main-icon.png'
  },
  {
    id: 'oil',
    name: 'שמן',
    description: 'פתרונות אריזה לשמני קנאביס',
    icon: './images/icons/oil-main-icon.png'
  },
  {
    id: 'combo',
    name: 'מוצרים משולבים',
    description: 'מארזים משולבים למגוון מוצרי קנאביס',
    icon: './images/icons/combo-main-icon.png'
  }
];

export const subcategories = [
  {
    id: 'flowers-regular',
    parentId: 'flowers',
    name: 'תפרחות',
    description: 'אריזות לתפרחות קנאביס 10 גרם',
    icon: './images/icons/icon-flower.png'
  },
  {
    id: 'flowers-minis',
    parentId: 'flowers',
    name: 'תפרחות מיניז',
    description: 'אריזות לתפרחות מיניז 10 גרם',
    icon: './images/icons/icon-minis.png'
  },
  {
    id: 'jar',
    parentId: 'flowers',
    name: 'צנצנת',
    description: 'צנצנת לתפרחות',
    icon: './images/icons/icon-jar.png'
  },
  {
    id: 'prerolls-05',
    parentId: 'prerolls',
    name: 'מגולגלות 0.5 גרם',
    description: 'אריזות למגולגלות 0.5 גרם',
    icon: './images/icons/icon-preroll-05.png'
  },
  {
    id: 'prerolls-025',
    parentId: 'prerolls',
    name: 'מגולגלות 0.25 גרם',
    description: 'אריזות למגולגלות 0.25 גרם',
    icon: './images/icons/icon-preroll-025.png'
  },
  {
    id: 'oil-products',
    parentId: 'oil',
    name: 'שמן',
    description: 'פתרונות אריזה לשמני קנאביס',
    icon: './images/icons/icon-oil.png'
  },
  {
    id: 'combo-preroll-flower',
    parentId: 'combo',
    name: 'מגולגלות + תפרחת',
    description: 'מארז משולב למגולגלות ותפרחת',
    icon: './images/icons/icon-combo.png'
  },
  {
    id: 'combo-preroll-oil',
    parentId: 'combo',
    name: 'מגולגלות + שמן',
    description: 'מארז משולב למגולגלות ושמן',
    icon: './images/icons/icon-combo.png'
  },
  {
    id: 'combo-flower-minis',
    parentId: 'combo',
    name: 'תפרחת + מיניז',
    description: 'מארז משולב לתפרחת רגילה ומיניז',
    icon: './images/icons/icon-combo.png'
  },
  {
    id: 'combo-sativa-indica',
    parentId: 'combo',
    name: 'סאטיבה + אינדיקה',
    description: 'מארז משולב לשני זנים שונים',
    icon: './images/icons/icon-combo.png'
  }
];

export const products = [

  // =============================================================
  // תפרחות רגילות - אריזה סטנדרטית
  // =============================================================

  // אריזה סטנדרטית (קופסא סטנדרטית → אריזה סטנדרטית)
  {
    id: 'flower-standard',
    sku: 'BZL-FL-001',
    subcategoryId: 'flowers-regular',
    name: 'אריזה סטנדרטית',
    description: 'קרטון לתפרחת עם פתיחה עליונה',
    specs: { volume: '10 גרם', material: 'קרטון', closure: 'פתיחה עליונה' },
    tags: ['IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('flower-standard-closed', 6),
      open: generateGallery('flower-standard-open', 6)
    }
  },

  // שקית סטנדרטית (שקית → שקית סטנדרטית, SKU BZL-FL-002→003)
  {
    id: 'flower-pouch',
    sku: 'BZL-FL-003',
    subcategoryId: 'flowers-regular',
    name: 'שקית סטנדרטית',
    description: 'שקית אלומיניום לתפרחות – הדפסה אנכית',
    specs: { volume: '10 גרם', material: 'אלומיניום', closure: 'סגירה חוזרת' },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: { primary: './images/products/flower-pouch.png' }
  },

  // =============================================================
  // תפרחות רגילות - אריזת מתנה
  // =============================================================

  // אריזת מתנה (קופסת מתנה → אריזת מתנה, SKU BZL-FL-003→002)
  {
    id: 'flower-gift',
    sku: 'BZL-FL-002',
    subcategoryId: 'flowers-regular',
    name: 'אריזת מתנה',
    description: 'קרטון לתפרחת עם פתיחת מתנה פרימיום',
    specs: { volume: '10 גרם', material: 'קרטון', closure: 'פתיחת מתנה' },
    tags: ['IMC-GMP', 'premium'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('flower-gift-closed', 7),
      open: generateGallery('flower-gift-open', 6)
    }
  },

  // שקית לאריזת מתנה - הדפסה אופקית (NEW - BZL-FL-007)
  {
    id: 'flower-gift-pouch',
    sku: 'BZL-FL-007',
    subcategoryId: 'flowers-regular',
    name: 'שקית לאריזת מתנה',
    description: 'שקית אלומיניום לאריזת מתנה-הדפסה אופקית',
    specs: { volume: '10 גרם', material: 'אלומיניום', closure: 'סגירה חוזרת' },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: { primary: './images/products/flower-pouch-present.png' }
  },

  // =============================================================
  // תפרחות רגילות - אריזה מוקטנת (מועבר ממיניז)
  // =============================================================

  // אריזה מוקטנת לשקית DOY (קופסא ממיניז → הועבר לתפרחות, SKU BZL-MN-001→BZL-FL-004)
  {
    id: 'flower-small-box',
    sku: 'BZL-FL-004',
    subcategoryId: 'flowers-regular',
    name: 'אריזה מוקטנת לשקית DOY',
    description: 'קרטון מוקטן לשקית DOY עם תחתית',
    specs: { volume: '10 גרם', material: 'קרטון', closure: 'פתיחה עליונה' },
    tags: ['IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('minis-box-bag-closed', 8),
      open: generateGallery('minis-box-bag-open', 9)
    }
  },

  // שקית DOY עם תחתית (שקית מיניז → הועבר לתפרחות, SKU BZL-MN-003→BZL-FL-005)
  {
    id: 'flower-doy-pouch',
    sku: 'BZL-FL-005',
    subcategoryId: 'flowers-regular',
    name: 'שקית DOY עם תחתית',
    description: 'שקית DOY עם תחתית',
    specs: { volume: '10 גרם', material: 'אלומיניום', closure: 'סגירה חוזרת' },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: { primary: './images/products/minis-pouch.png' }
  },

  // אריזת מתנה מוקטנת לשקית DOY (BZL-FL-006)
  {
    id: 'flower-small-gift',
    sku: 'BZL-FL-006',
    subcategoryId: 'flowers-regular',
    name: 'אריזת מתנה מוקטנת לשקית DOY',
    description: 'קרטון מוקטן פתיחת מתנה לשקית DOY עם תחתית',
    specs: { volume: '10 גרם', material: 'קרטון', closure: 'פתיחת מתנה' },
    tags: ['IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('flower-box-downsized-premium-closed', 7),
      open: generateGallery('flower-box-downsized-premium-open', 6)
    }
  },

  // =============================================================
  // תפרחות מיניז (נשארים: אריזה למיכל + מיכל)
  // =============================================================

  // אריזה (קופסא → אריזה, with מיכל inside)
  {
    id: 'minis-box-container',
    sku: 'BZL-MN-001',
    subcategoryId: 'flowers-minis',
    name: 'אריזה',
    description: 'אריזה עם מיכל פנימי לתפרחות מיניז',
    specs: { volume: '10 גרם', material: 'קרטון', closure: 'פתיחה עליונה' },
    tags: ['IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('minis-box-container-closed', 5),
      open: generateGallery('minis-box-container-open', 6)
    }
  },

  // מיכל תפרחת מיניז (SKU BZL-MN-002)
  {
    id: 'minis-container',
    sku: 'BZL-MN-002',
    subcategoryId: 'flowers-minis',
    name: 'מיכל תפרחת מיניז',
    description: 'מיכל לתפרחות מיניז',
    specs: { volume: '10 גרם', material: 'פלסטיק + כיסוי אלומיניום', closure: 'פתיחה עליונה' },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: { primary: './images/products/minis-container.png' }
  },

  // =============================================================
  // צנצנת (ללא שינויים)
  // =============================================================

  {
    id: 'jar-container',
    sku: 'BZL-JR-001',
    subcategoryId: 'jar',
    name: 'צנצנת',
    description: 'צנצנת לתפרחות',
    specs: { volume: '10 גרם', material: 'פלסטיק', closure: 'מכסה בורג' },
    tags: ['child-resistant', 'IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: { primary: './images/products/jar-container.png' }
  },
  {
    id: 'jar-box',
    sku: 'BZL-JR-002',
    subcategoryId: 'jar',
    name: 'קופסא לצנצנת',
    description: 'קופסא לצנצנת תפרחות',
    specs: { volume: '10 גרם', material: 'קרטון', closure: 'פתיחה עליונה' },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: false,
    gallery: null,
    images: { primary: './images/products/jar-box.png' }
  },

  // =============================================================
  // מגולגלות 0.5 גרם (סלים → מגולגלות)
  // =============================================================

  // אריזה סטנדרטית (קופסא סטנדרטית → אריזה סטנדרטית)
  {
    id: 'preroll-slims-standard',
    sku: 'BZL-PS-001',
    subcategoryId: 'prerolls-05',
    name: 'אריזה סטנדרטית',
    description: 'קרטון פתיחה עליונה',
    specs: { volume: '0.5 גרם × 20', material: 'קרטון', closure: 'פתיחה עליונה' },
    tags: ['IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('preroll-slims-standard-closed', 8),
      open: generateGallery('preroll-slims-standard-open', 8)
    }
  },

  // אריזת מתנה (קופסת מתנה → אריזת מתנה)
  {
    id: 'preroll-slims-gift',
    sku: 'BZL-PS-002',
    subcategoryId: 'prerolls-05',
    name: 'אריזת מתנה',
    description: 'קרטון פתיחת מתנה',
    specs: { volume: '0.5 גרם × 20', material: 'קרטון', closure: 'פתיחת מתנה' },
    tags: ['IMC-GMP', 'premium'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('preroll-slims-gift-closed', 6),
      open: generateGallery('preroll-slims-gift-open', 8)
    }
  },

  // תרמיל בודד
  {
    id: 'preroll-slims-tube',
    sku: 'BZL-PS-003',
    subcategoryId: 'prerolls-05',
    name: 'תרמיל בודד',
    description: 'תרמיל ל-2 יחידות מגולגלות 0.5 גרם',
    specs: { volume: '0.5 גרם × 2', material: 'פלסטיק', closure: 'מכסה' },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: { primary: './images/products/preroll-tube-closed.png' }
  },

  // קונוס 0.5 גרם (NEW - BZL-PS-004)
  {
    id: 'preroll-slims-cone',
    sku: 'BZL-PS-004',
    subcategoryId: 'prerolls-05',
    name: 'קונוס 0.5 גרם',
    description: 'קונוס למגולגלת 0.5 גרם',
    specs: { volume: '0.5 גרם', material: 'נייר+פילטר', closure: 'סגירה לאחר מילוי' },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: { primary: './images/products/0.5-preroll-cone.png' }
  },

  // =============================================================
  // מגולגלות 0.25 גרם (שורטס → מגולגלות)
  // =============================================================

  // אריזה (קופסא + מגירה → אריזה)
  {
    id: 'preroll-shorts-box',
    sku: 'BZL-PH-001',
    subcategoryId: 'prerolls-025',
    name: 'אריזה',
    description: 'אריזה ל-4 מגשים',
    specs: { volume: '0.25 גרם × 40', material: 'קרטון', closure: 'מגירה נשלפת' },
    tags: ['IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('preroll-shorts-box-closed', 9),
      open: generateGallery('preroll-shorts-box-open', 8)
    }
  },

  // מגש
  {
    id: 'preroll-shorts-tray',
    sku: 'BZL-PH-002',
    subcategoryId: 'prerolls-025',
    name: 'מגש',
    description: 'מגש ל-10 יחידות מגולגלות 0.25 גרם',
    specs: { volume: '0.25 גרם × 10', material: 'פלסטיק + כיסוי אלומיניום', closure: 'כיסוי עליון' },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: { primary: './images/products/preroll-shorts-tray.png' }
  },

  // קונוס 0.25 גרם (NEW - BZL-PH-003)
  {
    id: 'preroll-shorts-cone',
    sku: 'BZL-PH-003',
    subcategoryId: 'prerolls-025',
    name: 'קונוס 0.25 גרם',
    description: 'קונוס למגולגלת 0.25 גרם',
    specs: { volume: '0.25 גרם', material: 'נייר+פילטר', closure: 'סגירה לאחר מילוי' },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: { primary: './images/products/0.25-preroll-cone.png' }
  },

  // =============================================================
  // שמן (ללא שינויים)
  // =============================================================

  {
    id: 'oil-dropper',
    sku: 'BZL-OL-002',
    subcategoryId: 'oil-products',
    name: 'בקבוק דרופר',
    description: 'בקבוק זכוכית כהה עם דרופר',
    specs: { volume: '10 מ"ל', material: 'זכוכית אמבר', closure: 'דרופר' },
    tags: ['child-resistant', 'UV protection', 'IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: { primary: './images/products/oil-dropper-bottle.png' }
  },
  {
    id: 'oil-box',
    sku: 'BZL-OL-001',
    subcategoryId: 'oil-products',
    name: 'קופסא',
    description: 'קופסא לבקבוק שמן',
    specs: { volume: '10 מ"ל', material: 'קרטון', closure: 'פתיחה עליונה' },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: false,
    gallery: null,
    images: { primary: './images/products/oil-bottle-box.png' }
  },

  // =============================================================
  // משולב: מגולגלות + תפרחת (ללא שינויים במוצרים אלו)
  // =============================================================

  {
    id: 'combo-preroll-flower-container',
    sku: 'BZL-CB-PF-003',
    subcategoryId: 'combo-preroll-flower',
    name: 'מיכל תפרחת',
    description: 'מיכל לתפרחות',
    specs: { volume: '5 גרם', material: 'פלסטיק + כיסוי אלומיניום', closure: 'פתיחה עליונה' },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: { primary: './images/products/combo-inner-container.png' }
  },
  {
    id: 'combo-preroll-flower-tray',
    sku: 'BZL-CB-PF-002',
    subcategoryId: 'combo-preroll-flower',
    name: 'מגש מגולגלות',
    description: 'מגש למגולגלות',
    specs: { volume: '0.25 גרם × 10', material: 'פלסטיק + כיסוי אלומיניום', closure: 'כיסוי עליון' },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: { primary: './images/products/preroll-shorts-tray.png' }
  },
  {
    id: 'combo-preroll-flower-box',
    sku: 'BZL-CB-PF-001',
    subcategoryId: 'combo-preroll-flower',
    name: 'מארז מגולגלות + תפרחת',
    description: 'מארז משולב למגולגלות ותפרחת',
    specs: { volume: '10 גרם תפרחת + מגולגלות', material: 'קרטון', closure: 'פתיחה עליונה' },
    tags: ['IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('combo-preroll-flower-box-closed', 6),
      open: generateGallery('combo-preroll-flower-box-open', 7)
    }
  },

  // =============================================================
  // משולב: מגולגלות + שמן
  // =============================================================

  // אריזת מגולגלות פתוחה (קופסא → אריזה in description)
  {
    id: 'combo-preroll-oil-preroll-open',
    sku: 'BZL-CB-PO-002',
    subcategoryId: 'combo-preroll-oil',
    name: 'אריזת מגולגלות פתוחה',
    description: 'אריזה ל-20 מגולגלות 0.25 גרם',
    specs: { volume: '0.25 גרם × 20', material: 'קרטון', closure: 'פתיחה עליונה' },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: { primary: './images/products/combo-preroll-oil-preroll-open.png' }
  },

  // שפריצר 5 מ"ל (שמן → בקבוק in description)
  {
    id: 'combo-preroll-oil-spritzer',
    sku: 'BZL-CB-PO-003',
    subcategoryId: 'combo-preroll-oil',
    name: 'שפריצר 5 מ"ל',
    description: 'בקבוק עם שפריצר מדוד',
    specs: { volume: '5 מ"ל', material: 'זכוכית + פלסטיק', closure: 'שפריצר' },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: { primary: './images/products/oil-spritzer-5ml.png' }
  },

  {
    id: 'combo-preroll-oil-tray',
    sku: 'BZL-CB-PO-004',
    subcategoryId: 'combo-preroll-oil',
    name: 'מגשית מגולגלות',
    description: 'מגשית ל-10 מגולגלות 0.25 גרם',
    specs: { volume: '0.25 גרם × 10', material: 'פלסטיק + כיסוי אלומיניום', closure: 'כיסוי עליון' },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: { primary: './images/products/combo-preroll-tray.png' }
  },

  {
    id: 'combo-preroll-oil-box',
    sku: 'BZL-CB-PO-001',
    subcategoryId: 'combo-preroll-oil',
    name: 'מארז מגולגלות + שמן',
    description: 'מארז משולב למגולגלות ושמן',
    specs: { volume: 'שמן 5 מ"ל + 5 גרם מגולגלות', material: 'קרטון', closure: 'פתיחה עליונה' },
    tags: ['IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('combo-preroll-oil-box-closed', 8),
      open: generateGallery('combo-preroll-oil-box-open', 8)
    }
  },

  // =============================================================
  // משולב: תפרחת + מיניז (קופסא → אריזה)
  // =============================================================

  {
    id: 'combo-flower-minis-container',
    sku: 'BZL-CB-FM-003',
    subcategoryId: 'combo-flower-minis',
    name: 'מיכל תפרחת',
    description: 'מיכל לתפרחת',
    specs: { volume: '5 גרם', material: 'פלסטיק + כיסוי אלומיניום', closure: 'פתיחה עליונה' },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: { primary: './images/products/combo-inner-container.png' }
  },

  // קופסא אופקית → אריזה אופקית
  {
    id: 'combo-flower-minis-horizontal',
    sku: 'BZL-CB-FM-002',
    subcategoryId: 'combo-flower-minis',
    name: 'אריזה אופקית',
    description: 'מארז אופקי לתפרחת רגילה ומיניז זה לצד זה',
    specs: { volume: '5 גרם × 2', material: 'קרטון', closure: 'פתיחה צידית' },
    tags: ['IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('combo-flower-minis-horizontal-closed', 6),
      open: generateGallery('combo-flower-minis-horizontal-open', 5)
    }
  },

  // קופסא אנכית → אריזה אנכית
  {
    id: 'combo-flower-minis-vertical',
    sku: 'BZL-CB-FM-001',
    subcategoryId: 'combo-flower-minis',
    name: 'אריזה אנכית',
    description: 'מארז אנכי לתפרחת רגילה ומיניז זה על זה',
    specs: { volume: '5 גרם × 2', material: 'קרטון', closure: 'פתיחה עליונה' },
    tags: ['IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('combo-flower-minis-vertical-closed', 5),
      open: generateGallery('combo-flower-minis-vertical-open', 6)
    }
  },

  // =============================================================
  // משולב: סאטיבה + אינדיקה (קופסא → אריזה)
  // =============================================================

  {
    id: 'combo-sativa-indica-container',
    sku: 'BZL-CB-SI-003',
    subcategoryId: 'combo-sativa-indica',
    name: 'מיכל תפרחת',
    description: 'מיכל לתפרחת',
    specs: { volume: '5 גרם', material: 'פלסטיק + כיסוי אלומיניום', closure: 'פתיחה עליונה' },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: { primary: './images/products/combo-inner-container.png' }
  },

  // קופסא אנכית → אריזה אנכית
  {
    id: 'combo-sativa-indica-vertical',
    sku: 'BZL-CB-SI-001',
    subcategoryId: 'combo-sativa-indica',
    name: 'אריזה אנכית',
    description: 'מארז אנכי לשני זנים שונים זה על זה',
    specs: { volume: '5 גרם × 2', material: 'קרטון', closure: 'פתיחה עליונה' },
    tags: ['IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('combo-sativa-indica-vertical-closed', 5),
      open: generateGallery('combo-sativa-indica-vertical-open', 5)
    }
  },

  // קופסא אופקית → אריזה אופקית
  {
    id: 'combo-sativa-indica-horizontal',
    sku: 'BZL-CB-SI-002',
    subcategoryId: 'combo-sativa-indica',
    name: 'אריזה אופקית',
    description: 'מארז אופקי לשני זנים שונים זה לצד זה',
    specs: { volume: '5 גרם × 2', material: 'קרטון', closure: 'פתיחה צידית' },
    tags: ['IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('combo-sativa-indica-horizontal-closed', 5),
      open: generateGallery('combo-sativa-indica-horizontal-open', 5)
    }
  }
];

export const getMainCategory = (id) => mainCategories.find(c => c.id === id);
export const getSubcategoriesByParent = (parentId) => subcategories.filter(s => s.parentId === parentId);
export const getSubcategory = (id) => subcategories.find(s => s.id === id);
export const getProductsBySubcategory = (subcategoryId) => products.filter(p => p.subcategoryId === subcategoryId);
export const getProduct = (id) => products.find(p => p.id === id);
