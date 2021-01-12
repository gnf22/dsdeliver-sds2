import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin-top: 5%;
  align-items: center;
`;

export const Title = styled.Text`
  color: #263238;
  font-size: 26px;
  line-height: 35px;
  font-weight: bold;
  margin-top: 31px;
  text-align: center;
`;

export const SubTitle = styled.Text`
  color: #9e9e9e;
  font-size: 16px;
  margin-top: 15px;
  line-height: 22px;
  text-align: center;
`;

export const Footer = styled.View`
  margin-top: 5%;
  align-items: center;
`;

export const Button = styled(RectButton)`
  background-color: #da5c5c;
  flex-direction: row;
  border-radius: 10px;
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
