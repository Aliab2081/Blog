import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import App from './App.jsx';
import './styles/index.css';
import './styles/fonts.css';
import { ThemeProvider } from '@mui/material';
import theme from './mui/theme.js';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://api-us-west-2.hygraph.com/v2/cl5ex4xej1o9h01ug1jevguyc/master',
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);
