import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.nav`
  height: 70px;
  background-color: #da5c5c;
  padding-left: 47px;
  display: flex;
  align-items: center;
`;

export const LogoText = styled(Link)`
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: #fff;
  margin-left: 15px;
`;
