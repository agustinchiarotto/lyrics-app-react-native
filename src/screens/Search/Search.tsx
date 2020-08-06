import React, { Component, ComponentType } from 'react';
import { ActivityIndicator, Button, StatusBar, Text, TextInput } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { compose } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { MainTabsParamList } from '../../navigation/TabNavigator';
import { RootStackParamList } from '../../navigation/MainNavigator';

import { Header, InformativeSign, RectangularButton } from '../../components';
import NotFoundSignModal from './components/NotFoundSignModal';
import { MainContainer, NoInternetSignContainer } from './styles';

import { RootState } from '../../store';
import { cleanLyricsAction, getLyricsAction } from '../../store/actions';
import { required } from '../../utils/validation';

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
};

class SearchScreen extends Component<Props, State> {
  state = {
    isConnected: true,
  };

  componentDidMount() {
    const { getLyrics } = this.props;
    this.unsubscribeNetInfo = NetInfo.addEventListener(this.handleConnectivityChange);
    getLyrics({ artist: 'coldpla', song: 'adventure of a lifetime' });
  }

  componentWillUnmount() {
    this.unsubscribeNetInfo();
  }

  unsubscribeNetInfo = () => {};

  handleConnectivityChange = (state: { isConnected: boolean }) =>
    this.setState({ isConnected: state.isConnected });

  getLyricsByArtistAndSong = () => {
    const {
      // getLyrics,
      lyricsForm: { values },
    } = this.props;
    if (values) {
      console.log('values', values);
      // getLyrics({ artist: values.artist, song: values.song });
    }
  };

  render() {
    const { cleanLyrics, navigation, lyrics, loading, error, valid: fieldsValid } = this.props;
    const { isConnected } = this.state;

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
          <Button
            onPress={() => navigation.navigate('LyricsDetails')}
            title="Go To Lyrics Detail"
          />
          <Field
            autoCapitalize="none"
            name="artist"
            placeholder="Artist"
            component={TextInput}
            validate={[required]}
          />
          <Field
            autoCapitalize="none"
            name="song"
            placeholder="Song"
            component={TextInput}
            validate={[required]}
          />
          <RectangularButton
            disabled={!fieldsValid}
            onPress={this.getLyricsByArtistAndSong}
            title="Search Lyrics"
            variant="orange"
          />
          {loading ? <ActivityIndicator /> : <Text>{error || lyrics}</Text>}
          {!loading && error ? (
            <NotFoundSignModal onPressButton={cleanLyrics} visible={error !== ''} />
          ) : null}
        </MainContainer>
      </>
    );
  }
}

const mapStateToProps = ({ forms, lyrics }: RootState) => ({
  error: lyrics.error,
  loading: lyrics.loading,
  lyrics: lyrics.lyrics,
  lyricsForm: forms.lyricsForm,
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
    initialValues: { artist: '', song: '' },
  }),
  connector,
)(SearchScreen);
