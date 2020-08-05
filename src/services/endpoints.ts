import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const lyricsEndpoint = ({ artist, song }: { artist: string; song: string }) =>
  `${API_URL}${artist}/${song}`;
