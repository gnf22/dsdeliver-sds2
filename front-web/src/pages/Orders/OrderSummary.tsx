import React from 'react';
import { formatPrice } from './helpers';

import {
  OrderSummaryContainer,
  OrderSummaryContent,
  AmountSelectedContainer,
  OrderSummaryTotal,
  AmountSelected,
  OrderSummaryMakeOrder,
} from './styles';

type Props = {
  amount: number;
  totalPrice: number;
  onSubmit: () => void;
};

const OrderSummary: React.FC<Props> = ({
  amount,
  totalPrice,
  onSubmit,
}: Props) => {
  return (
    <OrderSummaryContainer>
      <OrderSummaryContent>
        <div>
          <AmountSelectedContainer>
            <AmountSelected>{amount}</AmountSelected>
            PEDIDOS SELECIONADOS
          </AmountSelectedContainer>
          <OrderSummaryTotal>
            <AmountSelected>{formatPrice(totalPrice)}</AmountSelected>
            VALOR TOTAL
          </OrderSummaryTotal>
        </div>
        <OrderSummaryMakeOrder onClick={onSubmit}>
          FAZER PEDIDO
        </OrderSummaryMakeOrder>
      </OrderSummaryContent>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
