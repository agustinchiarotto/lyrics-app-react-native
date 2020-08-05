import React, { Component } from 'react';
import { Button, SafeAreaView, StatusBar, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { connect, ConnectedProps } from 'react-redux';

import { SearchStackParamList } from '../../navigation/SearchStack';
import { RootState } from '../../store';
import { getLyricsAction } from '../../store/actions';

type SearchScreenNavigationProp = StackNavigationProp<SearchStackParamList, 'Search'>;

const mapStateToProps = ({ lyrics }: RootState) => ({
  error: lyrics.error,
  loading: lyrics.loading,
  lyrics: lyrics.lyrics,
});

const mapDispatchToProps = {
  getLyrics: ({ artist, song }: { artist: string; song: string }) =>
    getLyricsAction({ artist, song }),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  navigation: SearchScreenNavigationProp;
};

class SearchScreen extends Component<Props> {
  componentDidMount() {
    const { getLyrics } = this.props;
    getLyrics({ artist: 'coldplay', song: 'adventure of a lifetime' });
  }

  render() {
    const { navigation, lyrics } = this.props;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Text>Search Screen</Text>
          <Button
            onPress={() => navigation.navigate('LyricsDetails')}
            title=" Go To Lyrics Detail"
          />
          <Text>{lyrics}</Text>
        </SafeAreaView>
      </>
    );
  }
}

export default connector(SearchScreen);
