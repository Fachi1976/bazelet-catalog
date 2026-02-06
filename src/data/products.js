// Bazelet Catalog - Complete Products Data
// 13 gallery products (26 folders, 5-9 angles each)
// + single-image products (internal components)
// Naming convention: {folder-name}/{folder-name}-{01..nn}.png

// =====================================================
// Helper: Generate image paths for gallery folders
// =====================================================
const generateGallery = (folderName, count) => {
  return Array.from({ length: count }, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    return `./images/360/${folderName}/${folderName}-${num}.png`;
  });
};

// =====================================================
// MAIN CATEGORIES (Level 1)
// =====================================================
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

// =====================================================
// SUBCATEGORIES (Level 2)
// =====================================================
export const subcategories = [
  // --- תפרחות ---
  {
    id: 'flowers-regular',
    parentId: 'flowers',
    name: 'תפרחות',
    description: 'אריזות לתפרחות קנאביס 10 גרם'
  },
  {
    id: 'flowers-minis',
    parentId: 'flowers',
    name: 'תפרחות מיניז',
    description: 'אריזות לתפרחות מיניז 10 גרם'
  },
  {
    id: 'jar',
    parentId: 'flowers',
    name: 'צנצנת',
    description: 'צנצנת לתפרחות'
  },

  // --- מגולגלות ---
  {
    id: 'prerolls-05',
    parentId: 'prerolls',
    name: 'סלים 0.5 גרם',
    description: 'אריזות למגולגלות 0.5 גרם'
  },
  {
    id: 'prerolls-025',
    parentId: 'prerolls',
    name: 'שורטס 0.25 גרם',
    description: 'אריזות למגולגלות 0.25 גרם'
  },

  // --- שמן ---
  {
    id: 'oil-products',
    parentId: 'oil',
    name: 'שמן',
    description: 'פתרונות אריזה לשמני קנאביס'
  },

  // --- משולבים ---
  {
    id: 'combo-preroll-flower',
    parentId: 'combo',
    name: 'מגולגלות + תפרחת',
    description: 'מארז משולב למגולגלות ותפרחת'
  },
  {
    id: 'combo-preroll-oil',
    parentId: 'combo',
    name: 'מגולגלות + שמן',
    description: 'מארז משולב למגולגלות ושמן'
  },
  {
    id: 'combo-flower-minis',
    parentId: 'combo',
    name: 'תפרחת + מיניז',
    description: 'מארז משולב לתפרחת רגילה ומיניז'
  },
  {
    id: 'combo-sativa-indica',
    parentId: 'combo',
    name: 'סאטיבה + אינדיקה',
    description: 'מארז משולב לשני זנים שונים'
  }
];

// =====================================================
// PRODUCTS (Level 3)
// =====================================================
export const products = [

  // ===========================================
  // תפרחות רגילות
  // ===========================================
  {
    id: 'flower-pouch',
    subcategoryId: 'flowers-regular',
    name: 'שקית',
    description: 'שקית אלומיניום לתפרחות',
    specs: {
      volume: '10 גרם',
      material: 'אלומיניום',
      closure: 'סגירה חוזרת'
    },
    tags: ['child-resistant', 'IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: {
      primary: './images/products/flower-pouch.png'
    }
  },
  {
    id: 'flower-standard',
    subcategoryId: 'flowers-regular',
    name: 'קופסא סטנדרטית',
    description: 'קופסא לתפרחת עם פתיחה עליונה',
    specs: {
      volume: '10 גרם',
      material: 'קרטון',
      closure: 'פתיחה עליונה'
    },
    tags: ['child-resistant', 'IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('flower-standard-closed', 6),
      open: generateGallery('flower-standard-open', 6)
    }
  },
  {
    id: 'flower-gift',
    subcategoryId: 'flowers-regular',
    name: 'קופסת מתנה',
    description: 'קופסא לתפרחת עם פתיחת מתנה פרימיום',
    specs: {
      volume: '10 גרם',
      material: 'קרטון',
      closure: 'פתיחת מתנה'
    },
    tags: ['child-resistant', 'IMC-GMP', 'premium'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('flower-gift-closed', 7),
      open: generateGallery('flower-gift-open', 6)
    }
  },

  // ===========================================
  // תפרחות מיניז
  // ===========================================
  {
    id: 'minis-pouch',
    subcategoryId: 'flowers-minis',
    name: 'שקית מיניז',
    description: 'שקית אלומיניום לתפרחות מיניז',
    specs: {
      volume: '10 גרם',
      material: 'אלומיניום',
      closure: 'סגירה חוזרת'
    },
    tags: ['child-resistant', 'IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: {
      primary: './images/products/minis-pouch.png'
    }
  },
  {
    id: 'minis-container',
    subcategoryId: 'flowers-minis',
    name: 'מיכל תפרחת מיניז',
    description: 'מיכל לתפרחות מיניז',
    specs: {
      volume: '10 גרם',
      material: 'פלסטיק + כיסוי אלומיניום',
      closure: 'פתיחה עליונה'
    },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: {
      primary: './images/products/minis-container.png'
    }
  },
  {
    id: 'minis-box-bag',
    subcategoryId: 'flowers-minis',
    name: 'קופסא + שקית',
    description: 'קופסא עם שקית פנימית לתפרחות מיניז',
    specs: {
      volume: '10 גרם',
      material: 'קרטון + שקית אלומיניום',
      closure: 'פתיחה עליונה'
    },
    tags: ['child-resistant', 'IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('minis-box-bag-closed', 8),
      open: generateGallery('minis-box-bag-open', 9)
    }
  },
  {
    id: 'minis-box-container',
    subcategoryId: 'flowers-minis',
    name: 'קופסא + מיכל',
    description: 'קופסא עם מיכל פנימי לתפרחות מיניז',
    specs: {
      volume: '10 גרם',
      material: 'קרטון + מיכל פלסטיק',
      closure: 'פתיחה עליונה'
    },
    tags: ['child-resistant', 'IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('minis-box-container-closed', 5),
      open: generateGallery('minis-box-container-open', 6)
    }
  },

  // ===========================================
  // צנצנת
  // ===========================================
  {
    id: 'jar-container',
    subcategoryId: 'jar',
    name: 'צנצנת',
    description: 'צנצנת לתפרחות',
    specs: {
      volume: '10 גרם',
      material: 'פלסטיק',
      closure: 'מכסה בורג'
    },
    tags: ['child-resistant', 'IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: {
      primary: './images/products/jar-container.png'
    }
  },
  {
    id: 'jar-box',
    subcategoryId: 'jar',
    name: 'קופסא לצנצנת',
    description: 'קופסא לצנצנת תפרחות',
    specs: {
      volume: '10 גרם',
      material: 'קרטון',
      closure: 'פתיחה עליונה'
    },
    tags: ['child-resistant', 'IMC-GMP'],
    hasToggle: false,
    isInternal: false,
    gallery: null,
    images: {
      primary: './images/products/jar-box.png'
    }
  },

  // ===========================================
  // מגולגלות סלים 0.5 גרם
  // ===========================================
  {
    id: 'preroll-slims-tube',
    subcategoryId: 'prerolls-05',
    name: 'תרמיל בודד',
    description: 'תרמיל ל-2 יחידות מגולגלות 0.5 גרם',
    specs: {
      volume: '0.5 גרם × 2',
      material: 'פלסטיק',
      closure: 'מכסה'
    },
    tags: ['child-resistant'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: {
      primary: './images/products/preroll-slims-tube.png'
    }
  },
  {
    id: 'preroll-slims-standard',
    subcategoryId: 'prerolls-05',
    name: 'קופסא סטנדרטית',
    description: 'קופסא למגולגלות סלים עם פתיחה עליונה',
    specs: {
      volume: '0.5 גרם × 10',
      material: 'קרטון',
      closure: 'פתיחה עליונה'
    },
    tags: ['child-resistant', 'IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('preroll-slims-standard-closed', 8),
      open: generateGallery('preroll-slims-standard-open', 8)
    }
  },
  {
    id: 'preroll-slims-gift',
    subcategoryId: 'prerolls-05',
    name: 'קופסת מתנה',
    description: 'קופסא למגולגלות סלים עם פתיחת מתנה פרימיום',
    specs: {
      volume: '0.5 גרם × 10',
      material: 'קרטון',
      closure: 'פתיחת מתנה'
    },
    tags: ['child-resistant', 'IMC-GMP', 'premium'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('preroll-slims-gift-closed', 6),
      open: generateGallery('preroll-slims-gift-open', 8)
    }
  },

  // ===========================================
  // מגולגלות שורטס 0.25 גרם
  // ===========================================
  {
    id: 'preroll-shorts-tray',
    subcategoryId: 'prerolls-025',
    name: 'מגש',
    description: 'מגש ל-10 יחידות מגולגלות 0.25 גרם',
    specs: {
      volume: '0.25 גרם × 10',
      material: 'פלסטיק + כיסוי אלומיניום',
      closure: 'כיסוי עליון'
    },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: {
      primary: './images/products/preroll-shorts-tray.png'
    }
  },
  {
    id: 'preroll-shorts-box',
    subcategoryId: 'prerolls-025',
    name: 'קופסא + מגירה',
    description: 'קופסא עם מגירה למגולגלות שורטס',
    specs: {
      volume: '0.25 גרם × 20',
      material: 'קרטון',
      closure: 'מגירה נשלפת'
    },
    tags: ['child-resistant', 'IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('preroll-shorts-box-closed', 9),
      open: generateGallery('preroll-shorts-box-open', 8)
    }
  },

  // ===========================================
  // שמן
  // ===========================================
  {
    id: 'oil-dropper',
    subcategoryId: 'oil-products',
    name: 'בקבוק דרופר',
    description: 'בקבוק זכוכית כהה עם דרופר',
    specs: {
      volume: '10 מ"ל',
      material: 'זכוכית אמבר',
      closure: 'דרופר'
    },
    tags: ['child-resistant', 'UV protection', 'IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: {
      primary: './images/products/oil-dropper.png'
    }
  },
  {
    id: 'oil-box',
    subcategoryId: 'oil-products',
    name: 'קופסא',
    description: 'קופסא לבקבוק שמן',
    specs: {
      volume: '10 מ"ל',
      material: 'קרטון',
      closure: 'פתיחה עליונה'
    },
    tags: ['child-resistant', 'IMC-GMP'],
    hasToggle: false,
    isInternal: false,
    gallery: null,
    images: {
      primary: './images/products/oil-box.png'
    }
  },

  // ===========================================
  // משולב: מגולגלות + תפרחת
  // ===========================================
  {
    id: 'combo-preroll-flower-box',
    subcategoryId: 'combo-preroll-flower',
    name: 'מארז מגולגלות + תפרחת',
    description: 'מארז משולב למגולגלות ותפרחת',
    specs: {
      volume: '10 גרם תפרחת + מגולגלות',
      material: 'קרטון',
      closure: 'פתיחה עליונה'
    },
    tags: ['child-resistant', 'IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('combo-preroll-flower-box-closed', 6),
      open: generateGallery('combo-preroll-flower-box-open', 7)
    }
  },

  // ===========================================
  // משולב: מגולגלות + שמן
  // ===========================================
  {
    id: 'combo-preroll-oil-preroll-open',
    subcategoryId: 'combo-preroll-oil',
    name: 'אריזת מגולגלות פתוחה',
    description: 'קופסא ל-20 מגולגלות 0.25 גרם',
    specs: {
      volume: '0.25 גרם × 20',
      material: 'קרטון',
      closure: 'פתיחה עליונה'
    },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: {
      primary: './images/products/combo-preroll-oil-preroll-open.png'
    }
  },
  {
    id: 'combo-preroll-oil-spritzer',
    subcategoryId: 'combo-preroll-oil',
    name: 'שפריצר 5 מ"ל',
    description: 'שמן עם שפריצר מדוד',
    specs: {
      volume: '5 מ"ל',
      material: 'זכוכית + פלסטיק',
      closure: 'שפריצר'
    },
    tags: ['child-resistant', 'IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: {
      primary: './images/products/combo-preroll-oil-spritzer.png'
    }
  },
  {
    id: 'combo-preroll-oil-flower-container',
    subcategoryId: 'combo-preroll-oil',
    name: 'מיכל תפרחת',
    description: 'מיכל לתפרחות',
    specs: {
      volume: '10 גרם',
      material: 'פלסטיק + כיסוי אלומיניום',
      closure: 'פתיחה עליונה'
    },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: {
      primary: './images/products/combo-preroll-oil-container.png'
    }
  },
  {
    id: 'combo-preroll-oil-tray',
    subcategoryId: 'combo-preroll-oil',
    name: 'מגשית מגולגלות',
    description: 'מגשית ל-10 מגולגלות 0.25 גרם',
    specs: {
      volume: '0.25 גרם × 10',
      material: 'פלסטיק + כיסוי אלומיניום',
      closure: 'כיסוי עליון'
    },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: {
      primary: './images/products/combo-preroll-oil-tray.png'
    }
  },
  {
    id: 'combo-preroll-oil-box',
    subcategoryId: 'combo-preroll-oil',
    name: 'מארז מגולגלות + שמן',
    description: 'מארז משולב למגולגלות ושמן',
    specs: {
      volume: 'שמן 5 מ"ל + מגולגלות',
      material: 'קרטון',
      closure: 'פתיחה עליונה'
    },
    tags: ['child-resistant', 'IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('combo-preroll-oil-box-closed', 8),
      open: generateGallery('combo-preroll-oil-box-open', 8)
    }
  },

  // ===========================================
  // משולב: תפרחת + מיניז
  // ===========================================
  {
    id: 'combo-flower-minis-container',
    subcategoryId: 'combo-flower-minis',
    name: 'מיכל תפרחת',
    description: 'מיכל לתפרחת',
    specs: {
      volume: '10 גרם',
      material: 'פלסטיק + כיסוי אלומיניום',
      closure: 'פתיחה עליונה'
    },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: {
      primary: './images/products/combo-inner-container.png'
    }
  },
  {
    id: 'combo-flower-minis-horizontal',
    subcategoryId: 'combo-flower-minis',
    name: 'קופסא אופקית',
    description: 'מארז אופקי לתפרחת רגילה ומיניז זה לצד זה',
    specs: {
      volume: '10 גרם × 2',
      material: 'קרטון',
      closure: 'פתיחה צידית'
    },
    tags: ['child-resistant', 'IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('combo-flower-minis-horizontal-closed', 6),
      open: generateGallery('combo-flower-minis-horizontal-open', 5)
    }
  },
  {
    id: 'combo-flower-minis-vertical',
    subcategoryId: 'combo-flower-minis',
    name: 'קופסא אנכית',
    description: 'מארז אנכי לתפרחת רגילה ומיניז זה על זה',
    specs: {
      volume: '10 גרם × 2',
      material: 'קרטון',
      closure: 'פתיחה עליונה'
    },
    tags: ['child-resistant', 'IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('combo-flower-minis-vertical-closed', 5),
      open: generateGallery('combo-flower-minis-vertical-open', 6)
    }
  },

  // ===========================================
  // משולב: סאטיבה + אינדיקה
  // ===========================================
  {
    id: 'combo-sativa-indica-container',
    subcategoryId: 'combo-sativa-indica',
    name: 'מיכל תפרחת',
    description: 'מיכל לתפרחת',
    specs: {
      volume: '10 גרם',
      material: 'פלסטיק + כיסוי אלומיניום',
      closure: 'פתיחה עליונה'
    },
    tags: ['IMC-GMP'],
    hasToggle: false,
    isInternal: true,
    gallery: null,
    images: {
      primary: './images/products/combo-inner-container.png'
    }
  },
  {
    id: 'combo-sativa-indica-horizontal',
    subcategoryId: 'combo-sativa-indica',
    name: 'קופסא אופקית',
    description: 'מארז אופקי לשני זנים שונים זה לצד זה',
    specs: {
      volume: '10 גרם × 2',
      material: 'קרטון',
      closure: 'פתיחה צידית'
    },
    tags: ['child-resistant', 'IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('combo-sativa-indica-horizontal-closed', 5),
      open: generateGallery('combo-sativa-indica-horizontal-open', 5)
    }
  },
  {
    id: 'combo-sativa-indica-vertical',
    subcategoryId: 'combo-sativa-indica',
    name: 'קופסא אנכית',
    description: 'מארז אנכי לשני זנים שונים זה על זה',
    specs: {
      volume: '10 גרם × 2',
      material: 'קרטון',
      closure: 'פתיחה עליונה'
    },
    tags: ['child-resistant', 'IMC-GMP'],
    hasToggle: true,
    isInternal: false,
    gallery: {
      closed: generateGallery('combo-sativa-indica-vertical-closed', 5),
      open: generateGallery('combo-sativa-indica-vertical-open', 5)
    }
  }
];

// =====================================================
// HELPER FUNCTIONS
// =====================================================
export const getMainCategory = (id) => mainCategories.find(c => c.id === id);

export const getSubcategoriesByParent = (parentId) =>
  subcategories.filter(s => s.parentId === parentId);

export const getSubcategory = (id) => subcategories.find(s => s.id === id);

export const getProductsBySubcategory = (subcategoryId) =>
  products.filter(p => p.subcategoryId === subcategoryId);

export const getProduct = (id) => products.find(p => p.id === id);

export const getAllProducts = () =>
  products.map(p => {
    const sub = getSubcategory(p.subcategoryId);
    const main = sub ? getMainCategory(sub.parentId) : null;
    return {
      ...p,
      subcategoryName: sub?.name,
      mainCategoryId: main?.id,
      mainCategoryName: main?.name
    };
  });
