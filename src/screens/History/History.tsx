import React from 'react';
import { Button, SafeAreaView, StatusBar, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { HistoryStackParamList } from '../../navigation/HistoryStack';

type HistoryScreenNavigationProp = StackNavigationProp<HistoryStackParamList, 'History'>;

interface Props {
  navigation: HistoryScreenNavigationProp;
}

const HistoryScreen = ({ navigation }: Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>History Screen</Text>
        <Button onPress={() => navigation.navigate('LyricsDetails')} title=" Go To Lyrics Detail" />
      </SafeAreaView>
    </>
  );
};

export default HistoryScreen;
