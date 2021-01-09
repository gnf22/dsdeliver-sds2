import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { MainNavBar } from './styles';

const NavBar: React.FC = () => {
  return (
    <MainNavBar>
      <Logo />
      <a href="home">DS Delivery</a>
    </MainNavBar>
  );
};

export default NavBar;
