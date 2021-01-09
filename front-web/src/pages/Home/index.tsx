import React from 'react';

import { ReactComponent as MainImage } from '../../assets/main.svg';
import Footer from '../../components/Footer';

import {
  HomeContainer,
  HomeContent,
  HomeActions,
  HomeTitle,
  HomeSubTitle,
  HomeBtnOrder,
  HomeImage,
} from './styles';

const Home: React.FC = () => {
  return (
    <>
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

            <HomeBtnOrder to="orders">FAZER PEDIDO</HomeBtnOrder>
          </HomeActions>

          <HomeImage>
            <MainImage />
          </HomeImage>
        </HomeContent>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;
