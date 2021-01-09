import React, { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

import { AxiosResponse } from 'axios';
import api, { saveOrder } from '../../services/api';
import { OrderLocationData, Product } from './types';
import OrderLocation from './OrderLocation';
import ProductList from './ProductList';
import StepsHeader from './StepsHeader';

import { OrderContainer } from './styles';
import OrderSummary from './OrderSummary';
import Footer from '../../components/Footer';
import { checkIsSelected } from './helpers';

const Orders: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  useEffect(() => {
    api
      .get('/products')
      .then(response => setProducts(response.data))

      .catch(error => {
        toast.warning('Erro ao listar produtos');
      });
  }, []);

  const handleSelectProduct = useCallback(
    (product: Product) => {
      const isAlreadySelected = checkIsSelected(selectedProducts, product);

      if (isAlreadySelected) {
        const selected = selectedProducts.filter(
          item => item.id !== product.id,
        );
        setSelectedProducts(selected);
      } else {
        setSelectedProducts(previous => [...previous, product]);
      }
    },
    [selectedProducts],
  );

  const handleSubmit = useCallback(() => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ...orderLocation!,
      products: productsIds,
    };

    saveOrder(payload)
      .then((response: AxiosResponse) => {
        toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
        setSelectedProducts([]);
      })
      .catch(() => {
        toast.warning('Erro ao enviar pedido');
      });
  }, [orderLocation, selectedProducts]);

  return (
    <>
      <OrderContainer>
        <StepsHeader />
        <ProductList
          products={products}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrderLocation
          onChangeLocation={location => setOrderLocation(location)}
        />
        <OrderSummary
          amount={selectedProducts.length}
          totalPrice={totalPrice}
          onSubmit={handleSubmit}
        />
      </OrderContainer>
      <Footer />
    </>
  );
};

export default Orders;
