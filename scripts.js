const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-menu');
const optMenu = document.querySelector('.mobile-menu-navigation');
const dropDown = document.querySelector('.dropdown-menu');
const scrollLock = document.querySelector('.content');
const seeProjectButton = document.querySelectorAll('.pjbutton');
const projectPopup = document.querySelector('.popup-window');

mobileMenu.addEventListener('click', () => {
  dropDown.classList.remove('hide-menu');
  scrollLock.classList.add('lockscroll');
});
closeBtn.addEventListener('click', () => {
  dropDown.classList.toggle('hide-menu');
  scrollLock.classList.remove('lockscroll');
});
optMenu.addEventListener('click', () => {
  dropDown.classList.toggle('hide-menu');
  scrollLock.classList.remove('lockscroll');
});

function displayProject() {
  projectPopup.classList.remove('hidePopup');
  scrollLock.classList.remove('lockscroll');

  projectPopup.innerHTML = `
  <button class="close-popup" onclick="projectPopup.classList.add('hidePopup');"><img src="./icons/cross.svg" alt=""></button>
  <h3 class="popup-title">Project name goes here</h3>
  <ul>
      <li><button class="html pop1" type="button">HTML/CSS</button></li>
      <li><button class="ruby pop1" type="button">Ruby on Rails</button></li>
      <li><button class="js pop1" type="button">JavaScript</button></li>
  </ul>
  <div class="carousel">
      <div class="carousel__contenedor">
          <button aria-label="anterior" class="carousel__anterior">
              <i class="fa-solid fa-chevron-left"></i>
          </button>
          <div class="carousel__lista">
              <div class="carousel__elemento"><img src="./images/pcprogect.png" alt="Project1"></div>
              <div class="carousel__elemento"><img src="./images/pcprogect1.png" alt="Project2"></div>
              <div class="carousel__elemento"><img src="./images/pcprogect2.png" alt="Project3"></div>
              <div class="carousel__elemento"><img src="./images/pcprogect3.png" alt="Project4"></div>
              <div class="carousel__elemento"><img src="./images/pcprogect4.png" alt="Project5"></div>
              <div class="carousel__elemento"><img src="./images/pcprogect5.png" alt="Project6"></div>
          </div>
          <button aria-label="siguiente" class="carousel__siguiente">
              <i class="fa-solid fa-chevron-right"></i>
          </button>
      </div>
      <div role="tablist" class="carousel__indicadores">
              <div class="carousel__indicador"><img src="./images/pcprogect.png" alt="Project1"></div>
              <div class="carousel__indicador"><img src="./images/pcprogect1.png" alt="Project2"></div>
              <div class="carousel__indicador"><img src="./images/pcprogect2.png" alt="Project3"></div>
              <div class="carousel__indicador"><img src="./images/pcprogect3.png" alt="Project4"></div>
              <div class="carousel__indicador"><img src="./images/pcprogect4.png" alt="Project5"></div>
              <div class="carousel__indicador"><img src="./images/pcprogect5.png" alt="Project6"></div>
      </div>
  </div>
  <p class="popup-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      <br><br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
  </p>
  <div class="see-buttons">
    <button class="see-live">See live <img src="./icons/see-live.png"></button>
    <button class="see-source">See source <img src="./icons/see-source.png"></button>
  </div>
  <div class="narrow-buttons">
    <button class="previus"><img src="./icons/left.svg">Previus project </button>
    <button class="next">Next project <img src="./icons/right.svg"></button>
  </div>`;
}

seeProjectButton.forEach((div) => {
  div.addEventListener('click', () => {
    displayProject();
  });
});