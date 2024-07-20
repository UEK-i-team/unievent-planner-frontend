import { styled } from '@mui/material';
import { ListItem, IconButton, Box } from '@mui/material';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 32px;
  box-sizing: border-box;
  position: relative;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;
export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  padding: 16px;
  @media (max-width: 600px) {
    padding: 8px;
  }
`;

export const BackButton = styled(IconButton)`\
    position: absolute;
    border-radius: 9999px;
    border: 2px solid #bbbbbb;
  @media {
    color: black;
  }
`;
export const RemoveButton = styled(IconButton)`
  position: relative;
`;

export const Item = styled(ListItem)`
    position absolute;
  background-color: #ffcccc;
  border-radius: 12px;
  margin-bottom: 8px;
`;

export const BackButtonWrapper = styled(Box)`
  display: flex;
  justify-content: flex-start;
  background-color: #;
`;
