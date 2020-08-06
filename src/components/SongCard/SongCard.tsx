import React from 'react';

import CustomText from '../CustomText';
import { MainContainer, additionalStyles } from './styles';

interface Props {
  artistName: string;
  songName: string;
}

const SongItem = ({ artistName, songName }: Props) => {
  return (
    <MainContainer style={additionalStyles.cardShadow}>
      <CustomText>{artistName}</CustomText>
      <CustomText>{songName}</CustomText>
    </MainContainer>
  );
};

export default SongItem;
