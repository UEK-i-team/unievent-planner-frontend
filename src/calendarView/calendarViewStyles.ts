import { styled } from '@mui/material';
import { Box, Button } from '@mui/material';

import { theme } from '../assets/styles/theme';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 32px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export const Announcements = styled(Box)`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  // flex: 1;
  width: 90%;
  height: 100%;
  padding: 16px;
  margin-bottom: 15px;
  border-radius: 1.5em;
  position: absolute;
  bottom: -93%;
  background-color: ${theme.colors.grey_10};
  font-size: 32px;
  font-family: Arial;

  @media (max-width: 600px) {
    padding: 1.37rem;
    // margin-bottom: 10px;
  }
`;

export const AddButton = styled(Button)`
  background-color: ${theme.colors.red_100};
  color: white;
  &:hover {
    background-color: ${theme.colors.red_100};
  }
  margin: 10px 0 15px;
  padding: 16px 0;
  font-size: 18px;
  border-radius: 8px;
  width: 100%;
  position absolute;
  @media (max-width: 600px) {
    margin: 5px 0 10px;
    padding: 12px 0;
    font-size: 16px;
  }
`;
