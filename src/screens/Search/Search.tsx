import React, { Component, ComponentType } from 'react';
import { Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-community/async-storage';
import { compose } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { MainTabsParamList } from '../../navigation/TabNavigator';
import { RootStackParamList } from '../../navigation/MainNavigator';

import {
  FormInput,
  Header,
  InformativeSign,
  RectangularButton,
  Spacing,
  CustomText,
} from '../../components';
import LatestSongCard from './components/LatestSongCard';
import NotFoundSignModal from './components/NotFoundSignModal';
import { Content, Form, LastSearchContent, MainContainer, NoInternetSignContainer } from './styles';

import { RootState } from '../../store';
import { cleanLyricsAction, getLyricsAction } from '../../store/actions';
import { required } from '../../utils/validation';
import { SongHistoryData } from '../../types';
import { goToPage } from '../../navigation/navigationControls';

type FormValues = {
  artist: string;
  song: string;
};

type SearchScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabsParamList, 'Search'>,
  StackNavigationProp<RootStackParamList>
>;

type PropsFromRedux = ConnectedProps<typeof connector> & InjectedFormProps<FormValues>;
type Props = PropsFromRedux & {
  navigation: SearchScreenNavigationProp;
};

type State = {
  isConnected: boolean;
  latestSearch: SongHistoryData;
};

class SearchScreen extends Component<Props, State> {
  state = {
    isConnected: true,
    latestSearch: {
      id: '',
      artist: '',
      song: '',
      lyrics: '',
    },
  };

  _navListener: any;

  componentDidMount() {
    const { navigation } = this.props;
    this._navListener = navigation.addListener('focus', () => {
      this.checkLatestSearch();
    });
    this.unsubscribeNetInfo = NetInfo.addEventListener(this.handleConnectivityChange);
    this.checkLatestSearch();
  }

  componentWillUnmount() {
    this.unsubscribeNetInfo();
  }

  unsubscribeNetInfo = () => {};

  handleConnectivityChange = (state: { isConnected: boolean }) =>
    this.setState({ isConnected: state.isConnected });

  checkLatestSearch = async () => {
    try {
      const result = await AsyncStorage.getItem('search-history');
      const jsonValue: SongHistoryData[] = result !== null ? JSON.parse(result) : [];
      if (jsonValue.length > 0) {
        this.setLatestSearch(jsonValue[0]);
      } else {
        this.setLatestSearch({
          id: '',
          artist: '',
          song: '',
          lyrics: '',
        });
      }
    } catch (error) {
      console.log('An error occurred clearing the search history: ', error);
    }
  };

  setLatestSearch = (latestSearch: SongHistoryData) => {
    this.setState({ latestSearch });
  };

  getLyricsByArtistAndSong = () => {
    const {
      getLyrics,
      lyricsForm: { values },
    } = this.props;
    if (values) {
      Keyboard.dismiss();
      getLyrics({ artist: values.artist, song: values.song });
    }
  };

  goToLyrics = () => {
    const { latestSearch } = this.state;
    goToPage('LyricsDetails', {
      songData: latestSearch,
    });
  };

  render() {
    const { cleanLyrics, loading, error, valid: fieldsValid } = this.props;
    const { isConnected, latestSearch } = this.state;

    if (!isConnected) {
      return (
        <>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <MainContainer>
            <Header title="Search" />
            <NoInternetSignContainer>
              <InformativeSign variant="no-internet" />
            </NoInternetSignContainer>
          </MainContainer>
        </>
      );
    }

    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <MainContainer>
          <Header title="Search" />
          <Content keyboardShouldPersistTaps="handled">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <>
                <Form>
                  <Field
                    autoCapitalize="words"
                    label="Artist"
                    name="artist"
                    placeholder="Artist's Full Name"
                    component={FormInput}
                    validate={[required]}
                  />
                  <Spacing />
                  <Field
                    autoCapitalize="words"
                    label="Song"
                    name="song"
                    placeholder="Full Name of the Song"
                    component={FormInput}
                    validate={[required]}
                  />
                  <Spacing />
                  <RectangularButton
                    disabled={!fieldsValid}
                    loading={loading}
                    onPress={this.getLyricsByArtistAndSong}
                    title="Search Lyrics"
                    variant="orange"
                  />
                </Form>
                {latestSearch.artist !== '' ? (
                  <LastSearchContent>
                    <CustomText variant="title">Previous Search</CustomText>
                    <Spacing />
                    <LatestSongCard
                      artistName={latestSearch.artist}
                      onPress={this.goToLyrics}
                      songName={latestSearch.song}
                    />
                  </LastSearchContent>
                ) : null}
                <Spacing />
              </>
            </TouchableWithoutFeedback>
          </Content>
          {!loading && error ? (
            <NotFoundSignModal onPressButton={cleanLyrics} visible={error !== ''} />
          ) : null}
        </MainContainer>
      </>
    );
  }
}

const mapStateToProps = ({ form, lyrics }: RootState) => ({
  error: lyrics.error,
  loading: lyrics.loading,
  lyrics: lyrics.lyrics,
  lyricsForm: form.lyricsForm,
});

const mapDispatchToProps = {
  getLyrics: ({ artist, song }: { artist: string; song: string }) =>
    getLyricsAction({ artist, song }),
  cleanLyrics: () => cleanLyricsAction(),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default compose<ComponentType<Props>>(
  reduxForm<FormValues>({
    form: 'lyricsForm',
    destroyOnUnmount: false,
    enableReinitialize: true,
    // initialValues: { artist: '', song: '' },
  }),
  connector,
)(SearchScreen);
