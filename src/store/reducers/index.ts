import { combineReducers } from 'redux';

import lyricsReducer from './lyrics';

const rootReducer = combineReducers({
  lyrics: lyricsReducer,
});

export default rootReducer;
