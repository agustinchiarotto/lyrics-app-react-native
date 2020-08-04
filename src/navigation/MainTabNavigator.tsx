import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { HistoryScreen, SearchScreen } from '../screens';

const Tab = createBottomTabNavigator();

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

const MainTabNavigator = () => (
  <Tab.Navigator screenOptions={navigatorScreenOptions} tabBarOptions={navigatorTabBarOptions}>
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="History" component={HistoryScreen} />
  </Tab.Navigator>
);

export default MainTabNavigator;
