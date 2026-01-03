// Display checkout items
function displayCheckoutItems() {
    const checkoutItems = document.getElementById('checkoutItems');
    const cart = getCart();

    checkoutItems.innerHTML = '';

    cart.forEach(item => {
        const checkoutItem = document.createElement('div');
        checkoutItem.className = 'checkout-item';
        checkoutItem.innerHTML = `
            <div>
                <div class="checkout-item-name">${item.name} x${item.quantity}</div>
            </div>
            <div class="checkout-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
        `;
        checkoutItems.appendChild(checkoutItem);
    });

    updateCheckoutSummary();
}

// Update checkout summary
function updateCheckoutSummary() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + tax;

    document.getElementById('checkoutSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkoutTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}`;
}

// Handle checkout form submission
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('checkoutForm')) {
        const checkoutForm = document.getElementById('checkoutForm');
        const cart = getCart();

        if (cart.length === 0) {
            alert('Your cart is empty! Redirecting to home page...');
            window.location.href = 'index.html';
            return;
        }

        displayCheckoutItems();
        updateCartCount();

        // Format card number input
        const cardNumberInput = document.getElementById('cardNumber');
        if (cardNumberInput) {
            cardNumberInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\s/g, '');
                let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
                e.target.value = formattedValue;
            });
        }

        // Format expiry date input
        const expiryDateInput = document.getElementById('expiryDate');
        if (expiryDateInput) {
            expiryDateInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >= 2) {
                    value = value.substring(0, 2) + '/' + value.substring(2, 4);
                }
                e.target.value = value;
            });
        }

        // Format CVV input
        const cvvInput = document.getElementById('cvv');
        if (cvvInput) {
            cvvInput.addEventListener('input', function(e) {
                e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
            });
        }

        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate form
            if (!validateForm()) {
                return;
            }

            // Get form data
            const formData = {
                fullName: document.getElementById('fullName').value.trim(),
                email: document.getElementById('email').value.trim(),
                address: document.getElementById('address').value.trim(),
                city: document.getElementById('city').value.trim(),
                zipCode: document.getElementById('zipCode').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                cardNumber: document.getElementById('cardNumber').value.replace(/\s/g, ''),
                expiryDate: document.getElementById('expiryDate').value,
                cvv: document.getElementById('cvv').value
            };

            // Show loading state
            const submitButton = checkoutForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Processing...';
            submitButton.disabled = true;

            // Simulate API call
            setTimeout(() => {
                // In a real application, you would send this data to a server
                // For now, we'll just show a success message and clear the cart
                localStorage.removeItem('cart');
                updateCartCount();

                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `
                    <div style="font-size: 4rem; margin-bottom: 1rem;">✅</div>
                    <h2 style="font-size: 2rem; margin-bottom: 1rem;">Order Placed Successfully!</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">Thank you for your purchase, <strong>${formData.fullName}</strong>!</p>
                    <p style="margin-bottom: 1rem;">Your order confirmation has been sent to <strong>${formData.email}</strong></p>
                    <p style="margin-top: 2rem;">
                        <a href="index.html" class="btn btn-primary btn-large">Continue Shopping</a>
                    </p>
                `;
                
                document.querySelector('.checkout-container').innerHTML = '';
                document.querySelector('.checkout-container').appendChild(successMessage);
            }, 1500);
        });
    }
});

// Validate form
function validateForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const zipCode = document.getElementById('zipCode').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormError('Please enter a valid email address');
        return false;
    }

    // Card number validation (basic - 13-19 digits)
    if (cardNumber.length < 13 || cardNumber.length > 19 || !/^\d+$/.test(cardNumber)) {
        showFormError('Please enter a valid card number');
        return false;
    }

    // Expiry date validation
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryRegex.test(expiryDate)) {
        showFormError('Please enter a valid expiry date (MM/YY)');
        return false;
    }

    // CVV validation
    if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
        showFormError('Please enter a valid CVV (3 digits)');
        return false;
    }

    // Phone validation (basic)
    if (phone.length < 10) {
        showFormError('Please enter a valid phone number');
        return false;
    }

    return true;
}

// Show form error
function showFormError(message) {
    // Remove existing error
    const existingError = document.querySelector('.form-error');
    if (existingError) {
        existingError.remove();
    }

    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.style.cssText = `
        background-color: #fee2e2;
        color: #dc2626;
        padding: 1rem;
        border-radius: 0.5rem;
        margin-bottom: 1.5rem;
        border: 1px solid #fecaca;
    `;
    errorDiv.textContent = message;
    
    const form = document.getElementById('checkoutForm');
    form.insertBefore(errorDiv, form.firstChild);

    // Scroll to error
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Remove error after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
    }
});

