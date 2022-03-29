import { Button, styled, Typography } from '@mui/material';
import meEmoji from '../../styles/images/ME.png';

const ContentConatiner = styled('div')(({ theme }) => ({
  margin: theme.spacing(0, 2),
  height: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',

  h1: {
    textTransform: 'uppercase',
    color: theme.palette.primary.contrastText,
  },

  '.block': {
    margin: theme.spacing(0, 0, 2),
  },

  '.firstBlock': {
    '.meEmoji': {
      width: 100,
      [theme.breakpoints.up('xs')]: {
        width: 140,
      },
    },
    h1: {
      textAlign: 'end',
      display: 'flex',
      alignItems: 'flex-end',
      ...theme.typography.h4,
      [theme.breakpoints.up('xs')]: {
        ...theme.typography.h3,
      },
    },
  },

  '.firstBlock,.secondBlock': {
    display: 'flex',
  },

  '.secondBlock': {
    h1: {
      ...theme.typography.h4,
      [theme.breakpoints.up('xs')]: {
        ...theme.typography.h3,
      },
    },
    '.rotatedContainer': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      transform: 'rotate(180deg)',
      display: 'flex',
      alignItems: 'center',
      marginRight: theme.spacing(),

      h2: {
        writingMode: 'vertical-lr',
        letterSpacing: '3px',
        ...theme.typography.h6,
        [theme.breakpoints.up('xs')]: {
          ...theme.typography.h5,
        },
      },
    },
  },

  '.ctaButtonContainer': {
    display: 'flex',
    justifyContent: 'center',
    button: {
      width: 240,
    },
  },
}));

export const HeroContent = () => {
  return (
    <ContentConatiner className="HeroContant">
      <div className="firstBlock block">
        <img className="meEmoji" src={meEmoji} alt="MeEmoji" />
        <Typography component={'h1'} variant={'h3'}>
          Hi! i'm Marvin
        </Typography>
      </div>

      <div className="secondBlock block">
        <div className="rotatedContainer">
          <Typography component={'h2'} variant={'h5'}>
            Junior
          </Typography>
        </div>
        <div>
          <Typography component={'h1'} variant={'h3'}>
            Frontend Developer
          </Typography>
        </div>
      </div>

      <Typography className="thirdBlock block">
        Who is passionated about bringing both technical and pixel perfect
        visuals of digital products to life with, clean, responsive code and the
        users in minde.
      </Typography>

      <div className="ctaButtonContainer">
        <Button variant="contained">My Creations</Button>
      </div>
    </ContentConatiner>
  );
};
