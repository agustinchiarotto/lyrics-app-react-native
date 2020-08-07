import React from 'react';
import { StatusBar } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { connect, ConnectedProps } from 'react-redux';

import { goBack } from '../../navigation/navigationControls';
import { RootStackParamList } from '../../navigation/MainNavigator';
import { CustomText, Header } from '../../components';
import { DataContainer, MainContainer, LyricsContainer, Spacing } from './styles';

import { RootState } from '../../store';

type LyricsScreenRouteProp = RouteProp<RootStackParamList, 'LyricsDetails'>;
type LyricsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LyricsDetails'>;

interface Props extends ConnectedProps<typeof connector> {
  navigation: LyricsScreenNavigationProp;
  route: LyricsScreenRouteProp;
}

const LyricsDetailsScreen = ({ route, lyrics, lyricsForm }: Props) => {
  let artistName = '';
  let songName = '';
  let lyricsToShow = '';

  const { songData } = route.params;
  const formValues = lyricsForm.values;
  if (songData) {
    artistName = songData.artist;
    songName = songData.song;
    lyricsToShow = songData.lyrics;
  } else if (formValues) {
    artistName = formValues.artist;
    songName = formValues.song;
    lyricsToShow = lyrics;
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
          <CustomText>{lyricsToShow}</CustomText>
        </LyricsContainer>
      </MainContainer>
    </>
  );
};

const mapStateToProps = ({ form, lyrics }: RootState) => ({
  lyrics: lyrics.lyrics,
  lyricsForm: form.lyricsForm,
});

const connector = connect(mapStateToProps);

export default connector(LyricsDetailsScreen);
