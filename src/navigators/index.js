import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SignUpscreen from './SignUpScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpscreen} />
    </Stack.Navigator>
  );
};
export default RootNavigator;
