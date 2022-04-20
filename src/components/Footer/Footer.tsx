import { Box, IconButton, Link, Typography, styled } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachFileIcon from '@mui/icons-material/AttachFile';

import resume from '../../files/resume.pdf';

const FooterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.palette.secondary.main,

  '.footerContent': {
    maxWidth: 2530,
    alignSelf: 'center',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    minHeight: '100vh',
    [theme.breakpoints.up('md')]: {
      minHeight: 'initial',
      height: 'initial',
      display: 'grid',
      gridTemplateColumns: 'repeat(12,1fr)',
    },
    '.greetingsCircle': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      borderRadius: '50%',
      width: '70%',
      aspectRatio: '1/1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: theme.spacing(3, 0),
      h1: {
        ...theme.typography.h4,
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: 450,
        margin: theme.spacing(3, 3),
        gridColumn: '2/5',
      },
    },

    '.socaiLinksContainer': {
      flex: 1,
      display: 'contents',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        flex: 2,
        alignItems: 'center',
        padding: theme.spacing(3, 0),
        justifyContent: 'space-evenly',
        gridColumn: '5/-1',
      },
      '.email': {
        textTransform: 'uppercase',
        ...theme.typography.h6,
        fontSize: '1rem',
        [theme.breakpoints.up('xs')]: {
          ...theme.typography.h6,
        },
      },
    },
    '.socaiLinks': {
      display: 'flex',
      a: {
        color: theme.palette.primary.main,
        fontSize: '2rem',
      },
    },
    '.copyrightContainer': {
      [theme.breakpoints.up('md')]: {
        gridColumn: '2/-1',
        textAlign: 'center',
        padding: theme.spacing(2, 0),
      },
    },
  },
}));
export const Footer = () => {
  return (
    <FooterContainer className="footerContainer" id="Contact">
      <Box className="footerContent">
        <Box className="greetingsCircle">
          <Typography component={'h1'}>Say hello</Typography>
        </Box>
        <Box className="socaiLinksContainer">
          <Link className="email" href="mailto:marvinxkiyingi@gmail.com">
            Marvinxkiyingi@gmail.com
          </Link>

          <Box className="socaiLinks">
            <IconButton href={resume} target="_blank">
              <AttachFileIcon fontSize="inherit" />
            </IconButton>
            <IconButton href="https://github.com/MarvinxKiyingi">
              <GitHubIcon fontSize="inherit" />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/marvin-kiyingi-371525184">
              <LinkedInIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
        <Box className="copyrightContainer">
          <Typography className="copyright">&copy; 2022</Typography>
        </Box>
      </Box>
    </FooterContainer>
  );
};
