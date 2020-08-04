import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import HistoryStack from './HistoryStack';
import SearchStack from './SearchStack';

type Route = RouteProp<Record<string, object | undefined>, string>;

const getIconName = (routeName: string) => {
  let iconName = '';
  switch (routeName) {
    case 'Search':
      iconName = 'search';
      break;
    case 'History':
      iconName = 'history';
      break;
    default:
      iconName = 'help';
      break;
  }
  return iconName;
};

const navigatorScreenOptions = ({ route }: { route: Route }) => ({
  tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
    const iconName = getIconName(route.name);
    const iconSize = focused ? size * 1.25 : size;
    return <MaterialIcon name={iconName} size={iconSize} color={color} />;
  },
});

const navigatorTabBarOptions = {
  allowFontScalling: false,
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
  labelStyle: {
    fontSize: 12,
  },
};

const { Navigator, Screen } = createBottomTabNavigator();

const MainTabNavigator = () => (
  <Navigator screenOptions={navigatorScreenOptions} tabBarOptions={navigatorTabBarOptions}>
    <Screen name="Search" component={SearchStack} />
    <Screen name="History" component={HistoryStack} />
  </Navigator>
);

export default MainTabNavigator;
