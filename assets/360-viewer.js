/**
 * Bazelet 360° Product Viewer
 * Standalone script that adds 360° view functionality to the catalog
 */

(function() {
    'use strict';

    // =====================================================
    // CONFIGURATION - Add your products here
    // =====================================================
    const PRODUCTS_360 = {
        'preroll-slims-standard': {
            name: 'Pre-Roll Slims Standard',
            nameHe: 'קופסא פתיחה עליונה',
            views: {
                closed: { frames: 8, label: 'סגור' },
                open: { frames: 8, label: 'פתוח' }
            },
        defaultView: 'closed'
    },
    'preroll-slims-gift': {
        name: 'Pre-Roll Slims Gift',
        nameHe: 'קופסא פתיחת מתנה',
        views: {
            closed: { frames: 6, label: 'סגור' },
            open: { frames: 6, label: 'פתוח' }
        },
        defaultView: 'closed'
},
    'flower-gift': {
        name: 'Flower Gift',
        nameHe: 'קופסא לשקית תפרחת פרימיום',
        views: {
            closed: { frames: 7, label: 'סגור' },
            open: { frames: 6, label: 'פתוח' }
        },
        defaultView: 'closed'
    },
    'flower-standard': {
        name: 'Flower Standard',
        nameHe: 'קופסא לשקית תפרחת',
        views: {
            closed: { frames: 6, label: 'סגור' },
            open: { frames: 6, label: 'פתוח' }
        },
        defaultView: 'closed'
    }
        // Add more products here as needed:
        // 'product-id': {
        //     name: 'Product Name',
        //     nameHe: 'שם המוצר',
        //     views: {
        //         closed: { frames: 8, label: 'סגור' },
        //         open: { frames: 8, label: 'פתוח' }
        //     },
        //     defaultView: 'closed'
        // }
    };

    const CONFIG = {
        basePath: './images/360/',
        defaultSpeed: 450,
        minSpeed: 200,
        maxSpeed: 700
    };

    // =====================================================
    // STATE
    // =====================================================
    let currentProduct = null;
    let currentView = 'closed';
    let currentFrame = 1;
    let isPlaying = true;
    let animationInterval = null;
    let speed = CONFIG.defaultSpeed;
    let loadedImages = {};

    // =====================================================
    // ICONS (SVG)
    // =====================================================
    const ICONS = {
        rotate360: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>`,
        close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
        </svg>`,
        play: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
        </svg>`,
        pause: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16"/>
            <rect x="14" y="4" width="4" height="16"/>
        </svg>`
    };

    // =====================================================
    // UTILITY FUNCTIONS
    // =====================================================
    function getImagePath(productId, view, frameNum) {
        const paddedNum = String(frameNum).padStart(2, '0');
        return `${CONFIG.basePath}${productId}/${productId}-${view}-${paddedNum}.png`;
    }

    function createElement(tag, className, innerHTML) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (innerHTML) el.innerHTML = innerHTML;
        return el;
    }

    // =====================================================
    // CREATE MODAL HTML
    // =====================================================
    function createModal() {
        if (document.getElementById('viewer-360-overlay')) return;

        const overlay = createElement('div', 'viewer-360-overlay');
        overlay.id = 'viewer-360-overlay';
        overlay.innerHTML = `
            <div class="viewer-360-modal">
                <div class="viewer-360-header">
                    <h3 class="viewer-360-title" id="viewer-360-title"></h3>
                    <button class="viewer-360-close" id="viewer-360-close">${ICONS.close}</button>
                </div>
                <div class="viewer-360-tabs" id="viewer-360-tabs"></div>
                <div class="viewer-360-container">
                    <div class="viewer-360-display" id="viewer-360-display">
                        <div class="viewer-360-loading" id="viewer-360-loading">
                            <div class="viewer-360-spinner"></div>
                        </div>
                        <div class="viewer-360-badge">
                            ${ICONS.rotate360}
                            360°
                        </div>
                        <div class="viewer-360-counter" id="viewer-360-counter">1 / 8</div>
                    </div>
                </div>
                <div class="viewer-360-controls">
                    <button class="viewer-360-play-btn playing" id="viewer-360-play">
                        ${ICONS.pause}
                    </button>
                    <div class="viewer-360-speed">
                        <span>איטי</span>
                        <input type="range" min="100" max="400" value="200" id="viewer-360-speed-slider">
                        <span>מהיר</span>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        // Event listeners
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeViewer();
        });

        document.getElementById('viewer-360-close').addEventListener('click', closeViewer);
        document.getElementById('viewer-360-play').addEventListener('click', togglePlay);
        document.getElementById('viewer-360-speed-slider').addEventListener('input', updateSpeed);

        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            if (!overlay.classList.contains('active')) return;
            if (e.key === 'Escape') closeViewer();
            if (e.key === ' ') { e.preventDefault(); togglePlay(); }
            if (e.key === 'ArrowRight') { stopAnimation(); showFrame(currentFrame < getFrameCount() ? currentFrame + 1 : 1); }
            if (e.key === 'ArrowLeft') { stopAnimation(); showFrame(currentFrame > 1 ? currentFrame - 1 : getFrameCount()); }
        });
    }

    // =====================================================
    // VIEWER FUNCTIONS
    // =====================================================
    function getFrameCount() {
        if (!currentProduct || !PRODUCTS_360[currentProduct]) return 8;
        return PRODUCTS_360[currentProduct].views[currentView]?.frames || 8;
    }

    function openViewer(productId) {
        if (!PRODUCTS_360[productId]) {
            console.error('Product not found:', productId);
            return;
        }

        createModal();
        
        currentProduct = productId;
        const product = PRODUCTS_360[productId];
        currentView = product.defaultView || 'closed';
        currentFrame = 1;
        loadedImages = {};
        
        // Set title
        document.getElementById('viewer-360-title').textContent = product.nameHe || product.name;
        
        // Create tabs
        const tabsContainer = document.getElementById('viewer-360-tabs');
        tabsContainer.innerHTML = '';
        Object.keys(product.views).forEach(viewKey => {
            const view = product.views[viewKey];
            const tab = createElement('button', 'viewer-360-tab' + (viewKey === currentView ? ' active' : ''));
            tab.textContent = view.label;
            tab.dataset.view = viewKey;
            tab.addEventListener('click', () => switchView(viewKey));
            tabsContainer.appendChild(tab);
        });

        // Show modal
        document.getElementById('viewer-360-overlay').classList.add('active');
        document.body.style.overflow = 'hidden';

        // Load images
        loadImages(currentView);
    }

    function closeViewer() {
        stopAnimation();
        document.getElementById('viewer-360-overlay').classList.remove('active');
        document.body.style.overflow = '';
        
        // Clear images
        const display = document.getElementById('viewer-360-display');
        display.querySelectorAll('img').forEach(img => img.remove());
        loadedImages = {};
    }

    function loadImages(view) {
        const display = document.getElementById('viewer-360-display');
        const loading = document.getElementById('viewer-360-loading');
        const frameCount = PRODUCTS_360[currentProduct].views[view].frames;
        
        loading.style.display = 'block';
        
        let loaded = 0;
        
        for (let i = 1; i <= frameCount; i++) {
            const img = document.createElement('img');
            img.src = getImagePath(currentProduct, view, i);
            img.dataset.view = view;
            img.dataset.frame = i;
            img.alt = `${currentProduct} ${view} frame ${i}`;
            
            img.onload = () => {
                loaded++;
                if (loaded === frameCount) {
                    loadedImages[view] = true;
                    loading.style.display = 'none';
                    showFrame(1);
                    startAnimation();
                }
            };
            
            img.onerror = () => {
                console.error('Failed to load:', img.src);
                loaded++;
                if (loaded === frameCount) {
                    loadedImages[view] = true;
                    loading.style.display = 'none';
                    showFrame(1);
                    startAnimation();
                }
            };
            
            display.appendChild(img);
        }
    }

    function showFrame(frameNum) {
        const display = document.getElementById('viewer-360-display');
        const images = display.querySelectorAll('img');
        
        images.forEach(img => {
            if (img.dataset.view === currentView && parseInt(img.dataset.frame) === frameNum) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
        
        currentFrame = frameNum;
        document.getElementById('viewer-360-counter').textContent = `${frameNum} / ${getFrameCount()}`;
    }

    function switchView(view) {
        if (view === currentView) return;
        
        currentView = view;
        
        // Update tabs
        document.querySelectorAll('.viewer-360-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.view === view);
        });
        
        // Load images if not loaded
        if (!loadedImages[view]) {
            loadImages(view);
        } else {
            showFrame(1);
        }
    }

    function startAnimation() {
        if (animationInterval) clearInterval(animationInterval);
        
        animationInterval = setInterval(() => {
            let nextFrame = currentFrame + 1;
            if (nextFrame > getFrameCount()) nextFrame = 1;
            showFrame(nextFrame);
        }, speed);
        
        isPlaying = true;
        updatePlayButton();
    }

    function stopAnimation() {
        if (animationInterval) {
            clearInterval(animationInterval);
            animationInterval = null;
        }
        isPlaying = false;
        updatePlayButton();
    }

    function togglePlay() {
        if (isPlaying) {
            stopAnimation();
        } else {
            startAnimation();
        }
    }

    function updatePlayButton() {
        const btn = document.getElementById('viewer-360-play');
        if (isPlaying) {
            btn.classList.add('playing');
            btn.innerHTML = ICONS.pause;
        } else {
            btn.classList.remove('playing');
            btn.innerHTML = ICONS.play;
        }
    }

    function updateSpeed() {
        const slider = document.getElementById('viewer-360-speed-slider');
        speed = CONFIG.maxSpeed - parseInt(slider.value) + CONFIG.minSpeed;
        if (isPlaying) {
            startAnimation();
        }
    }

    // =====================================================
    // CREATE 360° BUTTONS
    // =====================================================
    function create360Button(productId) {
        const btn = createElement('button', 'btn-360-view');
        btn.innerHTML = `${ICONS.rotate360} צפייה ב-360°`;
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openViewer(productId);
        });
        return btn;
    }

    // =====================================================
    // AUTO-INJECT BUTTONS (customize this for your site)
    // =====================================================
function injectButtons() {
        Object.keys(PRODUCTS_360).forEach(productId => {
            const product = PRODUCTS_360[productId];
            const allCards = document.querySelectorAll('.product-card');
            
            allCards.forEach(card => {
                if (card.querySelector('.btn-360-view')) return;
                
              const productName = card.querySelector('.product-description');
                if (productName && productName.textContent.includes(product.nameHe)) {
                    card.appendChild(create360Button(productId));
                }
            });
        });
    }

    // =====================================================
    // GLOBAL API
    // =====================================================
    window.Bazelet360 = {
        open: openViewer,
        close: closeViewer,
        addProduct: function(id, config) {
            PRODUCTS_360[id] = config;
        },
        createButton: create360Button,
        injectButtons: injectButtons
    };

    // =====================================================
    // INITIALIZE
    // =====================================================
    function init() {
        createModal();
        
        // Try to auto-inject buttons after a short delay (for React apps)
        setTimeout(injectButtons, 1000);
        setTimeout(injectButtons, 2000);
        setTimeout(injectButtons, 3000);
        
        // Also watch for DOM changes (for SPA navigation)
        const observer = new MutationObserver(() => {
            setTimeout(injectButtons, 500);
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
