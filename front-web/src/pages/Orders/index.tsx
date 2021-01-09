import React from 'react';
import StepsHeader from './StepsHeader';

import { OrdersContainer } from './styles';

const Orders: React.FC = () => {
  return (
    <OrdersContainer>
      <StepsHeader />
    </OrdersContainer>
  );
};

export default Orders;
