import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { Container, LogoText } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <Logo />
      <LogoText to="/">DS Delivery</LogoText>
    </Container>
  );
};

export default NavBar;
