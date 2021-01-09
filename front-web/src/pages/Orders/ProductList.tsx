import React from 'react';
import { Product } from '../../types';
import ProductCard from './ProductCard';

import { OrdersListContainer, OrdersListItems } from './styles';

type Props = {
  products: Product[];
};

const ProductList: React.FC<Props> = ({ products }: Props) => {
  return (
    <OrdersListContainer>
      <OrdersListItems>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </OrdersListItems>
    </OrdersListContainer>
  );
};

export default ProductList;
