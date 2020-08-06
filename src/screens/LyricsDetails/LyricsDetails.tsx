import React from 'react';
import { Text, StatusBar, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { MainTabsParamList } from '../../navigation/TabNavigator';
import { Header } from '../../components';
import { MainContainer } from './styles';

type LyricsScreenNavigationProp = StackNavigationProp<MainTabsParamList, 'Search'>;

interface Props {
  navigation: LyricsScreenNavigationProp;
}

const LyricsDetailsScreen = ({ navigation }: Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <MainContainer>
        <Header showBackButton onPressBackButton={navigation.goBack} title="Lyrics" />
        <Text>Lyrics Details Screen</Text>
        <Button title="Go Back" onPress={navigation.goBack} />
      </MainContainer>
    </>
  );
};

export default LyricsDetailsScreen;
