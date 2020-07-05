import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const AppContainer = ({ children }) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default AppContainer;
