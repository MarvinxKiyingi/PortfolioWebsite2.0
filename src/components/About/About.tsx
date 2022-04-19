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

import meEmojiTwo from '../../styles/images/meemojiTwo.png';

const AboutContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  maxWidth: 2520,
  margin: '0 auto',
  '.aboutContent': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12,1fr)',
      gridGap: 20,
    },
    [theme.breakpoints.up('md')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr));',
      gridAutoRows: '1fr',
      padding: '20px 20px',
    },

    '.descriptiveTextHeading': {
      ...theme.typography.h4,
      textAlign: 'center',
      padding: theme.spacing(1, 1, 2),
      lineHeight: 'unset',
      [theme.breakpoints.up('sm')]: {
        gridColumn: '2/-2',
      },
      [theme.breakpoints.up('md')]: {
        textAlign: 'initial',
      },
    },

    '.descriptiveText': {
      ...theme.typography.body1,
      padding: 20,
      [theme.breakpoints.up('sm')]: {
        gridColumn: '2/-2',
      },
      [theme.breakpoints.up('md')]: {
        gridColumn: 'inherit',
      },
      [theme.breakpoints.up('xl')]: {
        p: {
          fontSize: '1.2rem',
        },
      },
    },

    '.skillsContainer': {
      h2: {
        ...theme.typography.h6,
        padding: 20,
        lineHeight: 'unset',
      },
      [theme.breakpoints.up('sm')]: {
        gridColumn: '2/-2',
      },
      [theme.breakpoints.up('md')]: {
        gridColumn: 'inherit',
      },

      '.skillsHeading': {
        [theme.breakpoints.up('md')]: {
          ...theme.typography.h4,
        },
      },

      '.skillsContentContainer': {
        backgroundColor: theme.palette.primary.main,
        display: 'grid',
        gridTemplateRows: 'repeat(4,1fr)',
        gap: '20px',
        padding: 20,
        [theme.breakpoints.up('xs')]: {
          gridTemplateRows: 'unset',
          gridTemplateColumns: 'repeat(2,1fr)',
        },
        [theme.breakpoints.up('sm')]: {
          borderRadius: 16,
        },
        [theme.breakpoints.up('md')]: {
          backgroundColor: theme.palette.background.paper,
        },

        '.skillContentContainer': {
          display: 'grid',
          gap: 20,
          padding: theme.spacing(2),
          backgroundColor: theme.palette.background.paper,
          borderRadius: 16,
          [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(2, 1),
          },
          [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(3),
          },
          [theme.breakpoints.up('md')]: {
            padding: theme.spacing(2, 1),
            backgroundColor: theme.palette.background.default,
          },

          h3: {
            textAlign: 'center',
            gridColumn: '1fr',
            lineHeight: 'unset',
            fontWeight: 500,
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

    '.showOnDesktop': {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'initial',
      },
    },

    '.aboutHeadingPuzzle': {
      [theme.breakpoints.up('md')]: {
        ...theme.typography.h1,
        fontSize: '9rem',
      },
      [theme.breakpoints.up('xl')]: {
        ...theme.typography.h1,
        fontSize: '12rem',
      },
    },

    '.grid': {
      [theme.breakpoints.up('md')]: {
        gridColumn: 'inherit',
        backgroundColor: theme.palette.background.paper,
        minHeight: 374,
        borderRadius: 20,
        padding: theme.spacing(2),
      },
    },

    '.meEmojiContainer': {
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',

        '.meEmojiTwo': {
          position: 'absolute',
          height: '90%',
        },
      },
    },
  },
}));

export const About = () => {
  return (
    <AboutContainer className="aboutContainer" id="About">
      <Box className="aboutContent">
        <Box className="showOnDesktop grid ">
          <Typography className="aboutHeadingPuzzle" component={'h2'}>
            Ab
          </Typography>
        </Box>

        <Box className="descriptiveText grid">
          <Typography className="descriptiveTextHeading" component={'h1'}>
            About
          </Typography>

          <Typography component={'p'}>
            I’m a 25 years old tech geek and developer located in
            Stockholm,Sweden. When i’m not creating magic for the web trough
            code and or design, you will most likley find me at home signing my
            lungs out to my favorite tune atm or enjoying some content on a
            bigger screen. And of course the ocassional hang out with friends.{' '}
            <br />
            <br />
            I’m a well organized & independent person, who is not afriad of
            asking for help when so needed.
          </Typography>
        </Box>

        <Box className="skillsContainer grid">
          <Typography className="skillsHeading" component={'h2'}>
            Skills
          </Typography>

          <Box className="skillsContentContainer">
            <Box className="skillContentContainer one">
              <Typography component={'h3'}>Languages</Typography>
              <Box className="skillIconContentContainer ">
                <img className="skillIcon" src={html} alt="html" />
                <img className="skillIcon" src={typeScript} alt="typeScript" />
                <img className="skillIcon" src={sass} alt="sass" />
                <img className="skillIcon" src={javaScript} alt="javaScript" />
              </Box>
            </Box>
            <Box className="skillContentContainer two">
              <Typography component={'h3'}>Workflow</Typography>
              <Box className="skillIconContentContainer ">
                <img className="skillIcon" src={vsCode} alt="vsCode" />
                <img className="skillIcon" src={kanban} alt="kanban" />
                <img className="skillIcon" src={github} alt="github" />
                <img className="skillIcon" src={git} alt="git" />
              </Box>
            </Box>
            <Box className="skillContentContainer three">
              <Typography component={'h3'}>Design</Typography>
              <Box className="skillIconContentContainer ">
                <img className="skillIcon" src={figma} alt="figma" />
                <img className="skillIcon" src={photoShop} alt="photoShop" />
                <img className="skillIcon" src={adobeXd} alt="adobeXd" />
                <img className="skillIcon" src={lightRoom} alt="lightRoom" />
              </Box>
            </Box>
            <Box className="skillContentContainer four">
              <Typography component={'h3'}>Frameworks</Typography>
              <Box className="skillIconContentContainer ">
                <img className="skillIcon" src={react} alt="react" />
                <img className="skillIcon" src={angular} alt="angular" />
                <img className="skillIcon" src={nextJs} alt="nextJs" />
                <img className="skillIcon" src={nodeJs} alt="nodeJs" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="showOnDesktop grid">
          <Typography className="aboutHeadingPuzzle" component={'h2'}>
            Out
          </Typography>
        </Box>

        <Box className="showOnDesktop grid ">
          <Typography className="aboutHeadingPuzzle" component={'h2'}>
            Me
          </Typography>
        </Box>
        <Box className="showOnDesktop grid meEmojiContainer">
          <img className="meEmojiTwo" src={meEmojiTwo} alt="Me emoji" />
        </Box>
      </Box>
    </AboutContainer>
  );
};
