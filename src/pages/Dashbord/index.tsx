import React from 'react';
import logo from '../../assets/logo.svg';

import { Title, Form, Repos } from './styles';

import { FiChevronRight } from 'react-icons/fi';

export const Dashbord: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de repositório do GitHub</Title>
      <Form>
        <input type="text" placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </Form>
      <Repos>
        <a href="/repositories">
          <img
            src="https://avatars.githubusercontent.com/u/62619506?s=400&u=a2ebb8e981623362821eee95f55a03cdad954990&v=4"
            alt="Repositório"
          />
          <div>
            <strong>aluiziodeveloper/mini-curso-reactjs</strong>
            <p>Repositório do mini curso gratuito de ReactJs</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repos>
    </>
  );
};
