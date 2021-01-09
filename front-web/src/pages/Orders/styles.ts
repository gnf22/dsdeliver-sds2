import styled from 'styled-components';

export const OrdersContainer = styled.div`
  background-color: var(--light-color);

  h3 {
    margin: 0;
  }
`;

export const OrdersStepsContainer = styled.header`
  display: flex;
  justify-content: center;
  background-color: #fff;
  margin-bottom: 30px;
`;

export const OrdersStepsContent = styled.div`
  display: flex;
  padding: 25px 0;
  width: 70%;
`;

export const StepsTitle = styled.h1`
  font-weight: bold;
  font-size: 36px;
  line-height: 34px;
  letter-spacing: -0.015em;
  color: var(--primary-color);
  margin-right: 100px;
`;

export const StepsItems = styled.ul`
  list-style-type: none;

  li {
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.015em;
    color: var(--secondary-color);
  }
`;

export const StepsNumber = styled.span`
  font-size: 24px;
  font-style: normal;
  font-weight: bold;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: var(--primary-color);
  margin-right: 10px;
`;
