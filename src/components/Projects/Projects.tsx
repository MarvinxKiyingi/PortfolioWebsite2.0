import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { IProject } from '../../models/IProject';
import { Project } from './Project';
import { ProjectList } from './ProjectList';

const ProjectsContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  maxWidth: 2520,
  margin: '0 auto',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'column',
  },

  '.projectsContainerHeading': {
    textAlign: 'center',
    lineHeight: 'unset',
    // @ts-ignore
    ...theme.typography.h4,
    padding: theme.spacing(4, 1, 2),
    [theme.breakpoints.up('xl')]: {
      // @ts-ignore
      ...theme.typography.h3,
    },
  },
  '.projectsContent': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gridGap: 20,
      flex: 1,
    },
  },
}));

export const Projects = () => {
  return (
    <ProjectsContainer className="projectsContainer" id="Portfolio">
      <Typography className="projectsContainerHeading" component="h1">
        Portfolio
      </Typography>
      <Box className="projectsContent">
        {ProjectList &&
          ProjectList.map((project: IProject, index: number) => (
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
