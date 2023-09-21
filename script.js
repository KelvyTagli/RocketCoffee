const deskTop = document.querySelector('.desktop');
const mobile = document.querySelector('.hide');
const widthWindow = window.innerWidth;
console.log(widthWindow);

window.addEventListener("resize", () => {

    if (widthWindow < 672) {
        deskTop.classList.add('hide');
        mobile.classList.add('mobile');
        window.location.reload();
    
    } else if (widthWindow > 600){
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