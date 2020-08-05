import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import store from './src/store';
import MainNavigator from './src/navigation/MainNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
