import React from 'react';
import { Button, Modal } from 'react-native';

import { InformativeSign } from '../../../../components';
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
          <Button onPress={onPressButton} title="Ok" />
        </NotFoundSignContainer>
      </MainContainer>
    </Modal>
  );
};

export default NotFoundSignModal;
