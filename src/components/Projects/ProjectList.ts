import { IProject } from '../../models/IProject';

import posterGirlDesktopImg from '../../styles/images/posterGirl-Desktop.jpg';
import posterGirlMobileImg from '../../styles/images/posterGirl-Mobile.png';
import todoListAppDesktopImg from '../../styles/images/todoListApp-Desktop.jpg';
import todoListAppMobileImg from '../../styles/images/todoListApp-Mobile.png';

export const ProjectList: Array<IProject> = [
  {
    title: 'Digital poster',
    desktopImg: posterGirlDesktopImg,
    mobileImg: posterGirlMobileImg,
    description:
      'This is a fictional digital poster for the launch of one of my favorite artists fake tour for her latest album release',
    githubLink: 'https://github.com/MarvinxKiyingi/PosterGirlTour-LandingPage',
    livePage: 'https://marvinxkiyingi.github.io/PosterGirlTour-LandingPage',
  },
  {
    title: 'To-do list app ',
    desktopImg: todoListAppDesktopImg,
    mobileImg: todoListAppMobileImg,
    description:
      'A todo list app that is connected to a database. Was mad to learn Node Js basics and working with a database.',
    githubLink: 'https://github.com/MarvinxKiyingi/TodoListAppNode',
    livePage: 'https://todo-list-app-nodeejs.herokuapp.com',
  },
];
