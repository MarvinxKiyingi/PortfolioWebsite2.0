import { Link, styled } from '@mui/material';

const InitialsLogo = styled(Link)(({ theme }) => ({
  gridColumn: '1/2',
  alignSelf: 'center',
}));
export const Logo = () => {
  return (
    <InitialsLogo className="logo" href="/">
      <svg
        width="98"
        height="37"
        viewBox="0 0 98 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M78.2382 25.4814L82.3986 20.8555L98 36.2364H88.8703L78.2382 25.4814Z"
          fill="black"
        />
        <path
          d="M0 34.9643H9.01415L28.7759 11.9508L29.5849 29.4133C31.8376 38.9296 38.3764 38.2199 43.4528 29.4133L54.4316 13.8012L54.0849 29.4133C54.807 39.1336 62.8084 39.2574 70.1486 29.4133L94.1863 0.386276H85.4033L61.7123 28.6038L61.4811 4.31823C59.4992 -1.39911 55.839 -1.47953 51.8892 4.31823L36.5189 26.0596L35.2476 4.31825C32.7972 0.0209913 30.212 -0.262212 26.1179 4.31823L0 34.9643Z"
          fill="black"
        />
      </svg>
    </InitialsLogo>
  );
};
