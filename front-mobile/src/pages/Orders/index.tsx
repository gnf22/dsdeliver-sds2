/* eslint-disable prettier/prettier */
import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import { Text } from '../../components/OrderCard/styles';
import api from '../../services/api';
import { Order } from '../../types';

import { Container } from './styles';

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const fetchData = useCallback(() => {
    setIsLoading(true);
    api
      .get('/orders')
      .then(response => setOrders(response.data))
      .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (isFocused) {
      fetchData()
    }
  }, [isFocused, fetchData]);

  const handleOnPress = useCallback(
    (order: Order) => {
      navigation.navigate('OrderDetails', {
        order,
      });
    },
    [navigation],
  );

  return (
    <>
      <Header />
      <Container>
        {isLoading ? (
          <Text>Buscando pedidos...</Text>
        ) : (
            orders.map(order => (
              <TouchableWithoutFeedback
                key={order.id}
                onPress={() => handleOnPress(order)}
              >
                <OrderCard order={order} />
              </TouchableWithoutFeedback>
            ))
          )}
      </Container>
    </>
  );
};

export default Orders;
