import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import { LyricsDetailsScreen } from '../screens';

export type RootStackParamList = {
  History: undefined;
  LyricsDetails: undefined;
};

const { Navigator, Screen } = createStackNavigator();

const MainNavigator = () => (
  <Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
    <Screen name="MainTabs" component={TabNavigator} />
    <Screen name="LyricsDetails" component={LyricsDetailsScreen} />
  </Navigator>
);

export default MainNavigator;
