import React from 'react';
import { Product } from './types';
import ProductCard from './ProductCard';

import { OrderListContainer, OrderListItems } from './styles';

type Props = {
  products: Product[];
};

const ProductList: React.FC<Props> = ({ products }: Props) => {
  return (
    <OrderListContainer>
      <OrderListItems>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </OrderListItems>
    </OrderListContainer>
  );
};

export default ProductList;
