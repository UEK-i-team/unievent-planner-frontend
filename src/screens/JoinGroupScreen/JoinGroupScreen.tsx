import { Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Wrapper, Content, GroupCodeInput, GroupCodeField, JoinButton, CreateGroupButton, BackButton, SvgContainer, Logo } from './JoinGroupScreenStyles';

const JoinGroup = () => {
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
          <GroupCodeField inputProps={{ maxLength: 1 }} />
          <GroupCodeField inputProps={{ maxLength: 1 }} />
          <GroupCodeField inputProps={{ maxLength: 1 }} />
          <GroupCodeField inputProps={{ maxLength: 1 }} />
          <GroupCodeField inputProps={{ maxLength: 1 }} />
          <GroupCodeField inputProps={{ maxLength: 1 }} />
        </GroupCodeInput>
        <Typography variant="body1" display="block" sx={{ color: '#BBBBBB', marginLeft: 'auto', marginRight: '0' }} gutterBottom>
          Czym jest kod grupy?
        </Typography>
        <JoinButton variant="contained">Dołącz do grupy</JoinButton>
        <Typography variant="body1" sx={{ color: "#BBBBBB" }}>lub</Typography>
        <CreateGroupButton variant="outlined">Utwórz grupę</CreateGroupButton>
      </Content>
    </Wrapper>
  );
};

export default JoinGroup;
