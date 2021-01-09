import React from 'react';
import { Product } from './types';
import ProductCard from './ProductCard';

import { OrderListContainer, OrderListItems } from './styles';
import { checkIsSelected } from './helpers';

type Props = {
  products: Product[];
  selectedProducts: Product[];
  onSelectProduct: (product: Product) => void;
};

const ProductList: React.FC<Props> = ({
  products,
  selectedProducts,
  onSelectProduct,
}: Props) => {
  return (
    <OrderListContainer>
      <OrderListItems>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onSelectProduct={onSelectProduct}
            isSelected={checkIsSelected(selectedProducts, product)}
          />
        ))}
      </OrderListItems>
    </OrderListContainer>
  );
};

export default ProductList;
