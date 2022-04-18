import { IconButton, styled } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useEffect, useState } from 'react';

const BackToTopButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(1),
  right: theme.spacing(1),
  zIndex: 99,
  padding: 15,
  fontSize: '3rem',
  color: theme.palette.primary.main,
}));
export const BackToToButton = () => {
  const [showUpTopButton, setShowUpTopButton] = useState(false);

  const hanldeUpTopScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > window.innerHeight * 1) {
        setShowUpTopButton(true);
      } else {
        setShowUpTopButton(false);
      }
    });
  }, []);
  return (
    <>
      {showUpTopButton && (
        <BackToTopButton
          className="backToTopButton"
          onClick={hanldeUpTopScroll}
        >
          <ArrowCircleUpIcon fontSize="inherit" />
        </BackToTopButton>
      )}
    </>
  );
};
