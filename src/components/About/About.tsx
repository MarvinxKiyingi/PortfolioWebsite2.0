import { Box, styled, Typography } from '@mui/material';

// Svg imports
// Languages
import html from '../../styles/svgs/html.svg';
import typeScript from '../../styles/svgs/typeScript.svg';
import sass from '../../styles/svgs/sass.svg';
import javaScript from '../../styles/svgs/javaScript.svg';

// Workflow
import vsCode from '../../styles/svgs/vsCode.svg';
import kanban from '../../styles/svgs/kanban.svg';
import github from '../../styles/svgs/github.svg';
import git from '../../styles/svgs/git.svg';

// Design
import figma from '../../styles/svgs/figma.svg';
import photoShop from '../../styles/svgs/photoShop.svg';
import adobeXd from '../../styles/svgs/adobeXd.svg';
import lightRoom from '../../styles/svgs/lightRoom.svg';

// Frameworks
import react from '../../styles/svgs/react.svg';
import angular from '../../styles/svgs/angular.svg';
import nextJs from '../../styles/svgs/nextJs.svg';
import nodeJs from '../../styles/svgs/nodeJs.svg';

const AboutContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'initial',
  },
  h1: {
    ...theme.typography.h4,
    textAlign: 'center',
    padding: theme.spacing(1, 1, 2),
    lineHeight: 'unset',
  },
  p: {
    ...theme.typography.body1,
    padding: 20,
  },
  '.skillsContainer': {
    h2: {
      ...theme.typography.h6,
      padding: 20,
      lineHeight: 'unset',

      //   padding: '20px 20px 0 20px',
    },
    '.skillsContentContainer': {
      backgroundColor: theme.palette.primary.main,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
      gap: '20px',
      minHeight: 200,
      padding: 20,
      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      '.skillContentContainer': {
        display: 'grid',
        gridTemplaterows: 'repeat(4,1fr)',
        gap: 20,
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
        borderRadius: 16,

        h3: {
          textAlign: 'center',
          gridColumn: '1fr',
          lineHeight: 'unset',
        },
        '.skillIcon': {
          width: 24,
          height: 'auto',
          [theme.breakpoints.up('sm')]: {
            width: 36,
          },
        },
        '.skillIconContentContainer': {
          display: 'flex',
          justifyContent: 'space-around',
        },
      },
    },
  },
}));

export const About = () => {
  return (
    <AboutContainer className="aboutContainer" id="About">
      <Typography component={'h1'}>About</Typography>
      <Typography component={'p'}>
        I’m a 25 years old tech geek and developer located in Stockholm,Sweden.
        When i’m not creating magic for the web trough code and or design, you
        will most likley find me at home signing my lungs out to my favorite
        tune atm or enjoying some content on a bigger screen. And of course the
        ocassional hang out with friends. <br />
        <br />
        I’m a well organized & independent person, who is not afriad of asking
        for help when so needed.
      </Typography>

      <Box className="skillsContainer">
        <Typography component={'h2'}>Skills</Typography>

        <Box className="skillsContentContainer">
          <Box className="skillContentContainer">
            <Typography component={'h3'}>Languages</Typography>
            <Box className="skillIconContentContainer">
              <img className="skillIcon" src={html} alt="html" />
              <img className="skillIcon" src={typeScript} alt="typeScript" />
              <img className="skillIcon" src={sass} alt="sass" />
              <img className="skillIcon" src={javaScript} alt="javaScript" />
            </Box>
          </Box>
          <Box className="skillContentContainer">
            <Typography component={'h3'}>Workflow</Typography>
            <Box className="skillIconContentContainer">
              <img className="skillIcon" src={vsCode} alt="vsCode" />
              <img className="skillIcon" src={kanban} alt="kanban" />
              <img className="skillIcon" src={github} alt="github" />
              <img className="skillIcon" src={git} alt="git" />
            </Box>
          </Box>
          <Box className="skillContentContainer">
            <Typography component={'h3'}>Design</Typography>
            <Box className="skillIconContentContainer">
              <img className="skillIcon" src={figma} alt="figma" />
              <img className="skillIcon" src={photoShop} alt="photoShop" />
              <img className="skillIcon" src={adobeXd} alt="adobeXd" />
              <img className="skillIcon" src={lightRoom} alt="lightRoom" />
            </Box>
          </Box>
          <Box className="skillContentContainer">
            <Typography component={'h3'}>Frameworks</Typography>
            <Box className="skillIconContentContainer">
              <img className="skillIcon" src={react} alt="react" />
              <img className="skillIcon" src={angular} alt="angular" />
              <img className="skillIcon" src={nextJs} alt="nextJs" />
              <img className="skillIcon" src={nodeJs} alt="nodeJs" />
            </Box>
          </Box>
        </Box>
      </Box>
    </AboutContainer>
  );
};
