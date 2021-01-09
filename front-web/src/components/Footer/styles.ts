import styled from 'styled-components';

export const MainFooter = styled.footer`
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: var(--dark-color);
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #fff;
`;

export const FooterIcons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;

  > * {
    margin-right: 5px;
  }
`;
