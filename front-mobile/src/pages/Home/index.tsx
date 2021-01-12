import React, { useCallback } from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/deliveryman.png';

import {
  Container,
  Title,
  SubTitle,
  Footer,
  Button,
  ButtonText,
} from './styles';

const Home: React.FC = () => {
  const handleOnPress = useCallback(() => {
    /** */
  }, []);

  return (
    <>
      <Container>
        <Image source={logoImg} />
        <Title>Acompanhe os pedidos e {'\n'} entregue no prazo</Title>
        <SubTitle>
          Receba todos os pedidos do seu {'\n'} restaurante na palma da sua mão!
        </SubTitle>
      </Container>
      <Footer>
        <Button onPress={handleOnPress}>
          <ButtonText>VER PEDIDOS</ButtonText>
        </Button>
      </Footer>
    </>
  );
};

export default Home;
