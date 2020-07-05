import React from 'react';
import 'react-native-gesture-handler';
import AppContainer from '../AppContainer';
import RootNavigator from '../../navigators';

const App = () => {
  return (
    <AppContainer>
      <RootNavigator />
    </AppContainer>
  );
};
export default App;
