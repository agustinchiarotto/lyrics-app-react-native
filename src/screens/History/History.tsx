import React from 'react';
import { Button, FlatList, StatusBar } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { MainTabsParamList } from '../../navigation/TabNavigator';
import { RootStackParamList } from '../../navigation/MainNavigator';

import { Header, SongCard } from '../../components';
import { MainContainer, Spacing, additionalStyles } from './styles';

type HistoryScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabsParamList, 'History'>,
  StackNavigationProp<RootStackParamList>
>;

interface Props {
  navigation: HistoryScreenNavigationProp;
}

type Song = {
  artistName: string;
  songName: string;
};

const fakeData: Song[] = [
  { artistName: 'Lorem ipsum', songName: 'Lorem ipsum' },
  { artistName: 'Lorem ipsum', songName: 'Lorem ipsum' },
  { artistName: 'Lorem ipsum', songName: 'Lorem ipsum' },
  { artistName: 'Lorem ipsum', songName: 'Lorem ipsum' },
  { artistName: 'Lorem ipsum', songName: 'Lorem ipsum' },
  { artistName: 'Lorem ipsum', songName: 'Lorem ipsum' },
  { artistName: 'Lorem ipsum', songName: 'Lorem ipsum' },
  { artistName: 'Lorem ipsum', songName: 'Lorem ipsum' },
  { artistName: 'Lorem ipsum', songName: 'Lorem ipsum' },
  { artistName: 'Lorem ipsum', songName: 'Lorem ipsum' },
  { artistName: 'Lorem ipsum', songName: 'Lorem ipsum' },
  { artistName: 'Lorem ipsum', songName: 'Lorem ipsum' },
  { artistName: 'Lorem ipsum', songName: 'Lorem ipsum' },
  { artistName: 'Lorem ipsum', songName: 'Lorem ipsum' },
];

const flatlistKeyExtractor = (item: Song) => `${item.artistName}${item.songName}`;

const FlatListItem = ({ item }: { item: Song }) => (
  <SongCard artistName={item.artistName} songName={item.songName} />
);

const HistoryScreen = ({ navigation }: Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <MainContainer>
        <Header title="History" />
        <Button onPress={() => navigation.navigate('LyricsDetails')} title=" Go To Lyrics Detail" />
        <FlatList
          contentContainerStyle={additionalStyles.flatlistContent}
          data={fakeData}
          keyExtractor={flatlistKeyExtractor}
          ItemSeparatorComponent={Spacing}
          renderItem={FlatListItem}
          style={additionalStyles.flatlist}
        />
      </MainContainer>
    </>
  );
};

export default HistoryScreen;
