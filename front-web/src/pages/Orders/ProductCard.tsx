import React from 'react';
import { Product } from './types';

import {
  OrderCardContainer,
  OrderCardTitle,
  OrderCardImage,
  OrderCardPrice,
  OrderCardDescription,
} from './styles';
import { formatPrice } from './helpers';

type Props = {
  product: Product;
  onSelectProduct: (product: Product) => void;
  isSelected: boolean;
};

const ProductCard: React.FC<Props> = ({
  product,
  onSelectProduct,
  isSelected,
}: Props) => {
  return (
    <OrderCardContainer
      isSelected={isSelected}
      onClick={() => onSelectProduct(product)}
    >
      <OrderCardTitle isSelected={isSelected}>{product.name}</OrderCardTitle>
      <OrderCardImage src={product.imageUri} alt={product.name} />
      <OrderCardPrice isSelected={isSelected}>
        {formatPrice(product.price)}
      </OrderCardPrice>
      <OrderCardDescription>
        <h3>Descrição</h3>
        <p>{product.description}</p>
      </OrderCardDescription>
    </OrderCardContainer>
  );
};

export default ProductCard;
