import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #ff9000;
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
  flex-direction: row;

`;

export const ButtonText = styled.Text`
  text-align: center;
  position: relative;
  flex: 1;
  width: 100%;
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: 18px;
`;



