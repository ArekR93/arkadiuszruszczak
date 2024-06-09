const menuBtn = document.querySelector('.navbar-hamburger-btn')
const menuList = document.querySelector('.menu-list')
const timesBtn = document.querySelector('.fa-xmark')
const hamburgerInner = document.querySelector('.hamburger-inner')
const menuElements = document.querySelectorAll('.menu-element')

const showMenu = () => {
    if (timesBtn.classList.contains('active-xmark')){
        timesBtn.classList.remove('active-xmark')
        hamburgerInner.style.display = 'block'
        menuList.classList.remove('menu-animation')
        

    }else{
        timesBtn.classList.add('active-xmark')
        hamburgerInner.style.display = 'none'
        menuList.classList.add('menu-animation')
        
    }
}


menuElements.forEach((element) => {
    element.addEventListener('click', showMenu)
})


menuBtn.addEventListener('click', showMenu)

