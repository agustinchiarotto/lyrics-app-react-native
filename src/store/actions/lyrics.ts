import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

import { CLEAN_LYRICS, GET_LYRICS, SET_LOADING_LYRICS, LyricsActionTypes } from './types';
import { getLyricsService } from '../../services';

import { goToPage } from '../../navigation/navigationControls';
import { SongHistoryData } from '../../types';

const processHistoryArray = (historyArray: SongHistoryData[], newSong: SongHistoryData) => {
  const arrayWithNewSong = [newSong, ...historyArray];

  const songsIds = Array.from(new Set(arrayWithNewSong.map((song) => song.id)));
  const uniqueSongs = songsIds.map((id) => {
    return arrayWithNewSong.find((song) => song.id === id);
  });

  return uniqueSongs;
};

const saveSongToHistory = async ({ id, artist, song, lyrics }: SongHistoryData) => {
  const songId = id || `${artist}${song}`;
  const songToSave: SongHistoryData = {
    id: songId,
    artist,
    song,
    lyrics,
  };

  try {
    const result = await AsyncStorage.getItem('search-history');
    const songsHistory: SongHistoryData[] = result !== null ? JSON.parse(result) : [];
    const newSongsHistory = processHistoryArray(songsHistory, songToSave);
    await AsyncStorage.setItem('search-history', JSON.stringify(newSongsHistory));
  } catch (error) {
    console.log('An error occurred clearing the search history: ', error);
  }
};

export const getLyricsAction = ({ artist, song }: { artist: string; song: string }) => {
  return async (dispatch: Dispatch<LyricsActionTypes>) => {
    try {
      dispatch({ type: SET_LOADING_LYRICS, payload: { loading: true } });
      const { success, error, payload } = await getLyricsService({ artist, song });

      if (success) {
        const lyrics = payload?.lyrics || '';
        dispatch({ type: GET_LYRICS, error: false, payload: { lyrics } });
        saveSongToHistory({ id: '', artist, song, lyrics });
        goToPage('LyricsDetails');
      } else {
        dispatch({ type: GET_LYRICS, error: true, payload: { error } });
      }

      dispatch({ type: SET_LOADING_LYRICS, payload: { loading: false } });
    } catch (error) {
      dispatch({ type: SET_LOADING_LYRICS, payload: { loading: false } });
      dispatch({
        type: GET_LYRICS,
        error: true,
        payload: { error: 'An unexpected error occurred' },
      });
      console.log('error on getLyrics action', error);
    }
  };
};

export const cleanLyricsAction = () => {
  return async (dispatch: Dispatch<LyricsActionTypes>) => {
    dispatch({ type: CLEAN_LYRICS });
  };
};
