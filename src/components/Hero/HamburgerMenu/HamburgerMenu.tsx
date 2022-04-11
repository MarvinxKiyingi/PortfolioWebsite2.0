import { styled } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import './HamburgerMenu.css';
import { NavItems } from '../Navbar/NavItems';
import { SocialLinks } from '../../SocialLinks/SocialLinks';

type IAlign = 'top' | 'left' | 'bottom' | 'right';

const BurgerMenuBtnContainer = styled(Button)(({ theme }) => ({
  minWidth: 'unset',
  display: 'flex',
  justifyContent: 'end',
  padding: 'unset',
}));
const NavDrawer = styled(Drawer)(({ theme }) => ({
  '.MuiDrawer-paper': {
    backgroundColor: theme.palette.background.default,
    display: 'grid',
    gridTemplateRow: '1fr 9fr',
  },
}));
const ListItemsContainer = styled(Box)(({ theme }) => ({
  gridRow: '2/9',
  display: 'flex',
  flexDirection: 'column',
}));

export const HamburgerMenu = () => {
  const [isAnimated, setAnimated] = useState(false);

  const [alignment, setAligment] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (align: IAlign, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      if (open === true) {
        setAnimated(true);
      } else if (open === false) {
        setAnimated(false);
      }
      setAligment({ ...alignment, [align]: open });
    };

  const list = (align: IAlign) => (
    <ListItemsContainer
      sx={{ width: align === 'top' || align === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(align, false)}
      onKeyDown={toggleDrawer(align, false)}
    >
      <NavItems />
      <SocialLinks />
    </ListItemsContainer>
  );

  return (
    <>
      <BurgerMenuBtnContainer
        className={isAnimated ? 'BurgerMenuBtn animate' : 'BurgerMenuBtn'}
        onClick={
          toggleDrawer('right', true) || console.log('isAnimated', isAnimated)
        }
      >
        <div className="BurgerLayer">
          <div></div>
        </div>
      </BurgerMenuBtnContainer>

      <NavDrawer
        anchor={'right'}
        open={alignment['right']}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </NavDrawer>
    </>
  );
};
