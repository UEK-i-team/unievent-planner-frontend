import React from 'react';

import { CssBaseline } from '@mui/material';

import ZarzdzajGrupami from './screens/ManageGroups/ManageGroups';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <ZarzdzajGrupami />
    </>
  );
};

export default App;
