import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './Routes';
import Globalstyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <ToastContainer />
      <Globalstyle />
    </>
  );
};

export default App;
