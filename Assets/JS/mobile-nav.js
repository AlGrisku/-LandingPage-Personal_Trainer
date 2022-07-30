const hamburger = document.querySelector('.nav .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.nav .nav-bar .nav-list ul');
const nav_item = document.querySelectorAll('.nav .nav-bar .nav-list ul li a');
const nav = document.querySelector('.nav.container');
const logo = document.querySelector('.nav .nav-bar .logo .img-wrapper');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    
    if(scroll_position > 100)
    {
        nav.style.backgroundColor = "var(--gradient2)";
        nav.style.height = '8vh';
        logo.style.width = '100px';
    } else
    {
        nav.style.backgroundColor = "transparent";
        nav.style.height = '15vh';
        logo.style.width = '200px';
    }
})

nav_item.forEach(item=>{
    item.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})