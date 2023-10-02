const deskTop = document.querySelector('.desktop');
const mobile = document.querySelector('.hide');
const menuMobile = document.querySelector('.hide-menu');
const menu = document.querySelector('#menu-buguer-mobile');
const img = document.querySelector('#buguer-open');
const widthWindow = window.innerWidth;
var count = 0;


menu.addEventListener('click', (e) => {
    if (count == 0) {
        img.setAttribute('src', './assets/menu-buguer-close.svg');
        menuMobile.classList.add('menu-mobile');
        count += 1;
    } else {
        img.setAttribute('src', './assets/menu-buguer-open.svg');
        menuMobile.classList.remove('menu-mobile');
        menuMobile.classList.add('hide-menu');
        count -= 1;
    }
    e.preventDefault();
})