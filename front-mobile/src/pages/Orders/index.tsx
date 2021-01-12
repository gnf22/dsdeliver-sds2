import React from 'react';
import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';

import { Container } from './styles';

const Orders: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </Container>
    </>
  );
};

export default Orders;
