const hamburger = document.querySelector('.nav .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.nav .nav-bar .nav-list ul');
const nav_item = document.querySelectorAll('.nav .nav-bar .nav-list ul li a');
const nav = document.querySelector('.nav.container');

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
    } else
    {
        nav.style.backgroundColor = "transparent";
        nav.style.height = '15vh';
    }
})

nav_item.forEach(item=>{
    item.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})