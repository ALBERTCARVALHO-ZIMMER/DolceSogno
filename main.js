let cart = [];

// Adiciona produto ao carrinho
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

// Atualiza visualização do carrinho
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
}

// Mostra formulário de checkout
function showCheckoutForm() {
    document.getElementById('checkout-form').style.display = 'flex';
}

// Esconde formulário de checkout
function hideCheckoutForm() {
    document.getElementById('checkout-form').style.display = 'none';
}

// Limpa o carrinho
function clearCart() {
    cart = [];
    updateCart();
}

// Lida com a finalização de compra
function handleCheckout(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    alert(`Pedido enviado:\nNome: ${name}\nTelefone: ${phone}\nEndereço: ${address}`);
    
    clearCart();
    hideCheckoutForm();
}

// Exibe o carrinho
document.getElementById('cart-btn').addEventListener('click', () => {
    const cart = document.getElementById('cart');
    cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
});