document.addEventListener('DOMContentLoaded', function(){

    const menuBtn = document.querySelector('.navbar-hamburger-btn')
    const menuList = document.querySelector('.menu-list')
    const timesBtn = document.querySelector('.fa-xmark')
    const hamburgerInner = document.querySelector('.hamburger-inner')
    const menuElements = document.querySelectorAll('.menu-element')
    const cardItem = document.querySelectorAll('.card-item')

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

    const checkScroll = () => {
        console.log(window.scrollY);
        if(window.scrollY > 500){
            cardItem.forEach((card) => {
                card.classList.add('show-cards')
            })
        }else{
            cardItem.forEach((card) => {
                card.classList.remove('show-cards')
            })
        }
    }

    menuElements.forEach((element) => {
        element.addEventListener('click', showMenu)
    })

    window.addEventListener('scroll', checkScroll)
    menuBtn.addEventListener('click', showMenu)
})
