import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { OrderLocationData, Product } from './types';
import OrderLocation from './OrderLocation';
import ProductList from './ProductList';
import StepsHeader from './StepsHeader';

import { OrderContainer } from './styles';

const Orders: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

  useEffect(() => {
    api
      .get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <OrderContainer>
      <StepsHeader />
      <ProductList products={products} />
      <OrderLocation
        onChangeLocation={location => setOrderLocation(location)}
      />
    </OrderContainer>
  );
};

export default Orders;
