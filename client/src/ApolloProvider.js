import React from 'react';
import App from './App';
import { InMemoryCache, createHttpLink, ApolloClient, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const authLink = setContext(() => {
  const token = localStorage.getItem('jwtToken');
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const uploadLink = createHttpLink({ uri: 'http://localhost:4000/graphql' });

export const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
