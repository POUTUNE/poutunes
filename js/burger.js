let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.burger-menu');
let linkArray = document.querySelectorAll('.nav_link');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    document.querySelector('body').classList.toggle('menu-active')
})
if (window.innerWidth < 767){
    linkArray.forEach(link => {
        link.addEventListener('click', () => {
            console.log('sdfsdf')
            menu.classList.toggle('active');
            menuBtn.classList.toggle('active');
            document.querySelector('body').classList.toggle('menu-active')
        })
    })
}