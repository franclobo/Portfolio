const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-menu');
const optMenu = document.querySelector('.mobile-menu-navigation');
const dropDown = document.querySelector('.dropdown-menu');

mobileMenu.addEventListener('click', () => {
  dropDown.classList.remove('hide-menu');
});
closeBtn.addEventListener('click', () => {
  dropDown.classList.toggle('hide-menu');
});
optMenu.addEventListener('click', () => {
  dropDown.classList.toggle('hide-menu');
});