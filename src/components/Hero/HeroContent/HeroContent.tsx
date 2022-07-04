import { Button, styled, Typography } from '@mui/material';
import meEmoji from '../../../styles/images/meemoji.png';

const ContentConatiner = styled('div')(({ theme }) => ({
  margin: 'auto 20px',

  '.HeroContant': {
    minHeight: '80vh',
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gridGap: '20px',
    margin: -1,
    padding: '20px 0',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(12,1fr)',
      // alignContent: 'center',
      alignItems: 'center',
    },

    h1: {
      color: theme.palette.primary.contrastText,
      textTransform: 'uppercase',
      ...theme.typography.h4,
      fontSize: '2rem',
      [theme.breakpoints.up('xs')]: {
        fontSize: '3rem',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '4rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '5rem',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 'clamp(78.4px, 6vw, 168px)',
      },
    },

    '.firstHeadingContainer': {
      gridColumn: '1/-1',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gridGap: '20px',
      alignSelf: 'center',
      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(12,1fr)',
      },
      [theme.breakpoints.up('md')]: {
        gridColumn: '1/-2',
        '& div:nth-of-type(1)': {
          order: 2,
        },
        '& div:nth-of-type(2)': {
          order: 1,
        },
      },

      '.imgContainer': {
        gridColumn: '1/4',
        margin: '0px 10px',
        maxWidth: '160px',
        height: '100%',
        [theme.breakpoints.up('xs')]: {
          margin: '0px 15px',
        },
        [theme.breakpoints.up('sm')]: {
          gridColumn: '3/6',
          margin: 'unset',
        },
        [theme.breakpoints.up('md')]: {
          gridColumn: '9/12',
          // margin: '0 0 -15%',
          // maxWidth: '60%',
        },
        [theme.breakpoints.up('xl')]: {
          gridColumn: '9/12',
        },

        '.meEmoji': {
          width: '100%',
        },
      },

      '.firstHeadingContainer-headingWrapper': {
        gridColumn: '4/5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
        [theme.breakpoints.up('sm')]: {
          gridColumn: '6/12',
          // alignItems: 'end',
        },
        [theme.breakpoints.up('md')]: {
          gridColumn: '2/9',
          // alignItems: 'end',
          justifyContent: 'initial',
        },

        h1: {
          textAlign: 'end',
          [theme.breakpoints.up('md')]: {
            textAlign: 'initial',
          },
        },
      },
    },

    '.secondHeadingContainer': {
      gridColumn: '1/-1',
      display: 'flex',
      [theme.breakpoints.up('sm')]: {
        gridColumn: '2/-2',
        height: 'fit-content',
        alignItems: 'center',
      },

      '.rotatedContainer': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        transform: 'rotate(180deg)',
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(),
        padding: '6px',
        [theme.breakpoints.up('sm')]: {
          padding: theme.spacing(),
          height: 'fit-content',
        },
        [theme.breakpoints.up('xl')]: {
          padding: '18px',
        },

        h2: {
          textTransform: 'uppercase',
          writingMode: 'vertical-lr',
          letterSpacing: 8,
          ...theme.typography.h6,
          fontSize: 16,
          // '-webkit-text-stroke-width': 'medium',
          [theme.breakpoints.up('xs')]: {
            ...theme.typography.h6,
          },
          [theme.breakpoints.up('sm')]: {
            letterSpacing: 16,
          },
          [theme.breakpoints.up('lg')]: {
            ...theme.typography.h5,
            lineHeight: 'unset ',
          },
          [theme.breakpoints.up('xl')]: {
            ...theme.typography.h4,
            lineHeight: 'unset ',
          },
        },
      },

      '.secondHeadingContainer-headingWrapper': {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
          gridColumn: '2/-2',
        },
        h1: {
          [theme.breakpoints.up('md')]: {
            margin: theme.spacing(2, 0, 0),
          },
        },
      },
    },

    '.descriptionText': {
      gridColumn: '1/-1',
      height: 'min-content',
      alignSelf: 'center ',
      color: theme.palette.primary.contrastText,
      fontSize: '1rem',
      [theme.breakpoints.up('sm')]: {
        gridColumn: '2/-2',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '1.6rem',
      },
    },

    '.ctaButtonContainer': {
      gridColumn: '1/-1',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      margin: 'auto 0px',
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(12,1fr)',
        gridColumn: '2/-2',
      },

      '.ctaButtonContainer-ctaButtonWrapper': {
        gridColumn: '2/4',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
          gridColumn: '2/-2',
        },
      },

      '.cta': {
        width: '100%',
        maxWidth: '241px',
        [theme.breakpoints.up('lg')]: {
          padding: '16px 15px',
        },
        [theme.breakpoints.up('xl')]: {
          maxWidth: '301px',
        },
      },
    },
  },
}));

export const HeroContent = () => {
  return (
    <ContentConatiner className="HeroContainer">
      <div className="HeroContant">
        <div className="firstHeadingContainer">
          <div className="imgContainer">
            <img className="meEmoji" src={meEmoji} alt="MeEmoji" />
          </div>

          <div className="firstHeadingContainer-headingWrapper">
            <Typography component={'h1'} variant={'h3'}>
              Hi! i'm Marvin
            </Typography>
          </div>
        </div>

        <div className="secondHeadingContainer">
          <div className="rotatedContainer">
            <Typography component={'h2'} variant={'h5'}>
              Junior
            </Typography>
          </div>

          <div className="secondHeadingContainer-headingWrapper">
            <Typography component={'h1'} variant={'h3'}>
              Frontend Developer
            </Typography>
          </div>
        </div>

        <Typography className="descriptionText " component={'p'}>
          Who is interested in design and passionate about bringing both
          technical and pixel-perfect visuals of digital products to life
          through responsive code and the users in mind.
        </Typography>

        <div className="ctaButtonContainer">
          <div className="ctaButtonContainer-ctaButtonWrapper">
            <Button
              className="cta"
              variant="contained"
              href="/#Portfolio"
              aria-label="View portfolio"
            >
              My creations
            </Button>
          </div>
        </div>
      </div>
    </ContentConatiner>
  );
};
