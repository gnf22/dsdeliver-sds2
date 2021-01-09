import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <Logo />
      <a href="home">DS Delivery</a>
    </Container>
  );
};

export default NavBar;
