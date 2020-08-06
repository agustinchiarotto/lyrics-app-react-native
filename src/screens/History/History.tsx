import React from 'react';
import { Button, StatusBar, Text } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { MainTabsParamList } from '../../navigation/TabNavigator';
import { RootStackParamList } from '../../navigation/MainNavigator';

import { Header } from '../../components';
import { MainContainer } from './styles';

type HistoryScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabsParamList, 'History'>,
  StackNavigationProp<RootStackParamList>
>;

interface Props {
  navigation: HistoryScreenNavigationProp;
}

const HistoryScreen = ({ navigation }: Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <MainContainer>
        <Header title="History" />
        <Text>History Screen</Text>
        <Button onPress={() => navigation.navigate('LyricsDetails')} title=" Go To Lyrics Detail" />
      </MainContainer>
    </>
  );
};

export default HistoryScreen;
