import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SearchScreen, LyricsDetailsScreen } from '../screens';

export type SearchStackParamList = {
  Search: undefined;
  LyricsDetails: undefined;
};

const { Navigator, Screen } = createStackNavigator();

const SearchStack = () => (
  <Navigator initialRouteName="Search">
    <Screen name="Search" component={SearchScreen} />
    <Screen name="LyricsDetails" component={LyricsDetailsScreen} />
  </Navigator>
);

export default SearchStack;
