import React from 'react';
import { Rotas } from './routes';
import { GlobalStyled } from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Rotas />
      <GlobalStyled />
    </>
  );
};

export default App;
