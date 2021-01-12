import React, { useCallback } from 'react';
import { Image } from 'react-native';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Container, Title } from './styles';

import logoImg from '../../assets/logo.png';

const Header: React.FC = () => {
  const navigation = useNavigation();

  const handleOnPress = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <Container>
        <Image source={logoImg} />
        <Title>DS Delivery</Title>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Header;
