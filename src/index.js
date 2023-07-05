import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    overflow-x:hidden;
    box-sizing: border-box;
    font-size:16px;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);


