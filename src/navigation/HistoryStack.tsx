import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HistoryScreen, LyricsDetailsScreen } from '../screens';

export type HistoryStackParamList = {
  History: undefined;
  LyricsDetails: undefined;
};

const { Navigator, Screen } = createStackNavigator();

const HistoryStack = () => (
  <Navigator initialRouteName="History">
    <Screen name="History" component={HistoryScreen} />
    <Screen name="LyricsDetails" component={LyricsDetailsScreen} />
  </Navigator>
);

export default HistoryStack;
