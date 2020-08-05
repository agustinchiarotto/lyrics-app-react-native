import React, { Component, ComponentType } from 'react';
import { ActivityIndicator, Button, SafeAreaView, StatusBar, Text, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { compose } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { SearchStackParamList } from '../../navigation/SearchStack';
import { RootState } from '../../store';
import { getLyricsAction } from '../../store/actions';
import { required } from '../../utils/validation';

type FormValues = {
  artist: string;
  song: string;
};
type SearchScreenNavigationProp = StackNavigationProp<SearchStackParamList, 'Search'>;
type PropsFromRedux = ConnectedProps<typeof connector> & InjectedFormProps<FormValues>;
type Props = PropsFromRedux & {
  navigation: SearchScreenNavigationProp;
};

class SearchScreen extends Component<Props> {
  componentDidMount() {
    const { getLyrics } = this.props;
    getLyrics({ artist: 'coldplay', song: 'adventure of a lifetime' });
  }

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
    const { navigation, lyrics, loading, error, valid: fieldsValid } = this.props;

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Text>Search Screen</Text>
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
          <Button
            disabled={!fieldsValid}
            onPress={this.getLyricsByArtistAndSong}
            title="Search Lyrics"
          />
          {loading ? <ActivityIndicator /> : <Text>{error || lyrics}</Text>}
        </SafeAreaView>
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
