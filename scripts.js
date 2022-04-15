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

const projects = [
  {
    id: 1,
    projectTitle: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    projectImages: ['./images/pcprogect.png', './images/pcprogect1.png', './images/pcprogect2.png', './images/pcprogect3.png', './images/pcprogect4.png', './images/pcprogect5.png'],
    projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    seeLive: ['See live', './icons/see-live.png', './icons/right-light.svg'],
    seeSource: ['See source', './icons/see-source.png', './icons/ic_github.png'],
  },
  {
    id: 2,
    projectTitle: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    projectImages: ['./images/pcprogect.png', './images/pcprogect1.png', './images/pcprogect2.png', './images/pcprogect3.png', './images/pcprogect4.png', './images/pcprogect5.png'],
    projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    seeLive: ['See live', './icons/see-live.png', './icons/right-light.svg'],
    seeSource: ['See source', './icons/see-source.png', './icons/ic_github.png'],
  },
  {
    id: 3,
    projectTitle: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    projectImages: ['./images/pcprogect.png', './images/pcprogect1.png', './images/pcprogect2.png', './images/pcprogect3.png', './images/pcprogect4.png', './images/pcprogect5.png'],
    projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    seeLive: ['See live', './icons/see-live.png', './icons/right-light.svg'],
    seeSource: ['See source', './icons/see-source.png', './icons/ic_github.png'],
  },
  {
    id: 4,
    projectTitle: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    projectImages: ['./images/pcprogect.png', './images/pcprogect1.png', './images/pcprogect2.png', './images/pcprogect3.png', './images/pcprogect4.png', './images/pcprogect5.png'],
    projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    seeLive: ['See live', './icons/see-live.png', './icons/right-light.svg'],
    seeSource: ['See source', './icons/see-source.png', './icons/ic_github.png'],
  },
  {
    id: 5,
    projectTitle: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    projectImages: ['./images/pcprogect.png', './images/pcprogect1.png', './images/pcprogect2.png', './images/pcprogect3.png', './images/pcprogect4.png', './images/pcprogect5.png'],
    projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    seeLive: ['See live', './icons/see-live.png', './icons/right-light.svg'],
    seeSource: ['See source', './icons/see-source.png', './icons/ic_github.png'],
  },
  {
    id: 6,
    projectTitle: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    projectImages: ['./images/pcprogect.png', './images/pcprogect1.png', './images/pcprogect2.png', './images/pcprogect3.png', './images/pcprogect4.png', './images/pcprogect5.png'],
    projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    seeLive: ['See live', './icons/see-live.png', './icons/right-light.svg'],
    seeSource: ['See source', './icons/see-source.png', './icons/ic_github.png'],
  },
];

function displayProject(event) {
  projectPopup.classList.remove('hidePopup');
  scrollLock.classList.remove('lockscroll');

  let selectedProjects;

  Object.keys(projects).forEach((project) => {
    if (event.target.id === projects[project].id.toString()) {
      selectedProjects = projects[project];
    }
  });

  projectPopup.innerHTML = `
  <button class="close-popup" onclick="projectPopup.classList.add('hidePopup');"><img src="./icons/cross.svg" alt=""></button>
  <h3 class="popup-title">${selectedProjects.projectTitle}</h3>
  <ul>
      <li><button class="html pop1" type="button">${selectedProjects.technologies[0]}</button></li>
      <li><button class="ruby pop1" type="button">${selectedProjects.technologies[1]}</button></li>
      <li><button class="js pop1" type="button">${selectedProjects.technologies[2]}</button></li>
  </ul>
  <div class="carousel">
      <div class="carousel__contenedor">
          <button aria-label="anterior" class="carousel__anterior">
              <i class="fa-solid fa-chevron-left"></i>
          </button>
          <div class="carousel__lista">
              <div class="carousel__elemento"><img src=${selectedProjects.projectImages[0]} alt="Project1"></div>
              <div class="carousel__elemento"><img src=${selectedProjects.projectImages[1]} alt="Project2"></div>
              <div class="carousel__elemento"><img src=${selectedProjects.projectImages[2]} alt="Project3"></div>
              <div class="carousel__elemento"><img src=${selectedProjects.projectImages[3]} alt="Project4"></div>
              <div class="carousel__elemento"><img src=${selectedProjects.projectImages[4]} alt="Project5"></div>
              <div class="carousel__elemento"><img src=${selectedProjects.projectImages[5]} alt="Project6"></div>
          </div>
          <button aria-label="siguiente" class="carousel__siguiente">
              <i class="fa-solid fa-chevron-right"></i>
          </button>
      </div>
      <div role="tablist" class="carousel__indicadores">
              <div class="carousel__indicador"><img src=${selectedProjects.projectImages[0]} alt="Project1"></div>
              <div class="carousel__indicador"><img src=${selectedProjects.projectImages[1]} alt="Project2"></div>
              <div class="carousel__indicador"><img src=${selectedProjects.projectImages[2]} alt="Project3"></div>
              <div class="carousel__indicador"><img src=${selectedProjects.projectImages[3]} alt="Project4"></div>
              <div class="carousel__indicador"><img src=${selectedProjects.projectImages[4]} alt="Project5"></div>
              <div class="carousel__indicador"><img src=${selectedProjects.projectImages[5]} alt="Project6"></div>
      </div>
  </div>
  <p class="popup-p">
    ${selectedProjects.projectDescription}
  </p>
  <div class="see-buttons">
    <button class="see-live">${selectedProjects.seeLive[0]} <img src=${selectedProjects.seeLive[1]}></button>
    <button class="see-source">${selectedProjects.seeSource[0]} <img src=${selectedProjects.seeSource[1]}></button>
  </div>
  <div class="narrow-buttons">
    <button class="previus"><img src="./icons/left.svg">Previus project </button>
    <button class="next">Next project <img src="./icons/right.svg"></button>
  </div>`;
}

seeProjectButton.forEach((div) => {
  div.addEventListener('click', (event) => {
    displayProject(event);
  });
});

const form = document.getElementById('contact');
const email = document.getElementById('email');
const msgError = document.getElementById('msg-error');

form.addEventListener('submit', (e) => {
  if (formEmail.value !== formEmail.value.toLowerCase()) {
    e.preventDefault();
    errorMessage.classList.remove('hideError');
    errorMessage.innerHTML = 'Type only lowercase';
  }
});