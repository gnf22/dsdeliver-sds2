import React from 'react';
import { Product } from '../../types';

import {
  OrdersCardContainer,
  OrdersCardTitle,
  OrdersCardImage,
  OrdersCardPrice,
  OrdersCardDescription,
} from './styles';

type Props = {
  product: Product;
};

function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return formatter.format(price);
}

const ProductCard: React.FC<Props> = ({ product }: Props) => {
  return (
    <OrdersCardContainer>
      <OrdersCardTitle>{product.name}</OrdersCardTitle>
      <OrdersCardImage src={product.imageUri} alt={product.name} />
      <OrdersCardPrice>{formatPrice(product.price)}</OrdersCardPrice>
      <OrdersCardDescription>
        <h3>Descrição</h3>
        <p>{product.description}</p>
      </OrdersCardDescription>
    </OrdersCardContainer>
  );
};

export default ProductCard;
