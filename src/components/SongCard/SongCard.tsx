import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AnimatedSqueeze from '../AnimatedSqueeze';
import CustomText from '../CustomText';
import Spacing from '../Spacing';
import { IconContainer, Info, Titles, additionalStyles } from './styles';
import { colors } from '../../utils/theme';

interface Props {
  artistName: string;
  onPress: () => void;
  songName: string;
}

const SongItem = ({ artistName, onPress, songName }: Props) => {
  return (
    <AnimatedSqueeze onPress={onPress} touchableStyle={additionalStyles.mainContainer}>
      <IconContainer>
        <Icon color={colors.patagonianOrange} name="music-note" size={40} />
      </IconContainer>
      <Titles>
        <CustomText variant="subtitle">Artist:{'  '}</CustomText>
        <Spacing size={5} />
        <CustomText variant="subtitle">Song:{'  '}</CustomText>
      </Titles>
      <Info>
        <Spacing size={2} />
        <CustomText numberOfLines={1}>{artistName}</CustomText>
        <Spacing size={9} />
        <CustomText>{songName}</CustomText>
      </Info>
    </AnimatedSqueeze>
  );
};

export default SongItem;
