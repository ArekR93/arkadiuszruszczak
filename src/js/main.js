const menuBtn = document.querySelector('.navbar-hamburger-btn')
const menuList = document.querySelector('.menu-list')
const timesBtn = document.querySelector('.fa-xmark')
const hamburgerInner = document.querySelector('.hamburger-inner')
const menuElements = document.querySelectorAll('.menu-element')

const showMenu = () => {
    menuList.classList.toggle('menu-animation')
    timesBtn.classList.toggle('hamburger-animation')
    if(timesBtn.classList.contains('hamburger-animation')){
        hamburgerInner.style.display = 'none';
    }else{
        hamburgerInner.style.display = 'block';
    }
}
menuElements.forEach((element) => {
    element.addEventListener('click', showMenu)
})


menuBtn.addEventListener('click', showMenu)

