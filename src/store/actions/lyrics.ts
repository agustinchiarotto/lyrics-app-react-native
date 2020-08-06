import { Dispatch } from 'redux';
import { GET_LYRICS, SET_LOADING_LYRICS, LyricsActionTypes } from './types';

import { getLyricsService } from '../../services';

import { goToPage } from '../../navigation/navigationControls';

export const getLyricsAction = ({ artist, song }: { artist: string; song: string }) => {
  return async (dispatch: Dispatch<LyricsActionTypes>) => {
    try {
      dispatch({ type: SET_LOADING_LYRICS, payload: { loading: true } });
      const { success, error, payload } = await getLyricsService({ artist, song });

      if (success) {
        dispatch({ type: GET_LYRICS, error: false, payload: { lyrics: payload?.lyrics } });
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
