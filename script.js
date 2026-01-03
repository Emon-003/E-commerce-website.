// Product data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Premium quality wireless headphones with active noise cancellation technology. Features 30-hour battery life, premium sound quality, and comfortable over-ear design.",
        price: 99.99,
        image: "🎧",
        rating: 4.5,
        reviews: 324
    },
    {
        id: 2,
        name: "Smart Watch",
        description: "Feature-rich smartwatch with comprehensive fitness tracking, heart rate monitoring, GPS, and smartphone notifications. Water-resistant design perfect for active lifestyles.",
        price: 199.99,
        image: "⌚",
        rating: 4.8,
        reviews: 512
    },
    {
        id: 3,
        name: "Laptop Stand",
        description: "Ergonomic aluminum laptop stand designed for better posture and workspace organization. Adjustable height and angle with built-in cable management.",
        price: 49.99,
        image: "💻",
        rating: 4.6,
        reviews: 189
    },
    {
        id: 4,
        name: "Wireless Mouse",
        description: "Ergonomic wireless mouse with precision tracking and long-lasting battery life. Features customizable buttons and smooth scrolling for enhanced productivity.",
        price: 29.99,
        image: "🖱️",
        rating: 4.4,
        reviews: 267
    },
    {
        id: 5,
        name: "USB-C Hub",
        description: "Multi-port USB-C hub with 8-in-1 connectivity including HDMI, USB 3.0, SD card reader, and power delivery. Perfect for modern laptops and devices.",
        price: 39.99,
        image: "🔌",
        rating: 4.7,
        reviews: 445
    },
    {
        id: 6,
        name: "Mechanical Keyboard",
        description: "RGB mechanical keyboard with customizable backlighting and premium switches. Features programmable keys, wrist rest, and durable construction for gaming and typing.",
        price: 129.99,
        image: "⌨️",
        rating: 4.9,
        reviews: 678
    },
    {
        id: 7,
        name: "Webcam HD",
        description: "1080p HD webcam with built-in dual microphones and automatic low-light correction. Perfect for video calls, streaming, and content creation.",
        price: 79.99,
        image: "📹",
        rating: 4.5,
        reviews: 298
    },
    {
        id: 8,
        name: "Desk Lamp",
        description: "LED desk lamp with adjustable brightness levels and color temperature. Touch controls, USB charging port, and modern minimalist design.",
        price: 34.99,
        image: "💡",
        rating: 4.3,
        reviews: 156
    },
    {
        id: 9,
        name: "Wireless Charger",
        description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator and overcharge protection for safe charging.",
        price: 24.99,
        image: "🔋",
        rating: 4.6,
        reviews: 423
    },
    {
        id: 10,
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker with 360-degree sound, waterproof design, and 20-hour battery life. Perfect for outdoor adventures and indoor entertainment.",
        price: 59.99,
        image: "🔊",
        rating: 4.7,
        reviews: 567
    },
    {
        id: 11,
        name: "Tablet Stand",
        description: "Adjustable tablet stand with multiple viewing angles. Durable aluminum construction with rubber padding to protect your device from scratches.",
        price: 19.99,
        image: "📱",
        rating: 4.5,
        reviews: 234
    },
    {
        id: 12,
        name: "Cable Organizer",
        description: "Cable management system with adhesive clips and ties. Keep your workspace tidy and organized with this essential desk accessory.",
        price: 12.99,
        image: "🔗",
        rating: 4.4,
        reviews: 189
    },
    {
        id: 13,
        name: "Monitor Stand",
        description: "Elevated monitor stand with built-in storage compartments. Raises your monitor to eye level and provides extra desk space underneath.",
        price: 44.99,
        image: "🖥️",
        rating: 4.6,
        reviews: 312
    },
    {
        id: 14,
        name: "Phone Case",
        description: "Protective phone case with shock-absorbing technology and raised edges. Available in multiple colors with precise cutouts for all ports.",
        price: 29.99,
        image: "📱",
        rating: 4.5,
        reviews: 678
    },
    {
        id: 15,
        name: "Laptop Sleeve",
        description: "Premium laptop sleeve with padded protection and water-resistant exterior. Fits laptops up to 15.6 inches with extra pocket for accessories.",
        price: 32.99,
        image: "💼",
        rating: 4.7,
        reviews: 445
    },
    {
        id: 16,
        name: "USB Flash Drive",
        description: "High-speed USB 3.0 flash drive with 128GB storage capacity. Compact design with keychain loop and data encryption software included.",
        price: 18.99,
        image: "💾",
        rating: 4.6,
        reviews: 523
    },
    {
        id: 17,
        name: "Screen Protector",
        description: "Tempered glass screen protector with anti-fingerprint coating. Easy installation kit included with bubble-free application.",
        price: 14.99,
        image: "🛡️",
        rating: 4.4,
        reviews: 389
    },
    {
        id: 18,
        name: "Desk Mat",
        description: "Large desk mat with smooth surface for mouse tracking and keyboard placement. Waterproof and easy to clean with non-slip base.",
        price: 22.99,
        image: "🖱️",
        rating: 4.5,
        reviews: 267
    },
    {
        id: 19,
        name: "Power Bank",
        description: "High-capacity 20000mAh power bank with fast charging technology. Dual USB ports and LED battery indicator for multiple device charging.",
        price: 39.99,
        image: "🔌",
        rating: 4.7,
        reviews: 612
    },
    {
        id: 20,
        name: "Laptop Cooling Pad",
        description: "Laptop cooling pad with dual fans and adjustable height. Prevents overheating during intensive tasks with quiet operation and USB-powered fans.",
        price: 27.99,
        image: "❄️",
        rating: 4.5,
        reviews: 298
    },
    {
        id: 21,
        name: "Wireless Earbuds",
        description: "True wireless earbuds with active noise cancellation and 8-hour battery life. Includes charging case with 24-hour total playtime and touch controls.",
        price: 79.99,
        image: "🎧",
        rating: 4.6,
        reviews: 756
    },
    {
        id: 22,
        name: "HDMI Cable",
        description: "High-speed HDMI 2.0 cable supporting 4K resolution at 60Hz. Gold-plated connectors and durable braided design for reliable signal transmission.",
        price: 16.99,
        image: "📺",
        rating: 4.5,
        reviews: 234
    },
    {
        id: 23,
        name: "Laptop Bag",
        description: "Professional laptop bag with padded compartment and multiple pockets. Water-resistant material with comfortable shoulder strap and luggage handle pass-through.",
        price: 54.99,
        image: "🎒",
        rating: 4.7,
        reviews: 423
    },
    {
        id: 24,
        name: "USB-C Cable",
        description: "Fast charging USB-C cable with data transfer speeds up to 480Mbps. Reinforced connectors and 6-foot length for flexible positioning.",
        price: 11.99,
        image: "🔌",
        rating: 4.4,
        reviews: 567
    },
    {
        id: 25,
        name: "Gaming Headset",
        description: "Professional gaming headset with 7.1 surround sound, RGB lighting, and noise-canceling microphone. Comfortable for long gaming sessions.",
        price: 89.99,
        image: "🎮",
        rating: 4.7,
        reviews: 823
    },
    {
        id: 26,
        name: "External Hard Drive",
        description: "2TB portable external hard drive with USB 3.0 connectivity. Fast data transfer speeds and compact design for easy storage.",
        price: 69.99,
        image: "💿",
        rating: 4.6,
        reviews: 456
    },
    {
        id: 27,
        name: "Smartphone Gimbal",
        description: "3-axis smartphone gimbal stabilizer for smooth video recording. Perfect for vlogging, live streaming, and content creation.",
        price: 119.99,
        image: "📸",
        rating: 4.8,
        reviews: 312
    },
    {
        id: 28,
        name: "Wireless Charging Stand",
        description: "Adjustable wireless charging stand for smartphones and smartwatches. Dual-device charging with fast charging support.",
        price: 34.99,
        image: "📱",
        rating: 4.5,
        reviews: 289
    },
    {
        id: 29,
        name: "Laptop Cooling Fan",
        description: "Portable laptop cooling pad with 6 quiet fans and adjustable height. USB-powered with blue LED lighting.",
        price: 29.99,
        image: "❄️",
        rating: 4.4,
        reviews: 198
    },
    {
        id: 30,
        name: "Bluetooth Car Adapter",
        description: "Wireless Bluetooth car adapter for hands-free calling and music streaming. Easy installation with clear audio quality.",
        price: 19.99,
        image: "🚗",
        rating: 4.5,
        reviews: 445
    },
    {
        id: 31,
        name: "Smart Ring Light",
        description: "18-inch LED ring light with adjustable brightness and color temperature. Perfect for video calls, streaming, and photography.",
        price: 49.99,
        image: "💡",
        rating: 4.6,
        reviews: 567
    },
    {
        id: 32,
        name: "USB-C to HDMI Adapter",
        description: "USB-C to HDMI adapter supporting 4K resolution at 60Hz. Compact design for presentations and media streaming.",
        price: 24.99,
        image: "🔌",
        rating: 4.5,
        reviews: 234
    },
    {
        id: 33,
        name: "Mechanical Keypad",
        description: "Programmable mechanical keypad with RGB backlighting. Perfect for gaming macros and productivity shortcuts.",
        price: 45.99,
        image: "⌨️",
        rating: 4.7,
        reviews: 189
    },
    {
        id: 34,
        name: "Portable Monitor",
        description: "15.6-inch portable USB-C monitor with Full HD resolution. Lightweight design perfect for dual-screen setups on the go.",
        price: 199.99,
        image: "🖥️",
        rating: 4.6,
        reviews: 278
    },
    {
        id: 35,
        name: "Cable Management Box",
        description: "Cable management box to hide and organize all your cables. Fits power strips and keeps your workspace clean.",
        price: 16.99,
        image: "📦",
        rating: 4.4,
        reviews: 345
    },
    {
        id: 36,
        name: "Wireless Presenter",
        description: "Wireless presentation remote with laser pointer and USB receiver. Ergonomic design with long battery life.",
        price: 22.99,
        image: "🖱️",
        rating: 4.5,
        reviews: 167
    },
    {
        id: 37,
        name: "USB Microphone",
        description: "Professional USB condenser microphone with cardioid pickup pattern. Perfect for podcasting, streaming, and voice recording.",
        price: 79.99,
        image: "🎤",
        rating: 4.7,
        reviews: 512
    },
    {
        id: 38,
        name: "Laptop Privacy Screen",
        description: "Privacy screen filter for laptops that prevents side-angle viewing. Protects your screen from prying eyes in public spaces.",
        price: 42.99,
        image: "🛡️",
        rating: 4.5,
        reviews: 234
    },
    {
        id: 39,
        name: "Smart Desk Pad",
        description: "Large desk pad with wireless charging zone and USB ports. Waterproof surface with non-slip base for mouse and keyboard.",
        price: 54.99,
        image: "🖱️",
        rating: 4.6,
        reviews: 389
    },
    {
        id: 40,
        name: "USB Hub with Ethernet",
        description: "7-port USB 3.0 hub with Gigabit Ethernet adapter. Perfect for laptops with limited ports and wired internet connection.",
        price: 32.99,
        image: "🔌",
        rating: 4.5,
        reviews: 267
    },
    {
        id: 41,
        name: "Tablet Keyboard Case",
        description: "Detachable keyboard case for tablets with backlit keys and trackpad. Protective case with multiple viewing angles.",
        price: 64.99,
        image: "⌨️",
        rating: 4.6,
        reviews: 423
    },
    {
        id: 42,
        name: "Wireless Charging Mouse Pad",
        description: "Extended mouse pad with wireless charging zone for compatible mice. Smooth surface for precise mouse tracking.",
        price: 39.99,
        image: "🖱️",
        rating: 4.5,
        reviews: 298
    },
    {
        id: 43,
        name: "HDMI Switch",
        description: "4-port HDMI switch with remote control. Switch between multiple devices on a single display with 4K support.",
        price: 28.99,
        image: "📺",
        rating: 4.4,
        reviews: 189
    },
    {
        id: 44,
        name: "Laptop Lock",
        description: "Kensington-style laptop lock with combination dial. Secure your laptop in public spaces with durable steel cable.",
        price: 24.99,
        image: "🔒",
        rating: 4.3,
        reviews: 156
    },
    {
        id: 45,
        name: "USB-C Docking Station",
        description: "12-in-1 USB-C docking station with dual 4K HDMI, USB 3.0 ports, SD card reader, and 100W power delivery.",
        price: 129.99,
        image: "🔌",
        rating: 4.8,
        reviews: 678
    },
    {
        id: 46,
        name: "Ergonomic Mouse",
        description: "Vertical ergonomic mouse to reduce wrist strain. Wireless design with precision tracking and long battery life.",
        price: 35.99,
        image: "🖱️",
        rating: 4.6,
        reviews: 445
    },
    {
        id: 47,
        name: "Laptop Stand with Drawer",
        description: "Adjustable laptop stand with built-in storage drawer. Organize your workspace while improving posture and airflow.",
        price: 59.99,
        image: "💻",
        rating: 4.5,
        reviews: 312
    },
    {
        id: 48,
        name: "USB-C Multiport Adapter",
        description: "Compact USB-C adapter with HDMI, USB 3.0, USB-C PD, and SD/TF card reader. Perfect for MacBook and modern laptops.",
        price: 36.99,
        image: "🔌",
        rating: 4.7,
        reviews: 523
    },
    {
        id: 49,
        name: "Wireless Keyboard Mouse Combo",
        description: "Wireless keyboard and mouse combo with 2.4GHz connection. Ergonomic design with long battery life and quiet keys.",
        price: 42.99,
        image: "⌨️",
        rating: 4.5,
        reviews: 389
    },
    {
        id: 50,
        name: "Portable SSD",
        description: "1TB portable SSD with USB-C connectivity and 1050MB/s read speeds. Rugged design with shock and water resistance.",
        price: 89.99,
        image: "💾",
        rating: 4.8,
        reviews: 612
    },
    {
        id: 51,
        name: "Smartphone Tripod",
        description: "Adjustable smartphone tripod with Bluetooth remote shutter. Flexible legs and phone mount for stable video and photos.",
        price: 18.99,
        image: "📱",
        rating: 4.4,
        reviews: 267
    },
    {
        id: 52,
        name: "USB-C to Lightning Cable",
        description: "Fast charging USB-C to Lightning cable with MFi certification. Durable braided design with 6-foot length.",
        price: 19.99,
        image: "🔌",
        rating: 4.5,
        reviews: 445
    },
    {
        id: 53,
        name: "Laptop Sleeve with Handle",
        description: "Premium laptop sleeve with top handle and side pocket. Padded protection with water-resistant exterior for 13-15 inch laptops.",
        price: 38.99,
        image: "💼",
        rating: 4.6,
        reviews: 234
    },
    {
        id: 54,
        name: "Wireless Earbuds Pro",
        description: "Premium true wireless earbuds with active noise cancellation and transparency mode. 8-hour battery with 24-hour charging case.",
        price: 149.99,
        image: "🎧",
        rating: 4.8,
        reviews: 892
    }
];

// Cart management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let filteredProducts = [...products];
let currentPage = 1;

// Get items per page based on screen size
function getItemsPerPage() {
    return window.innerWidth >= 768 ? 9 : 6;
}

let itemsPerPage = getItemsPerPage();

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('productsGrid')) {
        displayProducts();
        setupSearch();
        setupSorting();
        setupResizeHandler();
        setupMobileMenu();
    }
    updateCartCount();
    setupSmoothScrolling();
});

// Handle window resize to update items per page
function setupResizeHandler() {
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            const newItemsPerPage = getItemsPerPage();
            if (newItemsPerPage !== itemsPerPage) {
                itemsPerPage = newItemsPerPage;
                // Recalculate current page to maintain position
                const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
                if (currentPage > totalPages) {
                    currentPage = totalPages || 1;
                }
                displayProducts(filteredProducts, currentPage);
            }
        }, 250);
    });
}

// Display products with pagination
function displayProducts(productsToShow = filteredProducts, page = 1) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    currentPage = page;
    
    // Update items per page based on current screen size
    itemsPerPage = getItemsPerPage();

    if (productsToShow.length === 0) {
        productsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);">No products found. Try adjusting your search or filters.</div>';
        updateResultsCount(0);
        document.getElementById('paginationContainer').innerHTML = '';
        return;
    }

    // Calculate pagination
    const totalPages = Math.ceil(productsToShow.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = productsToShow.slice(startIndex, endIndex);

    // Display products for current page
    paginatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        const stars = generateStars(product.rating);
        productCard.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <span class="product-rating-stars">${stars}</span>
                    <span class="product-rating-count">${product.rating} (${product.reviews})</span>
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                    <button class="btn btn-secondary" onclick="viewProduct(${product.id})">View Details</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });

    updateResultsCount(productsToShow.length);
    displayPagination(totalPages, page, productsToShow);
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar) stars += '☆';
    const emptyStars = 5 - Math.ceil(rating);
    stars += '☆'.repeat(emptyStars);
    return stars;
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            if (searchTerm === '') {
                filteredProducts = [...products];
            } else {
                filteredProducts = products.filter(product => 
                    product.name.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm)
                );
            }
            displayProducts(filteredProducts, 1); // Reset to page 1 when searching
        });
    }
}

// Setup sorting functionality
function setupSorting() {
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function(e) {
            const sortValue = e.target.value;
            let sorted = [...filteredProducts];
            
            switch(sortValue) {
                case 'price-low':
                    sorted.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    sorted.sort((a, b) => b.price - a.price);
                    break;
                case 'name':
                    sorted.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                default:
                    sorted = [...filteredProducts];
            }
            
            filteredProducts = sorted;
            displayProducts(sorted, 1); // Reset to page 1 when sorting
        });
    }
}

// Update results count
function updateResultsCount(count) {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = `${count} product${count !== 1 ? 's' : ''} found`;
    }
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    cart = getCart(); // Refresh cart from localStorage
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show notification
    showNotification(`${product.name} added to cart!`);
}

// Remove from cart
function removeFromCart(productId) {
    cart = getCart(); // Refresh cart from localStorage
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    if (document.getElementById('cartItems')) {
        displayCart();
    }
    
    // Show notification
    const product = products.find(p => p.id === productId);
    if (product) {
        showNotification(`${product.name} removed from cart`);
    }
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        if (document.getElementById('cartItems')) {
            displayCart();
        }
    }
}

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const currentCart = getCart();
        const totalItems = currentCart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// View product details
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const stars = generateStars(product.rating);
        const modal = document.createElement('div');
        modal.className = 'product-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            padding: 20px;
            animation: fadeIn 0.3s ease-out;
        `;
        modal.innerHTML = `
            <div class="product-modal-content" style="
                background-color: white;
                border-radius: 1rem;
                padding: 2rem;
                max-width: 600px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            ">
                <button class="modal-close" onclick="this.closest('.product-modal').remove()" style="
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: var(--text-light);
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: all 0.3s;
                ">&times;</button>
                <div style="text-align: center; margin-bottom: 1.5rem;">
                    <div style="font-size: 5rem; margin-bottom: 1rem;">${product.image}</div>
                    <h2 style="font-size: 1.75rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-color);">${product.name}</h2>
                    <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 1rem;">
                        <span style="color: #fbbf24; font-size: 1.1rem;">${stars}</span>
                        <span style="color: var(--text-light);">${product.rating} (${product.reviews} reviews)</span>
                    </div>
                    <div style="font-size: 2rem; font-weight: 700; color: var(--primary-color); margin-bottom: 1.5rem;">$${product.price.toFixed(2)}</div>
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.75rem; color: var(--text-color);">Description</h3>
                    <p style="color: var(--text-light); line-height: 1.7;">${product.description}</p>
                </div>
                <div style="display: flex; gap: 1rem;">
                    <button class="btn btn-primary" onclick="addToCart(${product.id}); this.closest('.product-modal').remove();" style="flex: 1;">Add to Cart</button>
                    <button class="btn btn-secondary" onclick="this.closest('.product-modal').remove();" style="flex: 1;">Close</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Close on outside click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        // Close on Escape key
        const escapeHandler = function(e) {
            if (e.key === 'Escape') {
                modal.remove();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: var(--success-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Display pagination controls
function displayPagination(totalPages, currentPage, productsToShow) {
    const paginationContainer = document.getElementById('paginationContainer');
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }

    let paginationHTML = '<div class="pagination">';
    
    // Previous button
    if (currentPage > 1) {
        paginationHTML += `<button class="pagination-btn" onclick="goToPage(${currentPage - 1})" aria-label="Previous page">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Previous
        </button>`;
    } else {
        paginationHTML += `<button class="pagination-btn disabled" disabled aria-label="Previous page">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Previous
        </button>`;
    }

    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
        paginationHTML += `<button class="pagination-btn" onclick="goToPage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += `<span class="pagination-ellipsis">...</span>`;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        if (i === currentPage) {
            paginationHTML += `<button class="pagination-btn active">${i}</button>`;
        } else {
            paginationHTML += `<button class="pagination-btn" onclick="goToPage(${i})">${i}</button>`;
        }
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<span class="pagination-ellipsis">...</span>`;
        }
        paginationHTML += `<button class="pagination-btn" onclick="goToPage(${totalPages})">${totalPages}</button>`;
    }

    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `<button class="pagination-btn" onclick="goToPage(${currentPage + 1})" aria-label="Next page">
            Next
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </button>`;
    } else {
        paginationHTML += `<button class="pagination-btn disabled" disabled aria-label="Next page">
            Next
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </button>`;
    }

    paginationHTML += '</div>';
    
    // Page info
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, productsToShow.length);
    paginationHTML += `<div class="pagination-info">Showing ${startItem}-${endItem} of ${productsToShow.length} products</div>`;
    
    paginationContainer.innerHTML = paginationHTML;
}

// Go to specific page
function goToPage(page) {
    displayProducts(filteredProducts, page);
    // Scroll to top of products section
    document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Setup mobile menu toggle
function setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-active');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('mobile-active');
                mobileMenuToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navMenu.classList.remove('mobile-active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
}

// Setup smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                // Check if we're on the same page
                if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
                // If on different page, let the link navigate normally
            }
        });
    });
    
    // Handle footer links that navigate to homepage sections
    document.querySelectorAll('.footer-link[href*="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.includes('index.html#')) {
                const hash = href.split('#')[1];
                // If already on index.html, scroll to section
                if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
                    e.preventDefault();
                    const target = document.querySelector('#' + hash);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    } else {
                        // If section doesn't exist, show a message or scroll to top
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }
                // Otherwise, let the link navigate to index.html with hash
            }
        });
    });
}

// Get cart
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

