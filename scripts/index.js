const menuBtn = document.querySelector('.menu-btn');
const menuBtnClose = document.querySelector('.menu-btn-close');
const menuContainer = document.querySelector('.menu-container');

menuBtn.addEventListener('click', () => {
    menuContainer.style.opacity = 1;
    menuContainer.classList.toggle('shown');

});

menuBtnClose.addEventListener('click', () => {
    menuContainer.classList.toggle('shown');
    setTimeout(() => {
        menuContainer.style.opacity = 0;
    }, 250)
});