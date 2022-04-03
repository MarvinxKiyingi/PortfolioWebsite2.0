import { styled } from '@mui/material';
import { useState } from 'react';

import './HamburgerMenu.css';

const BurgerMenuBtnContainer = styled('div')((theme) => ({
  gridColumn: '4/5',
  display: 'flex',
  justifyContent: 'end',
}));

export const HamburgerMenu = () => {
  const [isAnimated, setAnimated] = useState(false);
  const handleHamburger = () => {
    setAnimated(!isAnimated);
  };
  return (
    <BurgerMenuBtnContainer
      className={isAnimated ? 'BurgerMenuBtn animate' : 'BurgerMenuBtn'}
      onClick={handleHamburger}
    >
      <div className="BurgerLayer">
        <div></div>
      </div>
    </BurgerMenuBtnContainer>
  );
};
