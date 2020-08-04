import React from 'react';
import { Button, SafeAreaView, StatusBar, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { SearchStackParamList } from '../../navigation/SearchStack';

type SearchScreenNavigationProp = StackNavigationProp<SearchStackParamList, 'Search'>;

interface Props {
  navigation: SearchScreenNavigationProp;
}

const SearchScreen = ({ navigation }: Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Search Screen</Text>
        <Button onPress={() => navigation.navigate('LyricsDetails')} title=" Go To Lyrics Detail" />
      </SafeAreaView>
    </>
  );
};

export default SearchScreen;
