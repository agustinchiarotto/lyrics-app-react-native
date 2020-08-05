import React from 'react';
import { SafeAreaView, Text, StatusBar, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainTabsParamList } from '../../navigation/TabNavigator';

type LyricsScreenNavigationProp = StackNavigationProp<MainTabsParamList, 'Search'>;

interface Props {
  navigation: LyricsScreenNavigationProp;
}

const LyricsDetailsScreen = ({ navigation }: Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Lyrics Details Screen</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </SafeAreaView>
    </>
  );
};

export default LyricsDetailsScreen;
