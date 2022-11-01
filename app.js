const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navlogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click',mobileMenu);

//Show active menu when scrolling
const highlightMenu = () => {
   const elem = document.queryselector('.highlight');
   const homeMenu = document.queryselector ('#home-page');
   const aboutMenu = document.queryselector ('#about-page');
   const servicesMenu = document.queryselector ('#services-page');
   let scrollPos = window.scrollY;
   //console.log(scrollPos);

   //adds highlight to my menu items
   if(window.innerWidth > 960 && scrollPos < 600){
         homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;} else if(window.innerWidth > 960 && scrollPos < 1400) {
            aboutMenu.classList.add('highlight');
            homeMenu.classList.remove('highlight');
            servicesMenu.classList.remove('highlight');
            return;} else if(window.innerWidth > 960 && scrollPos < 2345) {
              servicesMenu.classList.add('highlight');
              aboutMenu.classList.remove('highlight');
              return;}
  
  
   if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem ) {
  elem.classList.remove('highlight');}
   };

window.addEventListener('scroll',highlightMenu);
window.addEventListener('click', highlightMenu);

//close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
const menuBars = document.querySelector('.is-active');
if(window.innerWidth <= 768 && menuBars) {
  menu.classList.toggle('is-active');
  menuLinks.classList.remove('active');
}
};

menuLinks.addEventListener('click', hideMobileMenu);
navlogo.addEventListener('click', hideMobileMenu);
