import logo1 from '../images/logo1.png';
import projectForumBlog from '../images/projectForumBlog.png';
import projectCar from '../images/projectCar.png';
import projectGym from '../images/projectGym.png';
import projectConstructionNicolas from '../images/projectConstructionNicolas.png';
import projectJarmicos from '../images/projectJarmicos.png';
import projectLeroy from '../images/projectLeroy.png';
import projectScandia from '../images/projectScandia.png';

const Data = [
  {
    name: 'Portfolio v1',
    summary:
      'The idea behind this project was to create a showcase of all my big projects for the past year. I tried to keep the UI as simple as possible without any fluff. \n\n This is a Single Page Application and is built using React.js and SASS with the BEM methodology.',
    img: logo1,
    demo: 'https://jonamparo.com',
    code: 'https://github.com/jonamparo/portfolio',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'SASS' },
      { name: 'React.JS' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' }
    ]
  },
  {
    name: 'Gym Application',
    summary:
      "This project is inspired by the mobile application called 'Gravitus’. It’s my favorite gym application to track my workouts. I’m using this app as a way to further my understanding, correlation and project structure of React, Node, Express, MongoDB, and Redux. In this application, users can create accounts, login, create, update, read and delete their profiles. Users also have the ability to create, update, read and delete workouts! This project uses React, MongoDB, Node, Express, Redux, Webpack, SASS, JQuery, and Bootstrap.",
    img: projectGym,
    demo: 'https://jonamparo.github.io/gravitus',
    code: 'https://github.com/jonamparo/gravitus',
    technologies: [
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Redux' },
      { name: 'Node.js' },
      { name: 'MongoDB' },
      { name: 'Express' },
      { name: 'Webpack' },
      { name: 'JQuery' },
      { name: 'Bootstrap' },
      { name: 'SASS' }
    ]
  },
  {
    name: 'Car Rental Service',
    summary:
      "For this project, I decided to create it from scratch. The purpose of this Car Rental Application is to handle a business's needs of renting out vehicles to customers, maintaining records and data on vehicle fleet, operating the customer portal website, and reporting the state of the system to the company. \n\n Since I had a lot of time to build the project and wanted to learn as much as possible, I decided to build everything from scratch.",
    img: projectCar,
    demo: 'https://car-rental-project.herokuapp.com/',
    code: 'https://github.com/JonAmparo/Car-Rental-Project',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'JQuery' },
      { name: 'Bootstrap' },
      { name: 'PHP' },
      { name: 'MySQL' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' }
    ]
  },
  {
    name: 'Power Blog',
    summary:
      'On this project, I was responsible for the functionality of the whole project, the frontend implementation and most of the backend implementation. The goal was to create a website that had the ability to register an account and login. Other functionality consists of creating posts, editing your profile, changing your password, and viewing other registered users.  \n\n During this project I utilized CRUD operations, PHP, JavaScript, AJAX, JQuery and more.',
    img: projectForumBlog,
    demo: 'https://jon-forum-blog.herokuapp.com/',
    code: 'https://github.com/JonAmparo/Forum-Blog',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'JQuery' },
      { name: 'PHP' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' }
    ]
  },
  {
    name: 'Construction Nicolas Avoine',
    summary:
      'On this project, I was responsible for the UI, and UX designs of the whole project. The goal was to create a beautiful, and modern website that satisfied our client.',
    img: projectConstructionNicolas,
    demo: 'https://www.constructionnicolasavoine.ca/',
    code: 'private',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'Bootstrap' },
      { name: 'JQuery' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' }
    ]
  },
  {
    name: 'Le Roy Du Pavage',
    summary:
      'On this project, I was responsible for the UI, and UX designs of the whole project. The goal was to create a beautiful, and modern website that satisfied our client.',
    img: projectLeroy,
    demo: 'https://leroydupavage.ca/en',
    code: 'private',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'Bootstrap' },
      { name: 'JQuery' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' }
    ]
  },
  {
    name: 'Scandia Canada Ltd.',
    summary:
      'On this project, I was responsible for the UI, and UX designs of the whole project. The goal was to create a beautiful, and modern website that satisfied our client.',
    img: projectScandia,
    demo: 'https://scandiacanada.com/',
    code: 'private',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'Bootstrap' },
      { name: 'JQuery' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' }
    ]
  },
  {
    name: 'Jarmicos',
    summary:
      'On this project, I was responsible for the UI, and UX designs of the whole project. The goal was to create a beautiful, and modern website that satisfied our client.',
    img: projectJarmicos,
    demo: 'https://www.jarmicos.com/',
    code: 'private',
    technologies: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'Bootstrap' },
      { name: 'JQuery' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'Responsiveness' },
      { name: 'UI/UX' }
    ]
  }
];

export default Data;
