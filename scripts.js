let mobileMenu = document.querySelector('.mobile-menu');
let closeBtn = document.querySelector('.close-menu');
let optMenu = document.querySelector('.mobile-menu-navigation');
let dropDown = document.querySelector('.dropdown-menu');

mobileMenu.addEventListener('click', ()=>{
    dropDown.classList.remove('.hide-menu');
})