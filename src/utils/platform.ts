import { Dimensions, Platform } from 'react-native';

export const isIos = Platform.OS === 'ios';

export const WINDOW_HEIGHT = Dimensions.get('window').height;
