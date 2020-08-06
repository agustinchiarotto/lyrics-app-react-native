import React from 'react';
import { StatusBar } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { connect, ConnectedProps } from 'react-redux';

import { goBack } from '../../navigation/navigationControls';
import { MainTabsParamList } from '../../navigation/TabNavigator';
import { CustomText, Header } from '../../components';
import { DataContainer, MainContainer, LyricsContainer, Spacing } from './styles';

import { RootState } from '../../store';

type LyricsScreenNavigationProp = StackNavigationProp<MainTabsParamList, 'Search'>;

interface Props extends ConnectedProps<typeof connector> {
  navigation: LyricsScreenNavigationProp;
}

const LyricsDetailsScreen = ({ lyrics, lyricsForm }: Props) => {
  const formValues = lyricsForm.values;
  let artistName = '';
  let songName = '';
  if (formValues) {
    artistName = formValues.artist;
    songName = formValues.song;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <MainContainer>
        <Header showBackButton onPressBackButton={goBack} title="Lyrics" />
        <Spacing />
        <DataContainer>
          <CustomText variant="subtitle">Artist: </CustomText>
          <CustomText>{artistName}</CustomText>
        </DataContainer>
        <DataContainer>
          <CustomText variant="subtitle">Song: </CustomText>
          <CustomText>{songName}</CustomText>
        </DataContainer>
        <LyricsContainer>
          <CustomText>{lyrics}</CustomText>
        </LyricsContainer>
      </MainContainer>
    </>
  );
};
const mapStateToProps = ({ forms, lyrics }: RootState) => ({
  lyrics: lyrics.lyrics,
  lyricsForm: forms.lyricsForm,
});

const connector = connect(mapStateToProps);

export default connector(LyricsDetailsScreen);
