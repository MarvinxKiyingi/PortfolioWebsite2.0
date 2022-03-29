import { useState } from 'react';

import './HamburgerMenu.css';

export const HamburgerMenu = () => {
  const [isAnimated, setAnimated] = useState(false);
  const handleHamburger = () => {
    setAnimated(!isAnimated);
  };
  return (
    <div
      className={isAnimated ? 'BurgerMenuBtn animate' : 'BurgerMenuBtn'}
      onClick={handleHamburger}
    >
      <div className="BurgerLayer">
        <div></div>
      </div>
    </div>
  );
};
