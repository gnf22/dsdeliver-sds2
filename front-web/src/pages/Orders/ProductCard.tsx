import React from 'react';
import { Product } from './types';

import {
  OrderCardContainer,
  OrderCardTitle,
  OrderCardImage,
  OrderCardPrice,
  OrderCardDescription,
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
    <OrderCardContainer>
      <OrderCardTitle>{product.name}</OrderCardTitle>
      <OrderCardImage src={product.imageUri} alt={product.name} />
      <OrderCardPrice>{formatPrice(product.price)}</OrderCardPrice>
      <OrderCardDescription>
        <h3>Descrição</h3>
        <p>{product.description}</p>
      </OrderCardDescription>
    </OrderCardContainer>
  );
};

export default ProductCard;
