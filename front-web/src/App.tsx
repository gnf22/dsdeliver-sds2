import React from 'react';
import Globalstyle from './styles/global';

import NavBar from './components/NavBar';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />

      <Globalstyle />
    </div>
  );
};

export default App;
