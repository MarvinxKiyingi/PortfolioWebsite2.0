import { Button, styled, Typography } from '@mui/material';
import meEmoji from '../../styles/images/ME.png';

const ContentConatiner = styled('div')(({ theme }) => ({
  dispaly: 'flex',
  margin: '0px auto',
  width: '100%',

  [theme.breakpoints.up('xl')]: {
    maxWidth: '80%',
  },

  '.HeroContant': {
    margin: theme.spacing(0, 2),
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 3),
    },

    h1: {
      textTransform: 'uppercase',
      color: theme.palette.primary.contrastText,
    },

    '.block': {
      margin: theme.spacing(0, 0, 2),
    },

    '.firstBlock': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      [theme.breakpoints.up('sm')]: {
        '@media (orientation: landscape)': {
          gridTemplateColumns: '1fr 3fr',
        },
      },
      [theme.breakpoints.up('md')]: {
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
        '& div:nth-of-type(1)': {
          order: 2,
        },
        '& div:nth-of-type(2)': {
          order: 1,
        },
      },

      '.imgContainer': {
        '.meEmoji': {
          width: '70%',
          [theme.breakpoints.up('sm')]: {
            '@media (orientation: landscape)': {
              width: 'unset',
            },
          },
          [theme.breakpoints.up('lg')]: {
            width: '60%',
            display: 'flex',
            maxWidth: 335,
          },
        },
      },
      '.firstBlock-headingContainer': {
        textAlign: 'end',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'end',
        [theme.breakpoints.up('md')]: {
          alignItems: 'center',
          justifyContent: 'start',
        },
        h1: {
          ...theme.typography.h4,
          fontSize: 'clamp(24px, 12vw, 108px)',
          [theme.breakpoints.up('md')]: {
            margin: theme.spacing(10, 0, 0),
            fontSize: 'clamp(24px, 7vw, 108px)',
          },
        },
      },
    },

    '.secondBlock': {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        height: 209,
      },
      h1: {
        ...theme.typography.h4,
        fontSize: 'clamp(24px, 12vw, 108px)',
        [theme.breakpoints.up('md')]: {
          fontSize: 'clamp(24px, 7vw, 108px)',
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
          textTransform: 'uppercase',
          writingMode: 'vertical-lr',
          letterSpacing: 4,
          ...theme.typography.h6,
          [theme.breakpoints.up('md')]: {
            letterSpacing: 8,
          },
          [theme.breakpoints.up('lg')]: {
            letterSpacing: theme.spacing(),
          },
        },
      },
      '.secondBlock-headingContainer': {
        [theme.breakpoints.up('md')]: {
          display: 'flex',
          alignItems: 'center',
        },
      },
    },

    '.thirdBlock': {
      fontSize: 'clamp(14px, 4vw, 20px)',
      maxWidth: 1200,
      color: theme.palette.primary.contrastText,
      fontWeight: 500,
    },

    '.ctaButtonContainer': {
      display: 'flex',
      justifyContent: 'center',
      button: {
        width: 240,
      },
    },
  },
}));

export const HeroContent = () => {
  return (
    <ContentConatiner className="HeroContainer">
      <div className="HeroContant">
        <div className="firstBlock block">
          <div className="imgContainer">
            <img className="meEmoji" src={meEmoji} alt="MeEmoji" />
          </div>
          <div className="firstBlock-headingContainer">
            <Typography component={'h1'} variant={'h3'}>
              Hi! i'm Marvin
            </Typography>
          </div>
        </div>

        <div className="secondBlock block">
          <div className="rotatedContainer">
            <Typography component={'h2'} variant={'h5'}>
              Junior
            </Typography>
          </div>
          <div className="secondBlock-headingContainer">
            <Typography component={'h1'} variant={'h3'}>
              Frontend Developer
            </Typography>
          </div>
        </div>

        <Typography className="thirdBlock block" component={'p'}>
          Who is passionated about bringing both technical and pixel perfect
          visuals of digital products to life through, clean, responsive code
          with the users in minde.
        </Typography>

        <div className="ctaButtonContainer">
          <Button className="cta" variant="contained">
            My Creations
          </Button>
        </div>
      </div>
    </ContentConatiner>
  );
};
