"use strict";
const cartCount = document.querySelector('.cart-count');

function boostProductCount() {
    cartCount.textContent++;
}

function addProductToCart(productId) {
    boostProductCount();
}