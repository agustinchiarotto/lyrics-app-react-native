import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

import { CLEAN_LYRICS, GET_LYRICS, SET_LOADING_LYRICS, LyricsActionTypes } from './types';
import { getLyricsService } from '../../services';

import { goToPage } from '../../navigation/navigationControls';
import { SongHistoryData } from '../../types';

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
    const history: SongHistoryData[] = result !== null ? JSON.parse(result) : [];
    history.push(songToSave);
    await AsyncStorage.setItem('search-history', JSON.stringify(history));
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
