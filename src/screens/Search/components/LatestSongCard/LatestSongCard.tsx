import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { AnimatedSqueeze, CustomText, Spacing } from '../../../../components';
import { IconContainer, Info, additionalStyles } from './styles';
import { colors } from '../../../../utils/theme';

interface Props {
  artistName: string;
  onPress: () => void;
  songName: string;
}

const LastSongCard = ({ artistName, onPress, songName }: Props) => {
  return (
    <AnimatedSqueeze
      onPress={onPress}
      touchableStyle={[additionalStyles.mainContainer, additionalStyles.cardShadow]}
      viewStyle={additionalStyles.viewContainer}
    >
      <IconContainer>
        <Icon color={colors.patagonianOrange} name="queue-music" size={100} />
      </IconContainer>
      <Info>
        <CustomText>
          <CustomText variant="subtitle">Artist:{'  '}</CustomText>
          <CustomText>{artistName}</CustomText>
        </CustomText>
        <Spacing size={5} />
        <CustomText>
          <CustomText variant="subtitle">Song:{'  '}</CustomText>
          <CustomText>{songName}</CustomText>
        </CustomText>
      </Info>
    </AnimatedSqueeze>
  );
};

export default LastSongCard;
