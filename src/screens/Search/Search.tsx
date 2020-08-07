import React, { Component, ComponentType } from 'react';
import { Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
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
  LatestSongCard,
  RectangularButton,
  Spacing,
  CustomText,
} from '../../components';
import NotFoundSignModal from './components/NotFoundSignModal';
import { Content, Form, LastSearchContent, MainContainer, NoInternetSignContainer } from './styles';

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
      Keyboard.dismiss();
      getLyrics({ artist: values.artist, song: values.song });
    }
  };

  render() {
    const { cleanLyrics, loading, error, valid: fieldsValid } = this.props;
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
                <LastSearchContent>
                  <CustomText variant="title">Latest Search</CustomText>
                  <Spacing />
                  <LatestSongCard artistName="hola" songName="hola" />
                </LastSearchContent>
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
