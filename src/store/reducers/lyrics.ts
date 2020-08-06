import { CLEAN_LYRICS, GET_LYRICS, SET_LOADING_LYRICS, LyricsActionTypes } from '../actions/types';

export interface LyricsState {
  error: string;
  loading: boolean;
  lyrics: string;
}

const initialState: LyricsState = {
  error: '',
  loading: false,
  lyrics: '',
};

const users = (state = initialState, action: LyricsActionTypes): LyricsState => {
  switch (action.type) {
    case SET_LOADING_LYRICS:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case GET_LYRICS:
      if (action.error) {
        return {
          ...state,
          error: action.payload.error || '',
          lyrics: '',
        };
      }
      return {
        ...state,
        error: '',
        lyrics: action.payload.lyrics || '',
      };
    case CLEAN_LYRICS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default users;
