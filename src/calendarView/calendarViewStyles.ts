import { styled } from '@mui/material';
import { Box, Button } from '@mui/material';

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

export const Calendar = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  padding: 16px;
  border-style: solid;
  border-color: black;
  margin-bottom: 15px;
  @media (max-width: 600px) {
    padding: 8px;
    margin-bottom: 10px;
  }
`;

export const AddButton = styled(Button)`
  background-color: #f13d42;
  color: white;
  &:hover {
    background-color: #f13d42;
  }
  margin: 10px 0 15px;
  padding: 16px 0;
  font-size: 18px;
  border-radius: 8px;
  width: 100%;
  @media (max-width: 600px) {
    margin: 5px 0 10px;
    padding: 12px 0;
    font-size: 16px;
  }
`;
