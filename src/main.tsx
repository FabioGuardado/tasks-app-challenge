import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';

import { ModalProvider } from './context/ModalContext';

import App from './App';
import apolloClient from './api/apolloClient';

import './styles/globals.scss';
import Modal from './components/Modal/Modal';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <ModalProvider>
        <>
          <App />
          <Modal />
        </>
      </ModalProvider>
    </ApolloProvider>
  </React.StrictMode>
);
