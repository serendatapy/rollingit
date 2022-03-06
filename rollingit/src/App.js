import * as React from 'react';

import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import DateAway from './DateAway';

function App() {

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>

      <DateAway></DateAway>

    </LocalizationProvider>
  )
}

export default App;
