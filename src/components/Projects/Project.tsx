import { Box, Button, Typography, styled, Stack } from '@mui/material';
import { IProject } from '../../models/IProject';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ProjectContainer = styled(Box)(({ theme }) => ({
  width: '90%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '.title': {
    ...theme.typography.h6,
    lineHeight: 'unset',
    marginTop: theme.spacing(2),
  },
  '.title,.description,.ctaButtonContainer': {
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      width: '63%',
    },
  },
  '.projectImgContainer,.description,.ctaButtonContainer': {
    marginBottom: theme.spacing(2),
  },

  '.projectImgContainer': {
    width: '90%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    '.desktopImg': {
      width: '100%',
      borderRadius: 5,
      padding: '0.5rem',
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.up('sm')]: {
        width: '70%',
      },
    },
    '.mobileImg': {
      position: 'absolute',
      width: '20%',
      top: '31%',
      left: '82%',
      [theme.breakpoints.up('sm')]: {
        width: '17%',
        top: '12%',
        left: '74%',
      },
    },
  },
  '.ctaButtonContainer': {
    [theme.breakpoints.up('md')]: {
      marginBottom: 'unset',
    },
    '.cta': {
      minWidth: 130,
    },
    '&>*+*': {
      // marginLeft: theme.spacing(1),
      [theme.breakpoints.up('xs')]: {
        marginLeft: theme.spacing(2),
      },
    },
  },
}));
export const Project = (project: IProject) => {
  return (
    <ProjectContainer className="projectContainer">
      {project && (
        <>
          <Typography className="title" component={'h1'}>
            {project.title}
          </Typography>
          <Box className="projectImgContainer">
            <img
              className="desktopImg"
              src={project.desktopImg}
              alt="project img desktop"
            />
            <img
              className="mobileImg"
              src={project.mobileImg}
              alt="project img mobile"
            />
          </Box>
          <Typography className="description" component={'p'}>
            {project.description}
          </Typography>
          <Stack
            className="ctaButtonContainer"
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              className="cta"
              variant="contained"
              href={project.githubLink}
              endIcon={<GitHubIcon />}
            >
              Github
            </Button>
            <Button
              className="cta"
              variant="outlined"
              href={project.livePage}
              endIcon={<OpenInNewIcon />}
            >
              Livepage
            </Button>
          </Stack>
        </>
      )}
    </ProjectContainer>
  );
};
