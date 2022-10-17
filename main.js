const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerButtonMenu = document.querySelector('.mobile-menu');
const hamburguerButton = document.querySelector('.menu');
const shoppingLogo = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
    const cartClosed = shoppingCart.classList.contains('inactive');

    if (!cartClosed){
        //open menu and close cart
        shoppingCart.classList.add("inactive");
    }

    desktopMenu.classList.toggle('inactive')
}

hamburguerButton.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu () {
    const cartClosed = shoppingCart.classList.contains('inactive');

    if (!cartClosed){
        //open menu and close cart
        shoppingCart.classList.add("inactive");
    }

    hamburguerButtonMenu.classList.toggle('inactive')
}

shoppingLogo.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart () {

    const mobileClosed = hamburguerButtonMenu.classList.contains('inactive');

    if (!mobileClosed){
        //open cart and close menu
        hamburguerButtonMenu.classList.add("inactive");
    }

    shoppingCart.classList.toggle('inactive')

}