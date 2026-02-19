import React, { useState, useEffect, useCallback } from 'react';
import { mainCategories, subcategories, products, getMainCategory, getSubcategoriesByParent, getSubcategory, getProductsBySubcategory, getProduct } from './data/products.js';
import './App.css';

// =====================================================
// IMAGE GALLERY COMPONENT
// =====================================================
function ImageGallery({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Reset index when images change
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  if (!images || images.length === 0) return null;

  const goNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > minSwipeDistance;
    if (isSwipe) {
      // RTL: swipe left = prev, swipe right = next
      if (distance > 0) {
        goPrev();
      } else {
        goNext();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="gallery-container">
      <div
        className="gallery-image-wrapper"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={images[currentIndex]}
          alt={`${alt} - זווית ${currentIndex + 1}`}
          className="gallery-image"
          onError={(e) => { e.target.src = './images/placeholder.png'; }}
          draggable={false}
        />
      </div>
      {images.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button className="gallery-arrow gallery-arrow-right" onClick={goPrev}>‹</button>
          <button className="gallery-arrow gallery-arrow-left" onClick={goNext}>›</button>

          {/* Dots */}
          <div className="gallery-dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`gallery-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="gallery-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}

// =====================================================
// MAIN APP
// =====================================================
function App() {
  // Navigation state
  const [currentMainCategory, setCurrentMainCategory] = useState(null);
  const [currentSubcategory, setCurrentSubcategory] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Product view state
  const [viewState, setViewState] = useState('closed');

  // Reset view state when product changes
  useEffect(() => {
    setViewState('closed');
  }, [currentProduct]);

  // Back navigation
  const handleBack = () => {
    if (currentProduct) {
      setCurrentProduct(null);
    } else if (currentSubcategory) {
      setCurrentSubcategory(null);
    } else if (currentMainCategory) {
      setCurrentMainCategory(null);
    }
  };

  // Get current gallery images based on toggle state
  const getCurrentImages = () => {
    if (!currentProduct) return [];
    if (currentProduct.gallery) {
      return currentProduct.gallery[viewState] || currentProduct.gallery.closed || [];
    }
    return [];
  };

  // Get primary image for product card
  const getProductCardImage = (product) => {
    if (product.images?.primary) {
      return product.images.primary;
    }
    if (product.gallery) {
      return product.gallery.closed?.[0] || product.gallery.open?.[0] || './images/placeholder.png';
    }
    return './images/placeholder.png';
  };

  // ===================================================
  // RENDER: Main Categories (Level 1)
  // ===================================================
  const renderMainCategories = () => (
    <div className="page-container">
      <h1 className="page-title">קטלוג אריזות קנאביס</h1>
      <p className="page-subtitle">בחרו קטגוריה לצפייה במוצרים</p>

      <div className="categories-grid main-categories-grid">
        {mainCategories.map((cat) => {
          return (
            <div
              key={cat.id}
              className="category-card"
              onClick={() => setCurrentMainCategory(cat)}
            >
              <div className="category-icon-wrapper">
                <img
                  src={cat.icon}
                  alt={cat.name}
                  className="category-icon-img"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <h2 className="category-name">{cat.name}</h2>
              <p className="category-description">{cat.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );

  // ===================================================
  // RENDER: Subcategories (Level 2)
  // ===================================================
  const renderSubcategories = () => {
    const subs = getSubcategoriesByParent(currentMainCategory.id);

    // If only one subcategory, skip to products
    if (subs.length === 1) {
      return renderProducts(subs[0]);
    }

    return (
      <div className="page-container">
        <h1 className="page-title">{currentMainCategory.name}</h1>
        <div className="categories-grid">
          {subs.map((sub) => {
            return (
              <div
                key={sub.id}
                className="category-card"
                onClick={() => setCurrentSubcategory(sub)}
              >
                {sub.icon && (
                  <div className="category-icon-wrapper">
                    <img
                      src={sub.icon}
                      alt={sub.name}
                      className="category-icon-img"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                )}
                <h2 className="category-name">{sub.name}</h2>
                <p className="category-description">{sub.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // ===================================================
  // RENDER: Products List (Level 3)
  // ===================================================
  const renderProducts = (sub) => {
    const activeSub = sub || currentSubcategory;
    const prods = getProductsBySubcategory(activeSub.id);

    return (
      <div className="page-container">
        <h1 className="page-title">{activeSub.name}</h1>
        <p className="page-subtitle">{activeSub.description}</p>

        <div className="products-grid">
          {prods.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => setCurrentProduct(product)}
            >
              {product.isInternal && (
                <span className="internal-badge">רכיב פנימי (אריזה ראשונית)</span>
              )}
              <img
                src={getProductCardImage(product)}
                alt={product.name}
                className="product-card-image"
                onError={(e) => { e.target.src = './images/placeholder.png'; }}
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ===================================================
  // RENDER: Product Detail
  // ===================================================
  const renderProductDetail = () => {
    const hasGallery = currentProduct.gallery !== null;
    const hasSingleImage = !hasGallery && currentProduct.images?.primary;
    const galleryImages = getCurrentImages();

    return (
      <div className="product-detail">
        <div className="product-detail-content">
          {/* Image Section */}
          <div className="product-detail-image-section">
            {hasGallery ? (
              <>
                {/* Toggle closed/open */}
                {currentProduct.hasToggle && (
                  <div className="state-toggle">
                    <button
                      className={`toggle-btn ${viewState === 'closed' ? 'active' : ''}`}
                      onClick={() => setViewState('closed')}
                    >
                      סגור
                    </button>
                    <button
                      className={`toggle-btn ${viewState === 'open' ? 'active' : ''}`}
                      onClick={() => setViewState('open')}
                    >
                      פתוח
                    </button>
                  </div>
                )}
                <ImageGallery images={galleryImages} alt={currentProduct.name} />
              </>
            ) : hasSingleImage ? (
              <div className="single-image-wrapper">
                <img
                  src={currentProduct.images.primary}
                  alt={currentProduct.name}
                  className="single-image"
                  onError={(e) => { e.target.src = './images/placeholder.png'; }}
                />
              </div>
            ) : null}
          </div>

          {/* Info Section */}
          <div className="product-detail-info">
            <h1 className="product-detail-title">{currentProduct.name}</h1>

            {currentProduct.sku && (
              <span className="product-sku">מק״ט: {currentProduct.sku}</span>
            )}

            <p className="product-detail-description">{currentProduct.description}</p>

            {/* Tags */}
            {currentProduct.tags && currentProduct.tags.length > 0 && (
              <div className="product-tags">
                {currentProduct.tags.map((tag) => (
                  <span key={tag} className="product-tag">{tag}</span>
                ))}
              </div>
            )}

            {/* Specs */}
            {currentProduct.specs && (
              <div className="product-specs">
                <h3 className="specs-title">מפרט טכני</h3>
                <table className="specs-table">
                  <tbody>
                    {Object.entries(currentProduct.specs).map(([key, value]) => (
                      <tr key={key}>
                        <td className="spec-label">
                          {key === 'volume' ? 'נפח' : key === 'material' ? 'חומר' : key === 'closure' ? 'סגירה' : key}
                        </td>
                        <td className="spec-value">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // ===================================================
  // BREADCRUMB
  // ===================================================
  const renderBreadcrumb = () => {
    if (!currentMainCategory) return null;

    return (
      <nav className="breadcrumb">
        <span
          className="breadcrumb-link"
          onClick={() => {
            setCurrentMainCategory(null);
            setCurrentSubcategory(null);
            setCurrentProduct(null);
          }}>
          ראשי
        </span>

        {currentMainCategory && (
          <>
            <span className="breadcrumb-separator">/</span>
            <span
              className={(currentSubcategory || currentProduct) ? "breadcrumb-link" : "breadcrumb-current"}
              onClick={() => {
                setCurrentSubcategory(null);
                setCurrentProduct(null);
              }}
            >
              {currentMainCategory.name}
            </span>
          </>
        )}

        {currentSubcategory && (
          <>
            <span className="breadcrumb-separator">/</span>
            <span
              className={currentProduct ? "breadcrumb-link" : "breadcrumb-current"}
              onClick={() => setCurrentProduct(null)}
            >
              {currentSubcategory.name}
            </span>
          </>
        )}

        {currentProduct && (
          <>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{currentProduct.name}</span>
          </>
        )}
      </nav>
    );
  };

  // ===================================================
  // MAIN RENDER
  // ===================================================
  return (
    <div className="app" dir="rtl">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo" onClick={() => {
            setCurrentMainCategory(null);
            setCurrentSubcategory(null);
            setCurrentProduct(null);
          }}>
            <img src="./images/logo-white.png" alt="Bazelet Group" className="logo-img" />
            <span className="logo-catalog-title">קטלוג אריזות</span>
          </div>
          <div className="header-badge">IMC-GMP ✓</div>
        </div>
      </header>

      {/* Breadcrumb */}
      {renderBreadcrumb()}

      {/* Back Button */}
      {currentMainCategory && (
        <div className="back-bar">
          <button className="back-button" onClick={handleBack}>
            → חזרה
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="main">
        {!currentMainCategory
          ? renderMainCategories()
          : currentProduct
          ? renderProductDetail()
          : currentSubcategory
          ? renderProducts()
          : renderSubcategories()
        }
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Bazelet Group | IMC-GMP Certified Cannabis Manufacturer</p>
      </footer>
    </div>
  );
}

export default App;
