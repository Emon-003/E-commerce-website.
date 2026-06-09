// Product data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Premium quality wireless headphones with active noise cancellation technology. Features 30-hour battery life, premium sound quality, and comfortable over-ear design.",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 324
    },
    {
        id: 2,
        name: "Smart Watch",
        description: "Feature-rich smartwatch with comprehensive fitness tracking, heart rate monitoring, GPS, and smartphone notifications. Water-resistant design perfect for active lifestyles.",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 512
    },
    {
        id: 3,
        name: "Laptop Stand",
        description: "Ergonomic aluminum laptop stand designed for better posture and workspace organization. Adjustable height and angle with built-in cable management.",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 189
    },
    {
        id: 4,
        name: "Wireless Mouse",
        description: "Ergonomic wireless mouse with precision tracking and long-lasting battery life. Features customizable buttons and smooth scrolling for enhanced productivity.",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
        rating: 4.4,
        reviews: 267
    },
    {
        id: 5,
        name: "USB-C Hub",
        description: "Multi-port USB-C hub with 8-in-1 connectivity including HDMI, USB 3.0, SD card reader, and power delivery. Perfect for modern laptops and devices.",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 445
    },
    {
        id: 6,
        name: "Mechanical Keyboard",
        description: "RGB mechanical keyboard with customizable backlighting and premium switches. Features programmable keys, wrist rest, and durable construction for gaming and typing.",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop",
        rating: 4.9,
        reviews: 678
    },
    {
        id: 7,
        name: "Webcam HD",
        description: "1080p HD webcam with built-in dual microphones and automatic low-light correction. Perfect for video calls, streaming, and content creation.",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 298
    },
    {
        id: 8,
        name: "Desk Lamp",
        description: "LED desk lamp with adjustable brightness levels and color temperature. Touch controls, USB charging port, and modern minimalist design.",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
        rating: 4.3,
        reviews: 156
    },
    {
        id: 9,
        name: "Wireless Charger",
        description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator and overcharge protection for safe charging.",
        price: 24.99,
        image: "https://picsum.photos/id/180/400/400",
        rating: 4.6,
        reviews: 423
    },
    {
        id: 10,
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker with 360-degree sound, waterproof design, and 20-hour battery life. Perfect for outdoor adventures and indoor entertainment.",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 567
    },
    {
        id: 11,
        name: "Tablet Stand",
        description: "Adjustable tablet stand with multiple viewing angles. Durable aluminum construction with rubber padding to protect your device from scratches.",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 234
    },
    {
        id: 12,
        name: "Cable Organizer",
        description: "Cable management system with adhesive clips and ties. Keep your workspace tidy and organized with this essential desk accessory.",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
        rating: 4.4,
        reviews: 189
    },
    {
        id: 13,
        name: "Monitor Stand",
        description: "Elevated monitor stand with built-in storage compartments. Raises your monitor to eye level and provides extra desk space underneath.",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 312
    },
    {
        id: 14,
        name: "Phone Case",
        description: "Protective phone case with shock-absorbing technology and raised edges. Available in multiple colors with precise cutouts for all ports.",
        price: 29.99,
        image: "https://picsum.photos/id/160/400/400",
        rating: 4.5,
        reviews: 678
    },
    {
        id: 15,
        name: "Laptop Sleeve",
        description: "Premium laptop sleeve with padded protection and water-resistant exterior. Fits laptops up to 15.6 inches with extra pocket for accessories.",
        price: 32.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 445
    },
    {
        id: 16,
        name: "USB Flash Drive",
        description: "High-speed USB 3.0 flash drive with 128GB storage capacity. Compact design with keychain loop and data encryption software included.",
        price: 18.99,
        image: "https://picsum.photos/id/96/400/400",
        rating: 4.6,
        reviews: 523
    },
    {
        id: 17,
        name: "Screen Protector",
        description: "Tempered glass screen protector with anti-fingerprint coating. Easy installation kit included with bubble-free application.",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
        rating: 4.4,
        reviews: 389
    },
    {
        id: 18,
        name: "Desk Mat",
        description: "Large desk mat with smooth surface for mouse tracking and keyboard placement. Waterproof and easy to clean with non-slip base.",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 267
    },
    {
        id: 19,
        name: "Power Bank",
        description: "High-capacity 20000mAh power bank with fast charging technology. Dual USB ports and LED battery indicator for multiple device charging.",
        price: 39.99,
        image: "https://picsum.photos/id/119/400/400",
        rating: 4.7,
        reviews: 612
    },
    {
        id: 20,
        name: "Laptop Cooling Pad",
        description: "Laptop cooling pad with dual fans and adjustable height. Prevents overheating during intensive tasks with quiet operation and USB-powered fans.",
        price: 27.99,
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 298
    },
    {
        id: 21,
        name: "Wireless Earbuds",
        description: "True wireless earbuds with active noise cancellation and 8-hour battery life. Includes charging case with 24-hour total playtime and touch controls.",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 756
    },
    {
        id: 22,
        name: "HDMI Cable",
        description: "High-speed HDMI 2.0 cable supporting 4K resolution at 60Hz. Gold-plated connectors and durable braided design for reliable signal transmission.",
        price: 16.99,
        image: "https://picsum.photos/id/175/400/400",
        rating: 4.5,
        reviews: 234
    },
    {
        id: 23,
        name: "Laptop Bag",
        description: "Professional laptop bag with padded compartment and multiple pockets. Water-resistant material with comfortable shoulder strap and luggage handle pass-through.",
        price: 54.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 423
    },
    {
        id: 24,
        name: "USB-C Cable",
        description: "Fast charging USB-C cable with data transfer speeds up to 480Mbps. Reinforced connectors and 6-foot length for flexible positioning.",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        rating: 4.4,
        reviews: 567
    },
    {
        id: 25,
        name: "Gaming Headset",
        description: "Professional gaming headset with 7.1 surround sound, RGB lighting, and noise-canceling microphone. Comfortable for long gaming sessions.",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 823
    },
    {
        id: 26,
        name: "External Hard Drive",
        description: "2TB portable external hard drive with USB 3.0 connectivity. Fast data transfer speeds and compact design for easy storage.",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 456
    },
    {
        id: 27,
        name: "Smartphone Gimbal",
        description: "3-axis smartphone gimbal stabilizer for smooth video recording. Perfect for vlogging, live streaming, and content creation.",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 312
    },
    {
        id: 28,
        name: "Wireless Charging Stand",
        description: "Adjustable wireless charging stand for smartphones and smartwatches. Dual-device charging with fast charging support.",
        price: 34.99,
        image: "https://picsum.photos/id/48/400/400",
        rating: 4.5,
        reviews: 289
    },
    {
        id: 29,
        name: "Laptop Cooling Fan",
        description: "Portable laptop cooling pad with 6 quiet fans and adjustable height. USB-powered with blue LED lighting.",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=400&fit=crop",
        rating: 4.4,
        reviews: 198
    },
    {
        id: 30,
        name: "Bluetooth Car Adapter",
        description: "Wireless Bluetooth car adapter for hands-free calling and music streaming. Easy installation with clear audio quality.",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 445
    },
    {
        id: 31,
        name: "Smart Ring Light",
        description: "18-inch LED ring light with adjustable brightness and color temperature. Perfect for video calls, streaming, and photography.",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 567
    },
    {
        id: 32,
        name: "USB-C to HDMI Adapter",
        description: "USB-C to HDMI adapter supporting 4K resolution at 60Hz. Compact design for presentations and media streaming.",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 234
    },
    {
        id: 33,
        name: "Mechanical Keypad",
        description: "Programmable mechanical keypad with RGB backlighting. Perfect for gaming macros and productivity shortcuts.",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 189
    },
    {
        id: 34,
        name: "Portable Monitor",
        description: "15.6-inch portable USB-C monitor with Full HD resolution. Lightweight design perfect for dual-screen setups on the go.",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 278
    },
    {
        id: 35,
        name: "Cable Management Box",
        description: "Cable management box to hide and organize all your cables. Fits power strips and keeps your workspace clean.",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
        rating: 4.4,
        reviews: 345
    },
    {
        id: 36,
        name: "Wireless Presenter",
        description: "Wireless presentation remote with laser pointer and USB receiver. Ergonomic design with long battery life.",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 167
    },
    {
        id: 37,
        name: "USB Microphone",
        description: "Professional USB condenser microphone with cardioid pickup pattern. Perfect for podcasting, streaming, and voice recording.",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 512
    },
    {
        id: 38,
        name: "Laptop Privacy Screen",
        description: "Privacy screen filter for laptops that prevents side-angle viewing. Protects your screen from prying eyes in public spaces.",
        price: 42.99,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 234
    },
    {
        id: 39,
        name: "Smart Desk Pad",
        description: "Large desk pad with wireless charging zone and USB ports. Waterproof surface with non-slip base for mouse and keyboard.",
        price: 54.99,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 389
    },
    {
        id: 40,
        name: "USB Hub with Ethernet",
        description: "7-port USB 3.0 hub with Gigabit Ethernet adapter. Perfect for laptops with limited ports and wired internet connection.",
        price: 32.99,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 267
    },
    {
        id: 41,
        name: "Tablet Keyboard Case",
        description: "Detachable keyboard case for tablets with backlit keys and trackpad. Protective case with multiple viewing angles.",
        price: 64.99,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 423
    },
    {
        id: 42,
        name: "Wireless Charging Mouse Pad",
        description: "Extended mouse pad with wireless charging zone for compatible mice. Smooth surface for precise mouse tracking.",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 298
    },
    {
        id: 43,
        name: "HDMI Switch",
        description: "4-port HDMI switch with remote control. Switch between multiple devices on a single display with 4K support.",
        price: 28.99,
        image: "https://picsum.photos/id/116/400/400",
        rating: 4.4,
        reviews: 189
    },
    {
        id: 44,
        name: "Laptop Lock",
        description: "Kensington-style laptop lock with combination dial. Secure your laptop in public spaces with durable steel cable.",
        price: 24.99,
        image: "https://picsum.photos/id/42/400/400",
        rating: 4.3,
        reviews: 156
    },
    {
        id: 45,
        name: "USB-C Docking Station",
        description: "12-in-1 USB-C docking station with dual 4K HDMI, USB 3.0 ports, SD card reader, and 100W power delivery.",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 678
    },
    {
        id: 46,
        name: "Ergonomic Mouse",
        description: "Vertical ergonomic mouse to reduce wrist strain. Wireless design with precision tracking and long battery life.",
        price: 35.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 445
    },
    {
        id: 47,
        name: "Laptop Stand with Drawer",
        description: "Adjustable laptop stand with built-in storage drawer. Organize your workspace while improving posture and airflow.",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 312
    },
    {
        id: 48,
        name: "USB-C Multiport Adapter",
        description: "Compact USB-C adapter with HDMI, USB 3.0, USB-C PD, and SD/TF card reader. Perfect for MacBook and modern laptops.",
        price: 36.99,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 523
    },
    {
        id: 49,
        name: "Wireless Keyboard Mouse Combo",
        description: "Wireless keyboard and mouse combo with 2.4GHz connection. Ergonomic design with long battery life and quiet keys.",
        price: 42.99,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 389
    },
    {
        id: 50,
        name: "Portable SSD",
        description: "1TB portable SSD with USB-C connectivity and 1050MB/s read speeds. Rugged design with shock and water resistance.",
        price: 89.99,
        image: "https://picsum.photos/id/163/400/400",
        rating: 4.8,
        reviews: 612
    },
    {
        id: 51,
        name: "Smartphone Tripod",
        description: "Adjustable smartphone tripod with Bluetooth remote shutter. Flexible legs and phone mount for stable video and photos.",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
        rating: 4.4,
        reviews: 267
    },
    {
        id: 52,
        name: "USB-C to Lightning Cable",
        description: "Fast charging USB-C to Lightning cable with MFi certification. Durable braided design with 6-foot length.",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 445
    },
    {
        id: 53,
        name: "Laptop Sleeve with Handle",
        description: "Premium laptop sleeve with top handle and side pocket. Padded protection with water-resistant exterior for 13-15 inch laptops.",
        price: 38.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 234
    },
    {
        id: 54,
        name: "Wireless Earbuds Pro",
        description: "Premium true wireless earbuds with active noise cancellation and transparency mode. 8-hour battery with 24-hour charging case.",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 892
    }
];

// Add categories to products
const categoryMap = {
    1: 'Audio', 2: 'Wearables', 3: 'Desk Accessories', 4: 'Desk Accessories', 5: 'Connectivity',
    6: 'Desk Accessories', 7: 'Computing', 8: 'Desk Accessories', 9: 'Connectivity', 10: 'Audio',
    11: 'Desk Accessories', 12: 'Desk Accessories', 13: 'Desk Accessories', 14: 'Wearables',
    15: 'Computing', 16: 'Connectivity', 17: 'Desk Accessories', 18: 'Desk Accessories', 19: 'Connectivity',
    20: 'Computing', 21: 'Audio', 22: 'Connectivity', 23: 'Computing', 24: 'Connectivity',
    25: 'Computing', 26: 'Connectivity', 27: 'Wearables', 28: 'Connectivity', 29: 'Computing',
    30: 'Connectivity', 31: 'Desk Accessories', 32: 'Connectivity', 33: 'Desk Accessories',
    34: 'Computing', 35: 'Desk Accessories', 36: 'Desk Accessories', 37: 'Audio',
    38: 'Computing', 39: 'Desk Accessories', 40: 'Connectivity', 41: 'Desk Accessories',
    42: 'Desk Accessories', 43: 'Connectivity', 44: 'Computing', 45: 'Connectivity',
    46: 'Desk Accessories', 47: 'Desk Accessories', 48: 'Connectivity', 49: 'Desk Accessories',
    50: 'Connectivity', 51: 'Wearables', 52: 'Connectivity', 53: 'Computing', 54: 'Audio'
};

products.forEach(product => {
    product.category = categoryMap[product.id];
});

// Cart management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let filteredProducts = [...products];
let currentPage = 1;

// Get items per page based on screen size
function getItemsPerPage() {
    return window.innerWidth >= 768 ? 9 : 6;
}

let itemsPerPage = getItemsPerPage();

// Theme management
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
    } else {
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
        }
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const newTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
}

// Wishlist functions
function initWishlist() {
    wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    updateWishlistCount();
}

function isInWishlist(productId) {
    return wishlist.includes(productId);
}

function toggleWishlist(productId) {
    wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const index = wishlist.indexOf(productId);
    if (index !== -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(productId);
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    
    // Update UI if on wishlist page
    if (document.getElementById('wishlistProducts')) {
        displayWishlist();
    }
    
    const product = products.find(p => p.id === productId);
    if (product) {
        if (index !== -1) {
            showNotification(`${product.name} removed from wishlist`);
        } else {
            showNotification(`${product.name} added to wishlist`);
        }
    }
}

function updateWishlistCount() {
    const wishlistCount = document.getElementById('wishlistCount');
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
}

function displayWishlist() {
    const wishlistProductsContainer = document.getElementById('wishlistProducts');
    const wishlistProductIds = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistProducts = products.filter(p => wishlistProductIds.includes(p.id));
    
    if (wishlistProducts.length === 0) {
        wishlistProductsContainer.innerHTML = `
            <div class="empty-cart" id="emptyWishlist" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <p>Your wishlist is empty</p>
                <a href="index.html" class="btn btn-primary">Continue Shopping</a>
            </div>
        `;
        return;
    }
    
    let wishlistHTML = '';
    wishlistProducts.forEach(product => {
        const stars = generateStars(product.rating);
        wishlistHTML += `
            <div class="product-card" onclick="viewProduct(${product.id})">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" />
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-rating">
                        <span class="product-rating-stars">${stars}</span>
                        <span class="product-rating-count">${product.rating} (${product.reviews})</span>
                    </div>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-actions">
                        <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
                        <button class="btn btn-secondary" onclick="event.stopPropagation(); toggleWishlist(${product.id})" style="background: var(--error-color); color: white;">Remove</button>
                    </div>
                </div>
            </div>
        `;
    });
    
    wishlistProductsContainer.innerHTML = wishlistHTML;
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initWishlist();
    setupMobileMenu(); // Always call mobile menu
    
    if (document.getElementById('productsGrid')) {
        displayProducts();
        setupSearch();
        setupCategoryFilter();
        setupPriceFilter();
        setupClearFilters();
        setupSorting();
        setupResizeHandler();
    } else if (document.getElementById('productDetailsContainer')) {
        // Product details page
        displayProductDetails();
    } else if (document.getElementById('wishlistProducts')) {
        // Wishlist page
        displayWishlist();
    }
    
    updateCartCount();
    setupSmoothScrolling();
    
    // Add theme toggle event listener
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
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
        productCard.onclick = () => viewProduct(product.id);
        const stars = generateStars(product.rating);
        const isWishlisted = isInWishlist(product.id);
        const heartColor = isWishlisted ? 'fill: var(--error-color); stroke: var(--error-color);' : 'fill: none; stroke: currentColor;';
        
        productCard.innerHTML = `
            <div class="product-image">
                <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(${product.id})" aria-label="Toggle wishlist">
                    <svg width="24" height="24" viewBox="0 0 24 24" style="${heartColor}" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
                <img src="${product.image}" alt="${product.name}" />
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <span class="product-rating-stars">${stars}</span>
                    <span class="product-rating-count">${product.rating} (${product.reviews})</span>
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
                    <button class="btn btn-secondary" onclick="event.stopPropagation(); viewProduct(${product.id})" style="background: var(--bg-lighter); color: var(--text-color); border: 1px solid var(--border-color);">View Details</button>
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
        console.log('Search input found, setting up event listener');
        searchInput.addEventListener('input', function() {
            console.log('Search input changed, value:', this.value);
            applyFilters();
        });
    } else {
        console.log('Search input NOT found on page');
    }
}

// Setup category filter
function setupCategoryFilter() {
    const categorySelect = document.getElementById('categorySelect');
    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            applyFilters();
        });
    }
}

// Setup price filter
function setupPriceFilter() {
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    if (minPriceInput && maxPriceInput) {
        minPriceInput.addEventListener('input', function() {
            applyFilters();
        });
        maxPriceInput.addEventListener('input', function() {
            applyFilters();
        });
    }
}

// Setup clear filters
function setupClearFilters() {
    const clearBtn = document.getElementById('clearFiltersBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            const searchInput = document.getElementById('searchInput');
            const categorySelect = document.getElementById('categorySelect');
            const minPriceInput = document.getElementById('minPrice');
            const maxPriceInput = document.getElementById('maxPrice');
            const sortSelect = document.getElementById('sortSelect');
            
            if (searchInput) searchInput.value = '';
            if (categorySelect) categorySelect.value = 'all';
            if (minPriceInput) minPriceInput.value = '';
            if (maxPriceInput) maxPriceInput.value = '';
            if (sortSelect) sortSelect.value = 'default';
            
            applyFilters();
        });
    }
}

// Apply all filters
function applyFilters() {
    const searchInput = document.getElementById('searchInput');
    const categorySelect = document.getElementById('categorySelect');
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    const sortSelect = document.getElementById('sortSelect');
    
    let filtered = [...products];
    
    // Search filter
    if (searchInput && searchInput.value) {
        const searchTerm = searchInput.value.toLowerCase().trim();
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Category filter
    if (categorySelect && categorySelect.value !== 'all') {
        filtered = filtered.filter(product => product.category === categorySelect.value);
    }
    
    // Price filter
    const minPrice = minPriceInput ? parseFloat(minPriceInput.value) : null;
    const maxPrice = maxPriceInput ? parseFloat(maxPriceInput.value) : null;
    
    if (!isNaN(minPrice)) {
        filtered = filtered.filter(product => product.price >= minPrice);
    }
    if (!isNaN(maxPrice)) {
        filtered = filtered.filter(product => product.price <= maxPrice);
    }
    
    // Sort
    if (sortSelect) {
        switch(sortSelect.value) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                // Default sorting (by id)
                filtered.sort((a, b) => a.id - b.id);
        }
    }
    
    filteredProducts = filtered;
    displayProducts(filteredProducts, 1); // Reset to page 1
    
    // Scroll to products section with header offset
    const productsSection = document.getElementById('products');
    if (productsSection) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 65;
        const sectionTop = productsSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Setup sorting functionality
function setupSorting() {
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            applyFilters();
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

    cart = getCart(); // Always refresh cart first
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
    
    // If we're on cart page, update the display
    if (document.getElementById('cartItems')) {
        displayCart();
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = getCart(); // Always refresh cart first
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
    cart = getCart(); // Always get fresh cart
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
    window.location.href = `product.html?id=${productId}`;
}

// Display product details on product.html
function displayProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        document.getElementById('productDetailsContainer').innerHTML = `
            <div class="page-title" style="text-align: center;">Product not found</div>
        `;
        return;
    }

    // Update page title
    document.title = `${product.name} - Blyynx`;
    
    const stars = generateStars(product.rating);
    
    // Display product details
    document.getElementById('productDetailsContainer').innerHTML = `
        <div class="product-details-container">
            <div class="product-details">
                <div class="product-details-image-wrapper">
                    <img src="${product.image}" alt="${product.name}" />
                </div>
                <div class="product-details-content">
                    <h1 class="product-details-name">${product.name}</h1>
                    <div class="product-details-rating">
                        <span class="product-rating-stars">${stars}</span>
                        <span class="product-rating-count">${product.rating} (${product.reviews} reviews)</span>
                    </div>
                    <div class="product-details-price">$${product.price.toFixed(2)}</div>
                    <p class="product-details-description">${product.description}</p>
                    <div class="product-details-actions">
                        <button class="btn btn-primary" onclick="addToCart(${product.id});" style="flex: 1;">Add to Cart</button>
                        <a href="index.html#products" class="btn btn-secondary" style="flex: 1; text-align: center; background: var(--bg-lighter); color: var(--text-color); border: 1px solid var(--border-color);">Continue Shopping</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Display related products
    displayRelatedProducts(product);
}

// Display related products
function displayRelatedProducts(currentProduct) {
    // Get 4 random products excluding the current one
    const otherProducts = products.filter(p => p.id !== currentProduct.id);
    // Shuffle array
    for (let i = otherProducts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [otherProducts[i], otherProducts[j]] = [otherProducts[j], otherProducts[i]];
    }
    const relatedProducts = otherProducts.slice(0, 4);
    
    let relatedProductsHTML = `
        <div class="related-products">
            <h2 class="related-products-title">Related Products</h2>
            <div class="products-grid">
    `;
    
    relatedProducts.forEach(product => {
        const stars = generateStars(product.rating);
        const isWishlisted = isInWishlist(product.id);
        const heartColor = isWishlisted ? 'fill: var(--error-color); stroke: var(--error-color);' : 'fill: none; stroke: currentColor;';
        
        relatedProductsHTML += `
            <div class="product-card" onclick="viewProduct(${product.id})">
                <div class="product-image">
                    <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(${product.id})" aria-label="Toggle wishlist">
                        <svg width="24" height="24" viewBox="0 0 24 24" style="${heartColor}" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    <img src="${product.image}" alt="${product.name}" />
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-rating">
                        <span class="product-rating-stars">${stars}</span>
                        <span class="product-rating-count">${product.rating} (${product.reviews})</span>
                    </div>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-actions">
                        <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart(${product.id});">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    });
    
    relatedProductsHTML += `
            </div>
        </div>
    `;
    
    document.getElementById('relatedProductsSection').innerHTML = relatedProductsHTML;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
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

