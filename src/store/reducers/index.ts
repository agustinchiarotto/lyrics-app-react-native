import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import lyricsReducer from './lyrics';

const rootReducer = combineReducers({
  form: formReducer,
  lyrics: lyricsReducer,
});

export default rootReducer;
