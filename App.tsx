import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import store from './src/store';
import MainTabNavigator from './src/navigation/MainTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainTabNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
