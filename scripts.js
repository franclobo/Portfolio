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
    projectTitle: 'Conference page',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    projectImages: ['./images/pcprogect.png', './images/pcprogect1.png', './images/pcprogect2.png', './images/pcprogect3.png', './images/pcprogect4.png', './images/pcprogect5.png'],
    projectDescription: 'In the first capstone project I will desing a page for English courses based in a Behance template.',
    seeLive: ['See live', './icons/see-live.png', './icons/right-light.svg'],
    seeSource: ['See source', './icons/see-source.png', './icons/ic_github.png'],
    link: 'https://franclobo.github.io/Conference-page/',
    github: 'https://github.com/franclobo/Conference-page',
  },
  {
    id: 2,
    projectTitle: 'Space-Travelers-Hub',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    projectImages: ['./images/pcprogect.png', './images/pcprogect1.png', './images/pcprogect2.png', './images/pcprogect3.png', './images/pcprogect4.png', './images/pcprogect5.png'],
    projectDescription: 'In this task, I will be working with the real live data from the SpaceX API. My task is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    seeLive: ['See live', './icons/see-live.png', './icons/right-light.svg'],
    seeSource: ['See source', './icons/see-source.png', './icons/ic_github.png'],
    link: 'https://react-redux-space-travelers-hub.netlify.app/',
    github: 'https://github.com/franclobo/Space-Travelers-Hub',
  },
  {
    id: 3,
    projectTitle: 'Catalog-of-my-things',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    projectImages: ['./images/pcprogect.png', './images/pcprogect1.png', './images/pcprogect2.png', './images/pcprogect3.png', './images/pcprogect4.png', './images/pcprogect5.png'],
    projectDescription: "In this project, we will create a console app that will help you to keep a record of different types of things you own: books, music albums, movies, and games. Everything will be based on the UML class diagram presented below. The data will be stored in JSON files but we will also prepare a database with tables structure analogical to our program's class structure.",
    seeLive: ['See live', './icons/see-live.png', './icons/right-light.svg'],
    seeSource: ['See source', './icons/see-source.png', './icons/ic_github.png'],
    link: 'https://drive.google.com/file/d/1ZZGcgg7LHNh02Z1MvpfAYAuRcHa6p0fs/view',
    github: 'https://github.com/franclobo/Catalog-of-my-things',
  },
  {
    id: 4,
    projectTitle: 'Recipes_app',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    projectImages: ['./images/pcprogect.png', './images/pcprogect1.png', './images/pcprogect2.png', './images/pcprogect3.png', './images/pcprogect4.png', './images/pcprogect5.png'],
    projectDescription: 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow user to save ingredients to a recipe, keep track of stock, create recipes, and generate a shopping list based on the difference between inventory and recipe requirements. To allow sharing the recipe, the user or creater can indicate whether it is private or public.',
    seeLive: ['See live', './icons/see-live.png', './icons/right-light.svg'],
    seeSource: ['See source', './icons/see-source.png', './icons/ic_github.png'],
    link: 'https://recipe-app-2022-10-07.herokuapp.com/',
    github: 'https://github.com/franclobo/Recipes_app',
  },
  {
    id: 5,
    projectTitle: 'Budget',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    projectImages: ['./images/pcprogect.png', './images/pcprogect1.png', './images/pcprogect2.png', './images/pcprogect3.png', './images/pcprogect4.png', './images/pcprogect5.png'],
    projectDescription: 'A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    seeLive: ['See live', './icons/see-live.png', './icons/right-light.svg'],
    seeSource: ['See source', './icons/see-source.png', './icons/ic_github.png'],
    link: 'https://budget-app-21102022.herokuapp.com/',
    github: 'https://github.com/franclobo/Budget',
  },
  {
    id: 6,
    projectTitle: 'Tesla-Booking',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    projectImages: ['./images/pcprogect.png', './images/pcprogect1.png', './images/pcprogect2.png', './images/pcprogect3.png', './images/pcprogect4.png', './images/pcprogect5.png'],
    projectDescription: "This application was made by creating our API, using Ruby on Rails, containing some Tesla models' info in our database. In the front end, made with React & Redux, the user is allowed to create an account and book any of the cars we have displayed. Admin users can add entirely new models by sending data to the API.",
    seeLive: ['See live', './icons/see-live.png', './icons/right-light.svg'],
    seeSource: ['See source', './icons/see-source.png', './icons/ic_github.png'],
    link: 'https://www.loom.com/share/525b7c8d3f7c4d4f941e20a34b5cccd3',
    github: 'https://github.com/franclobo/Front-end_Tesla-Booking',
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
    <a class="see-live" href="${selectedProjects.link}"> ${selectedProjects.seeLive[0]} <img src=${selectedProjects.seeLive[1]}></a>
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
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    msgError.innerHTML = 'Type Email only in lowercase';
  }
});