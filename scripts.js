const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-menu');
const optMenu = document.querySelector('.mobile-menu-navigation');
const dropDown = document.querySelector('.dropdown-menu');
const scrollLock = document.querySelector('.content');

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

window.addEventListener('load', () => {
  new Glider(document.querySelector('.carousel__lista'), {
    slidesToShow: 1,
    dots: '.carousel__indicadores',
    arrows: {
      prev: '.carousel__anterior',
      next: '.carousel__siguiente'
    }
  });
})

const seeProjectButton = document.querySelector('.pjbutton');
const projectPopup = document.querySelector('.popup-window');

const projects = 

function displayProject(event) {
  projectPopup.classList.remove('hidePopup');

  let selectedProject;

  Object.keys(projects).forEach((project) => {
    if (event.target.id === projects[project].id.toString()) {
      selectedProject = projects[project];
    }
  });

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
      <div role="tablist" class="carousel__indicadores"></div>
  </div>
  <p class="popup-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      <br><br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
  </p>
  <button class="see-live">See live <img src="./icons/see-live.png"></button>
  <button class="see-source">See source <img src="./icons/see-source.png"></button>`;
}

seeProjectButton.forEach((div) => { div.addEventListener('click', (event) => {displayProject(event)}) });