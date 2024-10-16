import { Box, Button, IconButton, Input, Typography } from '@mui/material';
import {styled }from 'styled-components';



export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  text-align: center;
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

export const GroupCodeInput = styled(Box)`
  display: flex;
  gap: 16px;
  margin: 24px 0;
  @media (max-width: 600px) {
    gap: 8px;
    margin: 16px 0;
  }
`;

export const GroupCodeField = styled(Input)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  font-size: 32px;
  text-align: center;
  &::before,
  &::after {
    border-bottom: none !important;
  }
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey_25};
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
    font-size: 24px;
  }
  input {
    text-align: center;
  }
`;

export const JoinButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.red_100} !important;
  color: ${({ theme }) => theme.colors.white_100};
  &:hover {
    background-color: ${({ theme }) => theme.colors.red_100} !important;
  }
  margin: 55px 0 15px;
  padding: 16px 0;
  font-size: 18px;
  border-radius: 8px;
  width: 100%;
  @media (max-width: 600px) {
    margin: 40px 0 10px;
    padding: 12px 0;
    font-size: 16px;
  }
`;

export const CreateGroupButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.grey_50} !important;
  padding: 16px 0;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black_100} !important;
  border-radius: 8px;
  width: 100%;
  color: black;
  margin-top: 15px;
  @media (max-width: 600px) {
    padding: 12px 0;
    font-size: 16px;
    margin-top: 10px;
  }
`;

export const BackButton = styled(IconButton)`
  position: absolute;
  top: 10px;
  left: 10px;
  @media (max-width: 600px) {
    top: 10px;
    left: 10px;
  }
`;

export const SvgContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  width: 100%;
  @media (max-width: 600px) {
    gap: 4px;
    margin-bottom: 8px;
  }
`;

export const Logo = styled('img')`
  margin-bottom: 16px;
  @media (max-width: 600px) {
    margin-bottom: 8px;
  }
`;

export const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.colors.light_grey};
  margin-left: auto;
  margin-right: 0;
`;