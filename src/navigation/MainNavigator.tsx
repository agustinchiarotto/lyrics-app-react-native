import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import { LyricsDetailsScreen } from '../screens';
import { SongHistoryData } from 'src/types';

export type RootStackParamList = {
  MainTabs: undefined;
  LyricsDetails: {
    songData: SongHistoryData;
  };
};

const { Navigator, Screen } = createStackNavigator();

const MainNavigator = () => (
  <Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
    <Screen name="MainTabs" component={TabNavigator} />
    <Screen name="LyricsDetails" component={LyricsDetailsScreen} />
  </Navigator>
);

export default MainNavigator;
