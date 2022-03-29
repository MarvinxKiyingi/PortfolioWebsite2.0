import { Link, styled } from '@mui/material';

const InitialsLogo = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
export const Logo = () => {
  return (
    <InitialsLogo href="/">
      <svg
        width="78"
        height="30"
        viewBox="0 0 78 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M62.2712 20.2811L65.5825 16.5993L78 28.8412H70.7335L62.2712 20.2811Z"
          fill="black"
        />
        <path
          d="M0 27.8287H7.17453L22.9033 9.51187L23.5472 23.4106C25.3401 30.9848 30.5445 30.4199 34.5849 23.4106L43.3231 10.9846L43.0472 23.4106C43.6219 31.1471 49.9904 31.2457 55.8325 23.4106L74.9646 0.307432H67.9741L49.1179 22.7663L48.934 3.43695C47.3565 -1.11359 44.4433 -1.1776 41.2995 3.43695L29.066 20.7413L28.0542 3.43696C26.1039 0.0166951 24.0463 -0.208712 20.7877 3.43695L0 27.8287Z"
          fill="black"
        />
      </svg>
    </InitialsLogo>
  );
};
