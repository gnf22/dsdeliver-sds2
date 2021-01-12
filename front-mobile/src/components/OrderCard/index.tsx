import React, { useCallback } from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';

import { Order } from '../../types';

import {
  Container,
  Header,
  OrderName,
  OrderPrice,
  Text,
  ProductList,
} from './styles';

dayjs.locale('pt-br');
dayjs.extend(relativeTime);

type Props = {
  order: Order;
};

export function formatPrice(price: number): string {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return formatter.format(price);
}

const OrderCard: React.FC<Props> = ({ order }: Props) => {
  const dateFromNow = useCallback((date: string) => {
    return dayjs(date).fromNow();
  }, []);

  return (
    <Container>
      <Header>
        <OrderName>Pedido {order.id}</OrderName>
        <OrderPrice>{formatPrice(order.total)}</OrderPrice>
      </Header>
      <Text>{dateFromNow(order.moment)}</Text>
      <ProductList>
        {order.products.map(product => (
          <Text key={product.id}>{product.name}</Text>
        ))}
      </ProductList>
    </Container>
  );
};

export default OrderCard;
