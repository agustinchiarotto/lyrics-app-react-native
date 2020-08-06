import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../utils/theme';

export const MainContainer = styled(SafeAreaView)({
  backgroundColor: colors.white,
  flex: 1,
  width: '100%',
});
