import * as React from 'react';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

function App() {
  const [date1, setDate1] = React.useState(new Date());
  const [date2, setDate2] = React.useState(new Date());

  const handleChangeDate1 = (newDate) => {
    setDate1(newDate);
    console.log('Saved Date: ',newDate)
  };

  const handleChangeDate2 = (newDate2) => {
    setDate2(newDate2);
    console.log('Saved Date2: ',newDate2)
  };

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Stack spacing={3} style={{ margin: '50px' }}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="dd/MM/yyyy"
          value={date1}
          onChange={handleChangeDate1}
          renderInput={(params) => <TextField {...params} />}
        />
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="dd/MM/yyyy"
          value={date2}
          onChange={handleChangeDate2}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>

    </LocalizationProvider>
  )
}

export default App;
