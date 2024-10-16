import { Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Wrapper, Content, GroupCodeInput, GroupCodeField, JoinButton, CreateGroupButton, BackButton, SvgContainer, Logo, StyledTypography } from './JoinGroupScreenStyles';
import {  useRef } from 'react';
const JoinGroup = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <Wrapper>
      <BackButton>
        <ArrowBackIcon />
      </BackButton>
      <SvgContainer>
        <Logo src="src/assets/svg/UnieventFont.svg" />
        <Logo src="src/assets/svg/UnieventLogoSmall.svg" />
      </SvgContainer>
      <Content>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: '20px' }}>Witaj, Jan Kowalski!</Typography>
        <Typography variant="h5" gutterBottom>
          Podaj kod grupy, do której chcesz dołączyć
        </Typography>
        <GroupCodeInput>
          {Array.from({ length: 6 }).map((_, index) => (
            <GroupCodeField
              key={index}
              inputProps={{ maxLength: 1 }}
              inputRef={(el: HTMLInputElement | null) => inputRefs.current[index] = el} 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index)} 
            />
          ))}
        </GroupCodeInput>
        <StyledTypography variant="body1"  gutterBottom>
          Czym jest kod grupy?
        </StyledTypography>
        <JoinButton variant="contained">Dołącz do grupy</JoinButton>
        <StyledTypography variant="body1" >lub</StyledTypography>
        <CreateGroupButton variant="outlined">Utwórz grupę</CreateGroupButton>
      </Content>
    </Wrapper>
  );
};

export default JoinGroup;
