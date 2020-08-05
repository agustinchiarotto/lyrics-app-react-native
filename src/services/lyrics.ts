import { lyricsEndpoint } from './endpoints';
import { Song } from '../types';

interface LyricsServiceResponse {
  success: boolean;
  payload: Song | undefined;
  error: string;
}

export const getLyricsService = async ({
  artist,
  song,
}: {
  artist: string;
  song: string;
}): Promise<LyricsServiceResponse> => {
  try {
    let serviceResponse: LyricsServiceResponse;

    const encodedArtist = encodeURIComponent(artist);
    const encodedSong = encodeURIComponent(song);

    const response = await fetch(lyricsEndpoint({ artist: encodedArtist, song: encodedSong }));
    const parsedResponse = await response.json();

    if (response.status === 200) {
      serviceResponse = { success: true, payload: parsedResponse, error: '' };
    } else {
      serviceResponse = {
        success: false,
        payload: undefined,
        error: parsedResponse.error || 'An unknown error occurred.',
      };
    }

    return serviceResponse;
  } catch (err) {
    console.log(`Unable to get the User Info from the database: ${err}`);
    return { success: false, payload: undefined, error: `${err}` };
  }
};
