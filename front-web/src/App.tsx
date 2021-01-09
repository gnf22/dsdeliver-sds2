import React from 'react';
import Globalstyle from './styles/global';

import NavBar from './components/NavBar';
import Home from './components/Home';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Globalstyle />
    </>
  );
};

export default App;
