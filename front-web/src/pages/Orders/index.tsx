import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Product } from '../../types';
import ProductList from './ProductList';
import StepsHeader from './StepsHeader';

import { OrdersContainer } from './styles';

const Orders: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  console.log(products);

  useEffect(() => {
    api
      .get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <OrdersContainer>
      <StepsHeader />
      <ProductList products={products} />
    </OrdersContainer>
  );
};

export default Orders;
