import { Button, styled, Typography } from '@mui/material';
import meEmoji from '../../styles/images/Me.png';

const ContentConatiner = styled('div')(({ theme }) => ({
  margin: 'auto 20px',

  '.HeroContant': {
    minHeight: '80vh',
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gridGap: '20px',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(12,1fr)',
    },

    h1: {
      color: theme.palette.primary.contrastText,
      textTransform: 'uppercase',
      ...theme.typography.h4,
      fontSize: '3rem',
      [theme.breakpoints.up('sm')]: {
        fontSize: '4.9rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 'clamp(24px, 6vw, 178px)',
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
        '& div:nth-of-type(1)': {
          order: 2,
        },
        '& div:nth-of-type(2)': {
          order: 1,
        },
      },

      '.imgContainer': {
        gridColumn: '1/4',
        margin: '0px 25px',
        maxWidth: '160px',
        height: '100%',
        [theme.breakpoints.up('sm')]: {
          gridColumn: '2/5',
          margin: 'unset',
        },
        [theme.breakpoints.up('md')]: {
          gridColumn: '9/11',
          margin: '0 0 -20%',
          maxWidth: '80%',
        },
        [theme.breakpoints.up('lg')]: {
          margin: '0 0 -10%',
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
          alignItems: 'end',
        },
        [theme.breakpoints.up('md')]: {
          gridColumn: '2/9',
          alignItems: 'end',
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
      gridColumn: '1/-2',
      display: 'flex',
      [theme.breakpoints.up('sm')]: {
        gridColumn: '2/-2',
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
        },
        [theme.breakpoints.up('xl')]: {
          padding: '18px',
        },

        h2: {
          textTransform: 'uppercase',
          writingMode: 'vertical-lr',
          letterSpacing: 8,
          ...theme.typography.h6,
          lineHeight: 'unset ',
          [theme.breakpoints.up('sm')]: {
            letterSpacing: 16,
          },
          [theme.breakpoints.up('md')]: {
            letterSpacing: 12,
            ...theme.typography.h5,
            lineHeight: 'unset ',
          },
          [theme.breakpoints.up('lg')]: {
            ...theme.typography.h4,
            lineHeight: 'unset ',
          },
          [theme.breakpoints.up('xl')]: {},
        },
      },

      '.secondHeadingContainer-headingWrapper': {
        display: 'flex',
        alignItems: 'center',
        h1: {
          [theme.breakpoints.up('md')]: {
            margin: theme.spacing(2, 0, 0),
          },
        },
        [theme.breakpoints.up('sm')]: {
          gridColumn: '2/-2',
        },
      },
    },

    '.descriptionText': {
      gridColumn: '1/-1',
      height: 'min-content',
      alignSelf: 'center ',
      color: theme.palette.primary.contrastText,
      fontSize: '1rem',
      fontWeight: 500,
      [theme.breakpoints.up('sm')]: {
        gridColumn: '2/-2',
        fontSize: '1.5rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '1.8rem',
      },
    },

    '.ctaButtonContainer': {
      gridColumn: '1/-1',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      margin: 'auto 0px',
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(12,1fr)',
      },
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(12,1fr)',
      },

      '.ctaButtonContainer-ctaButtonWrapper': {
        gridColumn: '1/-1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
          Who is passionated about bringing both technical and pixel perfect
          visuals of digital products to life through, clean, responsive code
          with the users in minde.
        </Typography>

        <div className="ctaButtonContainer">
          <div className="ctaButtonContainer-ctaButtonWrapper">
            <Button className="cta" variant="contained">
              My Creations
            </Button>
          </div>
        </div>
      </div>
    </ContentConatiner>
  );
};
