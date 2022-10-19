const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerButtonMenu = document.querySelector('.mobile-menu');
const hamburguerButton = document.querySelector('.menu');
const shoppingLogo = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

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

const productList = [];
productList.push({
    name: 'motorcycle',
    price: 20000000,
    image: 'https://2yrh403fk8vd1hz9ro2n46dd-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/2021-Royal-Enfield-Himalayan-First-Look-adventure-motorcycle-13-1024x683.jpg'
});
productList.push({
    name: 'mofle',
    price: 200000,
    image: 'https://i.linio.com/p/bc9a637d3ad839096ce623fab5273be5-catalog.jpg'
});
productList.push({
    name: 'motorcycle',
    price: 50000000,
    image: 'https://www.motorevistacr.com/wp-content/uploads/2021/02/Triumph-Bonneville-Bobber-2022.jpg'
});

/* <div class="product-card">
      <img src="https://2yrh403fk8vd1hz9ro2n46dd-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/2021-Royal-Enfield-Himalayan-First-Look-adventure-motorcycle-13-1024x683.jpg" alt="" class="product-img">
        <div class="product-info">
                <div>
                    <p>20.000.000</p>
                    <p>motorcycle</p>
                </div>
            <figure>
                <img src="./Platzi Yard Sale/icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>    
</div> */

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productGeneral = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfo.appendChild(productGeneral);
    
    productGeneral.appendChild(productPrice);
    productGeneral.appendChild(productName);

    const productShopCart = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './Platzi Yard Sale/icons/bt_add_to_cart.svg')

    productShopCart.appendChild(productImgCart);
    productInfo.appendChild(productShopCart);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

}