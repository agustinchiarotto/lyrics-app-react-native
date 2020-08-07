import React, { useCallback, useState } from 'react';
import { Button, FlatList, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainTabsParamList } from '../../navigation/TabNavigator';
import { RootStackParamList } from '../../navigation/MainNavigator';

import { Header, InformativeSign, RectangularButton, SongCard, Spacing } from '../../components';
import {
  ClearButtonContainer,
  EmptyListPlaceholder,
  MainContainer,
  additionalStyles,
} from './styles';

import { SongHistoryData } from '../../types';

type HistoryScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabsParamList, 'History'>,
  StackNavigationProp<RootStackParamList>
>;

interface Props {
  navigation: HistoryScreenNavigationProp;
}

const flatlistKeyExtractor = (item: SongHistoryData) => item.id;

const FlatListItem = ({ item }: { item: SongHistoryData }) => (
  <SongCard artistName={item.artist} songName={item.song} />
);

const ListEmptyComponent = () => (
  <EmptyListPlaceholder>
    <InformativeSign variant="no-history" />
  </EmptyListPlaceholder>
);

const HistoryScreen = ({ navigation }: Props) => {
  const [searchHistoryData, setSearchHistoryData] = useState<SongHistoryData[]>([]);

  const getData = useCallback(() => {
    let isActive = true;
    const getHistoryData = async () => {
      try {
        const result = await AsyncStorage.getItem('search-history');
        const jsonValue: SongHistoryData[] = result !== null ? JSON.parse(result) : [];
        console.log('jsonValue', jsonValue);
        if (isActive) {
          setSearchHistoryData(jsonValue || []);
        }
      } catch (error) {
        console.log('An error occurred getting the search history data: ', error);
      }
    };
    getHistoryData();
    return () => {
      isActive = false;
    };
  }, []);

  useFocusEffect(getData);

  const clearHistory = useCallback(async () => {
    try {
      await AsyncStorage.setItem('search-history', JSON.stringify([]));
      getData();
    } catch (error) {
      console.log('An error occurred clearing the search history: ', error);
    }
  }, [getData]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <MainContainer>
        <Header title="History" />
        <Button onPress={() => navigation.navigate('LyricsDetails')} title=" Go To Lyrics Detail" />
        {searchHistoryData.length > 0 && (
          <ClearButtonContainer>
            <RectangularButton onPress={clearHistory} title="Clear History" />
          </ClearButtonContainer>
        )}
        <FlatList
          contentContainerStyle={additionalStyles.flatlistContent}
          data={searchHistoryData}
          keyExtractor={flatlistKeyExtractor}
          ItemSeparatorComponent={Spacing}
          ListEmptyComponent={ListEmptyComponent}
          renderItem={FlatListItem}
          style={additionalStyles.flatlist}
        />
      </MainContainer>
    </>
  );
};

export default HistoryScreen;
