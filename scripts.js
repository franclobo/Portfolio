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
    technologies: ["HTML", "CSS", "JavaScript"],
    projectImages: [
      "https://user-images.githubusercontent.com/58642949/176052636-2f25edcb-999a-4f26-9528-a3bd84a9fbfd.png",
      "https://user-images.githubusercontent.com/58642949/203119151-11932009-d65e-4ec8-8973-630d5dec74d2.png",
      "https://user-images.githubusercontent.com/58642949/203119224-c0b4ea98-c3eb-4969-b7a7-93f0b7e6debe.png",
      "https://user-images.githubusercontent.com/58642949/203119282-d614b0ac-9d8b-4f96-9b65-2f25ca4bfe68.png",
      "https://user-images.githubusercontent.com/58642949/203119343-47441280-f644-407e-ac69-5342324fce3a.png",
      "https://user-images.githubusercontent.com/58642949/203119397-422cd5ef-52ba-47a7-8fe0-3ce159694b56.png",
      "https://user-images.githubusercontent.com/58642949/203119481-218191e6-24c3-41d1-a4a9-54a6d0cc8a25.png"
    ],
    projectDescription: 'In the first capstone project I will desing a page for English courses based in a Behance template.',
    seeLive: ['See live', './icons/see-live.png', './icons/right-light.svg'],
    seeSource: ['See source', './icons/see-source.png', './icons/ic_github.png'],
    link: 'https://franclobo.github.io/Conference-page/',
    github: 'https://github.com/franclobo/Conference-page',
  },
  {
    id: 2,
    projectTitle: 'Space-Travelers-Hub',
    technologies: ["React", "Redux", "JavaScript"],
    projectImages: [
      "https://user-images.githubusercontent.com/58642949/177840971-87dec59e-b55f-4bee-96ce-4abdbf1baeed.png",
      "https://user-images.githubusercontent.com/58642949/177841080-982a3ef8-4108-4961-9de0-66f70db0ff27.png",
      "https://user-images.githubusercontent.com/58642949/177841227-3de9e376-8cd9-4b4a-a1c4-035baec3737d.png",
      "https://user-images.githubusercontent.com/58642949/177841303-0482af56-93be-4283-9737-86066583c38c.png",
    ],
    projectDescription: 'In this task, I will be working with the real live data from the SpaceX API. My task is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    seeLive: ['See live', './icons/see-live.png', './icons/right-light.svg'],
    seeSource: ['See source', './icons/see-source.png', './icons/ic_github.png'],
    link: 'https://react-redux-space-travelers-hub.netlify.app/',
    github: 'https://github.com/franclobo/Space-Travelers-Hub',
  },
  {
    id: 3,
    projectTitle: 'Catalog-of-my-things',
    technologies: ["Ruby", "PostgreSQL"],
    projectImages: [
      "https://user-images.githubusercontent.com/58642949/203120981-cc8f5fd1-326f-4028-a883-bb9a11efb7fa.png",
      "https://user-images.githubusercontent.com/58642949/203121090-e5d06be5-108f-46b3-9ac7-14e0df2f5e28.png",
      "https://user-images.githubusercontent.com/58642949/203121726-9ccf70a7-e060-458a-975f-48c1e8ef9161.png",
      "https://user-images.githubusercontent.com/58642949/203121961-0fb8988f-8335-495a-a5a9-68ae21e39638.png",
      "https://user-images.githubusercontent.com/58642949/203122272-779f3379-f3a4-4338-a731-33d82f57d2dd.png",
      "https://user-images.githubusercontent.com/58642949/203122597-6deb2474-5e18-4bfb-93b9-5a46c5f35527.png",
    ],
    projectDescription: "In this project, we will create a console app that will help you to keep a record of different types of things you own: books, music albums, movies, and games. Everything will be based on the UML class diagram presented below. The data will be stored in JSON files but we will also prepare a database with tables structure analogical to our program's class structure.",
    seeLive: ['See live', './icons/see-live.png', './icons/right-light.svg'],
    seeSource: ['See source', './icons/see-source.png', './icons/ic_github.png'],
    link: 'https://drive.google.com/file/d/1ZZGcgg7LHNh02Z1MvpfAYAuRcHa6p0fs/view',
    github: 'https://github.com/franclobo/Catalog-of-my-things',
  },
  {
    id: 4,
    projectTitle: 'Recipes_app',
    technologies: ["Ruby on Rails", "PostgreSQL"],
    projectImages: [
      "https://user-images.githubusercontent.com/58642949/203123871-fd65d99e-cce5-4f08-a50b-7d87d8bb9375.png",
      "https://user-images.githubusercontent.com/58642949/203123956-9e50da52-5b42-48cb-abe6-470b32af6b81.png",
      "https://user-images.githubusercontent.com/58642949/203124258-aa488ac1-f626-4fb8-8389-a491c2773a3f.png",
      "https://user-images.githubusercontent.com/58642949/203124336-474dc3f3-1810-41a4-a25c-9fe26b29823e.png",
      "https://user-images.githubusercontent.com/58642949/203124388-2a37beaf-6a15-4dad-8232-481528fcb297.png",
    ],
    projectDescription: 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow user to save ingredients to a recipe, keep track of stock, create recipes, and generate a shopping list based on the difference between inventory and recipe requirements. To allow sharing the recipe, the user or creater can indicate whether it is private or public.',
    seeLive: ['See live', './icons/see-live.png', './icons/right-light.svg'],
    seeSource: ['See source', './icons/see-source.png', './icons/ic_github.png'],
    link: 'https://recipe-app-2022-10-07.herokuapp.com/',
    github: 'https://github.com/franclobo/Recipes_app',
  },
  {
    id: 5,
    projectTitle: 'Budget',
    technologies: ["Ruby on Rails", "PostgreSQL"],
    projectImages: [
      "https://user-images.githubusercontent.com/58642949/203126520-d6f9f000-8f78-496c-b18e-a04cb95f83c5.png",
      "https://user-images.githubusercontent.com/58642949/203125832-312cd73b-0e27-49e6-9024-7544f7da3199.png",
      "https://user-images.githubusercontent.com/58642949/203125929-563f87d1-8c23-4d77-83d8-acd5001e3ed9.png",
      "https://user-images.githubusercontent.com/58642949/203126134-f0107a96-89b3-45bc-b6b5-9a87a23eddc2.png",
      "https://user-images.githubusercontent.com/58642949/203126309-99a2de39-ef8d-4030-a305-156238f5e10e.png",
    ],
    projectDescription: 'A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    seeLive: ['See live', './icons/see-live.png', './icons/right-light.svg'],
    seeSource: ['See source', './icons/see-source.png', './icons/ic_github.png'],
    link: 'https://budget-app-21102022.herokuapp.com/',
    github: 'https://github.com/franclobo/Budget',
  },
  {
    id: 6,
    projectTitle: 'Tesla-Booking',
    technologies: ["Ruby on Rails", "PostgreSQL", "React", "Redux", "JavaScript"],
    projectImages: [
      "https://user-images.githubusercontent.com/58642949/203177358-407e9c25-ed98-4f22-8253-a77d41514057.png",
      "https://user-images.githubusercontent.com/58642949/203178020-35c28e89-2cdd-4082-ab95-b2f938e272d5.png",
      "https://user-images.githubusercontent.com/58642949/203178138-fa2500d5-a7b0-463d-b3d2-8210f0cc20f9.png",
      "https://user-images.githubusercontent.com/58642949/203178235-c11105ab-ba7b-44b8-9205-03b48413d715.png",
      "https://user-images.githubusercontent.com/58642949/203178331-94939681-0926-4651-9887-16fd12828853.png",
      "https://user-images.githubusercontent.com/58642949/203178395-72673b3b-26c7-47af-ab63-56c32a1f39e1.png",
      "https://user-images.githubusercontent.com/58642949/203178466-7db060fc-0c59-4203-a4ea-27313d12d77a.png",
    ],
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
    <a class="see-source" href="${selectedProjects.github}">${selectedProjects.seeSource[0]} <img src=${selectedProjects.seeSource[1]}></a>
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
