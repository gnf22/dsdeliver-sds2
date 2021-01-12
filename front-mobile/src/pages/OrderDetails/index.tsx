import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Linking } from 'react-native';
import Header from '../../components/Header';
import { Order } from '../../types';

import { Container, Button, ButtonText } from './styles';
import OrderCard from '../../components/OrderCard';
import api from '../../services/api';

type Props = {
  route: {
    params: {
      order: Order;
    };
  };
};

const OrderDetails: React.FC<Props> = ({ route }: Props) => {
  const { order } = route.params;
  const navigation = useNavigation();

  const handleOnCancel = useCallback(() => {
    navigation.navigate('Orders');
  }, [navigation]);

  const handleConfirmDelivery = useCallback(() => {
    api
      .put(`/orders/${order.id}/delivered`)
      .then(() => {
        Alert.alert(`Pedido ${order.id} confirmado com sucesso!`);
        navigation.navigate('Orders');
      })
      .catch(() => {
        Alert.alert(`Houve um erro ao confirmar o pedido ${order.id}`);
      });
  }, [order.id, navigation]);

  const handleStartNavigation = useCallback(() => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`,
    );
  }, []);

  return (
    <>
      <Header />
      <Container>
        <OrderCard order={order} />
        <Button>
          <ButtonText onPress={handleStartNavigation}>
            INICIAR NAVEGAÇÃO
          </ButtonText>
        </Button>
        <Button>
          <ButtonText onPress={handleConfirmDelivery}>
            CONFIRMAR ENTREGA
          </ButtonText>
        </Button>
        <Button>
          <ButtonText onPress={handleOnCancel}>CANCELAR</ButtonText>
        </Button>
      </Container>
    </>
  );
};

export default OrderDetails;
