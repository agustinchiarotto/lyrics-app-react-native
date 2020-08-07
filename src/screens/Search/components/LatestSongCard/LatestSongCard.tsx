import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { CustomText, Spacing } from '../../../../components';
import { IconContainer, Info, MainContainer, additionalStyles } from './styles';
import { colors } from '../../../../utils/theme';

interface Props {
  artistName: string;
  songName: string;
}

const LastSongCard = ({ artistName, songName }: Props) => {
  return (
    <MainContainer style={additionalStyles.cardShadow}>
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
    </MainContainer>
  );
};

export default LastSongCard;
