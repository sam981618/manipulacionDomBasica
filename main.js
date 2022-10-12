const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerButtonMenu = document.querySelector('.mobile-menu');
const hamburguerButton = document.querySelector('.menu');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive')
}

hamburguerButton.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu () {
    hamburguerButtonMenu.classList.toggle('inactive-mobile')
}