export const GET_LYRICS = 'GET_LYRICS';
export const SET_LOADING_LYRICS = 'SET_LOADING_LYRICS';

interface GetLyricsAction {
  type: typeof GET_LYRICS;
  payload: {
    lyrics?: string;
    error?: string;
  };
  error: boolean;
}

interface SetLoadingLyricsAction {
  type: typeof SET_LOADING_LYRICS;
  payload: {
    loading: boolean;
  };
}

export type LyricsActionTypes = GetLyricsAction | SetLoadingLyricsAction;
