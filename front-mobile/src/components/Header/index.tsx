import React from 'react';
import { Image, Text } from 'react-native';

import { Container, Title } from './styles';

import logoImg from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>DS Delivery</Title>
    </Container>
  );
};

export default Header;
