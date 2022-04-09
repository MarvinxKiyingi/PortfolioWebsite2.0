import { Box, styled } from '@mui/system';
import { IProject } from '../../models/IProject';
import { Project } from './Project';
import { ProjectList } from './ProjectList';

const ProjectsContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  maxWidth: 2520,
  margin: '0 auto',
}));
export const Projects = () => {
  return (
    <ProjectsContainer id="Portfolio">
      <Box className="projectsContent">
        {ProjectList.map((project: IProject, index: number) => (
          <Project
            key={index}
            title={project.title}
            desktopImg={project.desktopImg}
            mobileImg={project.mobileImg}
            description={project.description}
            githubLink={project.githubLink}
            livePage={project.livePage}
          />
        ))}
      </Box>
    </ProjectsContainer>
  );
};
