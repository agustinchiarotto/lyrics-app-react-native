import React, { Component, ComponentType } from 'react';
import {
  ActivityIndicator,
  Button,
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { compose } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { MainTabsParamList } from '../../navigation/TabNavigator';
import { RootStackParamList } from '../../navigation/MainNavigator';

import { FormInput, Header, InformativeSign, RectangularButton } from '../../components';
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
    this.unsubscribeNetInfo = NetInfo.addEventListener(this.handleConnectivityChange);
  }

  componentWillUnmount() {
    this.unsubscribeNetInfo();
  }

  unsubscribeNetInfo = () => {};

  handleConnectivityChange = (state: { isConnected: boolean }) =>
    this.setState({ isConnected: state.isConnected });

  getLyricsByArtistAndSong = () => {
    const {
      getLyrics,
      lyricsForm: { values },
    } = this.props;
    if (values) {
      // console.log('values', values);
      getLyrics({ artist: values.artist, song: values.song });
    }
  };

  render() {
    const { cleanLyrics, navigation, loading, error, valid: fieldsValid } = this.props;
    const { isConnected } = this.state;

    // console.log('props', this.props);

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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <MainContainer>
            <Header title="Search" />
            <Button
              onPress={() => navigation.navigate('LyricsDetails')}
              title="Go To Lyrics Detail"
            />
            <Field
              autoCapitalize="none"
              label="Artist"
              name="artist"
              placeholder="Artist's Full Name"
              component={FormInput}
              validate={[required]}
            />
            <Field
              autoCapitalize="none"
              label="Song"
              name="song"
              placeholder="Full Name of the Song"
              component={FormInput}
              validate={[required]}
            />
            <RectangularButton
              disabled={!fieldsValid}
              onPress={this.getLyricsByArtistAndSong}
              title="Search Lyrics"
              variant="orange"
            />
            {loading && <ActivityIndicator />}
            {!loading && error ? (
              <NotFoundSignModal onPressButton={cleanLyrics} visible={error !== ''} />
            ) : null}
          </MainContainer>
        </TouchableWithoutFeedback>
      </>
    );
  }
}

const mapStateToProps = ({ forms, lyrics }: RootState) => ({
  error: lyrics.error,
  initialValues: { artist: '', song: '' },
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
  }),
  connector,
)(SearchScreen);
