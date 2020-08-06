import React from 'react';
import { Modal } from 'react-native';

import { InformativeSign, RectangularButton } from '../../../../components';
import { MainContainer, NotFoundSignContainer } from './styles';

interface Props {
  onPressButton: () => void;
  visible: boolean;
}

const NotFoundSignModal = ({ onPressButton, visible }: Props) => {
  return (
    <Modal transparent visible={visible}>
      <MainContainer>
        <NotFoundSignContainer>
          <InformativeSign variant="not-found" />
          <RectangularButton onPress={onPressButton} title="Ok" variant="orange" />
        </NotFoundSignContainer>
      </MainContainer>
    </Modal>
  );
};

export default NotFoundSignModal;
