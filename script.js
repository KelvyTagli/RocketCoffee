const deskTop = document.querySelector('.desktop');
const mobile = document.querySelector('.hide');
const menuMobile = document.querySelector('.hide-menu');
const menu = document.querySelector('#menu-buguer-mobile');
const img = document.querySelector('#buguer-open');
const widthWindow = window.innerWidth;
var count = 0;

window.addEventListener("resize", () => {

    if (widthWindow < 672) {
        deskTop.classList.add('hide');
        mobile.classList.add('mobile');
        window.location.reload();
    
    } else if (widthWindow > 600) {
        deskTop.classList.remove('hide');
        mobile.classList.add('hide');
        window.location.reload();
    }
})

if (widthWindow < 672) {
    deskTop.classList.add('hide');
    mobile.classList.add('mobile');

} else if (widthWindow > 600){
    deskTop.classList.remove('hide');
    mobile.classList.add('hide');
}


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