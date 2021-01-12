import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/deliveryman.png';
import Header from '../../components/Header';

import {
  Container,
  Title,
  SubTitle,
  Footer,
  Button,
  ButtonText,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const handleOnPress = useCallback(() => {
    navigation.navigate('Orders');
  }, [navigation]);

  return (
    <>
      <Header />
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
