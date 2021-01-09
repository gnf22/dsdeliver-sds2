import React from 'react';

import { ReactComponent as MainImage } from '../../assets/main.svg';

import {
  HomeContainer,
  HomeContent,
  HomeActions,
  HomeTitle,
  HomeSubTitle,
  HomeImage,
} from './styles';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <HomeActions>
          <HomeTitle>
            Faça seu pedido
            <br />
            que entregamos
            <br />
            para você!!!
          </HomeTitle>

          <HomeSubTitle>
            Escolha seu pedido e em poucos minutos
            <br />
            levaremos na sua porta!
          </HomeSubTitle>

          <a href="orders">FAZER PEDIDO</a>
        </HomeActions>

        <HomeImage>
          <MainImage />
        </HomeImage>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
