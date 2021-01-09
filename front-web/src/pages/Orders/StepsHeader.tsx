/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import {
  OrdersStepsContainer,
  OrdersStepsContent,
  StepsTitle,
  StepsItems,
  StepsNumber,
} from './styles';

const StepHeader: React.FC = () => {
  return (
    <OrdersStepsContainer>
      <OrdersStepsContent>
        <StepsTitle>
          SIGA AS
          <br />
          ETAPAS
        </StepsTitle>
        <StepsItems>
          <li>
            <StepsNumber>1</StepsNumber>
            Selecione os produtos e localização
          </li>
          <li>
            <StepsNumber>2</StepsNumber>
            Depois clique em
            <strong> "ENVIAR PEDIDO"</strong>
          </li>
        </StepsItems>
      </OrdersStepsContent>
    </OrdersStepsContainer>
  );
};

export default StepHeader;
