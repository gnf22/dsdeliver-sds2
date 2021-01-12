import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding-right: 5%;
  padding-left: 5%;
`;

export const Button = styled(RectButton)`
  background-color: #da5c5c;
  flex-direction: row;
  border-radius: 10px;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 50px;
  padding-right: 50px;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  letter-spacing: -0.24px;
`;
