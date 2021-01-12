import React from 'react';

import {
  Container,
  Header,
  OrderName,
  OrderPrice,
  Text,
  ProductList,
} from './styles';

const OrderCard: React.FC = () => {
  return (
    <Container>
      <Header>
        <OrderName>Pedido 1</OrderName>
        <OrderPrice>R$ 50,00</OrderPrice>
      </Header>
      <Text>Há 30 minutos</Text>
      <ProductList>
        <Text>Pizza Calabresa</Text>
        <Text>Pizza 4 Queijos</Text>
        <Text>Pizza Marguerita</Text>
      </ProductList>
    </Container>
  );
};

export default OrderCard;
