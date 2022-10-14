const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerButtonMenu = document.querySelector('.mobile-menu');
const hamburguerButton = document.querySelector('.menu');
const shoppingLogo = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive')
}

hamburguerButton.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu () {
    hamburguerButtonMenu.classList.toggle('inactive-mobile')
}

shoppingLogo.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart () {
    shoppingCart.classList.toggle('inactive-cart')
}