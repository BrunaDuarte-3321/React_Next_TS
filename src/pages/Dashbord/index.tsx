import React from 'react';
import logo from '../../assets/logo.svg';

import { Title, Form } from './styles';

export const Dashbord: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de repositório do GitHub</Title>
      <Form>
        <input type="text" placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </Form>
    </>
  );
};
