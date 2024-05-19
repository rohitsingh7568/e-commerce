let cartItems = [];

function addToCart(productId, productName, productPrice) {
    const item = { id: productId, name: productName, price: productPrice };
    cartItems.push(item);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    // Clear the cart list
    cartList.innerHTML = '';

    // Populate the cart list
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);

        totalPrice += item.price;
    });

    // Update the total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

let result = 0;

function updateResult() {
    document.getElementById('result').innerText = 'Result: ' + result;
}

function add() {
    result += 1;
    updateResult();
}

function subtract() {
    result -= 1;
    updateResult();
}
