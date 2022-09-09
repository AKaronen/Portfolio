// DOM elements 

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

const Nav = document.querySelector('.menu-nav');

const menuBranding = document.querySelector('.menu-branding');

const menuItems = document.querySelectorAll('.nav-item');

let menuOpen = false;



const toggleMenu = () => {

    if(!menuOpen){
        menuBtn.classList.add('open');
        menu.classList.add('show');
        Nav.classList.add('show');
        menuBranding.classList.add('show');
        menuItems.forEach(item => item.classList.add('show'));
        menuOpen = !menuOpen;
    }else{
        menuBtn.classList.remove('open');
        menu.classList.remove('show');
        Nav.classList.remove('show');
        menuBranding.classList.remove('show');
        menuItems.forEach(item => item.classList.remove('show'));
        menuOpen = !menuOpen; 
    }
}

menuBtn.addEventListener('click', toggleMenu);