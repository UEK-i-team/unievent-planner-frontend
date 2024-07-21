import React from 'react';
import { CssBaseline } from '@mui/material';
import LoginScreen from './screens/LoginScreen/LoginScreen';


const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <LoginScreen />
    </>
  );
};

export default App;