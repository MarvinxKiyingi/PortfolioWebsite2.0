import { IProject } from '../../models/IProject';

export const Project = (project: IProject) => {
  console.log(project);
  return (
    <div>
      <h1>{project.title}</h1>
      <div>
        <img src={project.desktopImg} alt="project img" />
        <img src={project.mobileImg} alt="project img" />
      </div>
      <p>{project.description}</p>
      <div>
        <button>
          <a href={project.githubLink}>Github</a>
        </button>
        <button>
          <a href={project.livePage}>LivePage</a>
        </button>
      </div>
    </div>
  );
};
