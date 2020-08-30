import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Cities } from "./City";
import { Countries } from "./Country";
import { CountryLanguages } from "./CountryLanguage";

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <div style={{
      backgroundColor: '#00000008',
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      height: '100vh',
      flexDirection: 'column',
    }}>
      <h2>Cities</h2>
      <Cities />

      <h2>Countries</h2>
      <Countries />

      <h2>Country Languages</h2>
      <CountryLanguages />
    </div>
  </ApolloProvider>
);
export default App;
