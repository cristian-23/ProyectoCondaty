/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { UserContextProvider } from './src/context/usuarioContext';
import { ReservasContextProvider } from './src/context/reservasContext';
import Routes from './src/routes';

function App(){

  return (
    <UserContextProvider>
      <ReservasContextProvider>
      <Routes/>
      </ReservasContextProvider>
      </UserContextProvider>

  )
}


export default App;
