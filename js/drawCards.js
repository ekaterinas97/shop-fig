"use strict";

const catalogList = document.querySelector('.catalog-list');
const productsContainer = catalogList.querySelector('.products');

function getProductMarkUp(product) {
    return `
    <div class="products__item">
    <a href="product.html" class="products__link">
        <div class="products__img">
            <img src="${product.image}" alt="">
        </div>
        <div class="products__info">
            <div class="products__heading">${product.title}</div>
            <div class="products__descr">${product.description}</div>
            <div class="products__price">$${product.price}</div>
        </div>
    </a>
    <div class="add-to-cart">
        <a href="#" class="add-btn" data-productid=${product.id}>Add to Cart</a>
    </div>
</div>`
}

function drawProductCards(products, productsContainer) {
    let markUpCard = '';
    for (let product of products) {
        markUpCard += getProductMarkUp(product);
    }
    productsContainer.insertAdjacentHTML('afterbegin', markUpCard);
}

drawProductCards(products, productsContainer);

const addToCartButtons = document.querySelectorAll('.add-btn');

function addToCartBtnHandler(event) {
    event.preventDefault();
    const productId = event.currentTarget.dataset.productid;
    addProductToCart(productId);
}
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', addToCartBtnHandler);
});