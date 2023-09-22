const deskTop = document.querySelector('.desktop');
const mobile = document.querySelector('.hide');
const menuMobile = document.querySelector('.hide-mobile');
const menu = document.querySelector('#menu-buguer-open');
const img = document.querySelector('#buguer-open');
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
        count += 1;
    } else {
        img.setAttribute('src', './assets/menu-buguer-open.svg');
        count -= 1;
    }
    e.preventDefault();
})