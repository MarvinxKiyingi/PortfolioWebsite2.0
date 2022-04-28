import { IProject } from '../../models/IProject';

import posterGirlDesktopImg from '../../styles/images/posterGirl-Desktop.jpg';
import posterGirlMobileImg from '../../styles/images/posterGirl-Mobile.png';
import todoListAppDesktopImg from '../../styles/images/todoListApp-Desktop.jpg';
import todoListAppMobileImg from '../../styles/images/todoListApp-Mobile.png';
import lateNightBrunchDesktopImg from '../../styles/images/lateNightBrunch-Desktop.jpg';
import lateNightBrunchMobileImg from '../../styles/images/lateNightBrunch-Mobile.png';
import myFirstCodedWebbsiteDesktopImg from '../../styles/images/myFirstCodedWebbsite-Desktop.jpg';
import myFirstCodedWebbsiteMobileImg from '../../styles/images/myFirstCodedWebbsite-Mobile.png';
import barkerDesktopImg from '../../styles/images/barker-Desktop.jpg';
import barkerMobileImg from '../../styles/images/barker-Mobile.png';

export const ProjectList: Array<IProject> = [
  {
    title: 'Barker',
    desktopImg: barkerDesktopImg,
    mobileImg: barkerMobileImg,
    description:
      'This is my degree project, where I came up with the idea of creating a tinder-like app for dog owners.',
    githubLink: 'https://github.com/MarvinxKiyingi/barker',
    livePage: 'https://barkerr.netlify.app/',
  },
  {
    title: 'Digital poster',
    desktopImg: posterGirlDesktopImg,
    mobileImg: posterGirlMobileImg,
    description:
      'This is a fictional digital poster for the launch of one of my favorite artists fake tour for her latest album release.',
    githubLink: 'https://github.com/MarvinxKiyingi/PosterGirlTour-LandingPage',
    livePage: 'https://marvinxkiyingi.github.io/PosterGirlTour-LandingPage',
  },
  {
    title: 'Late Night Brunch',
    desktopImg: lateNightBrunchDesktopImg,
    mobileImg: lateNightBrunchMobileImg,
    description:
      'A resturant page with the ablility to create a reservation onto an database using react & typescript.',
    githubLink: 'https://github.com/MarvinxKiyingi/LateNightBrunch',
    livePage: 'https://late-night-brunch.netlify.app',
  },
  {
    title: 'To-do list app',
    desktopImg: todoListAppDesktopImg,
    mobileImg: todoListAppMobileImg,
    description:
      'A todo list app that is connected to a database. Was mad to learn Node Js basics and working with a database.',
    githubLink: 'https://github.com/MarvinxKiyingi/TodoListAppNode',
    livePage: 'https://todo-list-app-nodeejs.herokuapp.com',
  },
  {
    title: 'How to build a PC',
    desktopImg: myFirstCodedWebbsiteDesktopImg,
    mobileImg: myFirstCodedWebbsiteMobileImg,
    description:
      'First ever webpage made in high school. I combined three subject’s photography, IT and web development.',
    githubLink: 'https://github.com/MarvinxKiyingi/firstEverCodedWebbsite',
    livePage: 'https://marvinxkiyingi.github.io/firstEverCodedWebbsite/',
  },
];
