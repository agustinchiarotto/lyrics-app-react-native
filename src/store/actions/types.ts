export const CLEAN_LYRICS = 'CLEAN_LYRICS';
export const GET_LYRICS = 'GET_LYRICS';
export const SET_LOADING_LYRICS = 'SET_LOADING_LYRICS';

interface CleanLyricsAction {
  type: typeof CLEAN_LYRICS;
}

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

export type LyricsActionTypes = CleanLyricsAction | GetLyricsAction | SetLoadingLyricsAction;
