import React from 'react'
import { differenceInCalendarDays } from "date-fns"

import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

function DateAway() {
  const [date1, setDate1] = React.useState(new Date());
  const [date2, setDate2] = React.useState(new Date());
  const [value, setValue] = React.useState(0);

  const handleChangeDate1 = (newDate1) => {
    setDate1(newDate1);
    console.log('Saved Date: ', newDate1)
    const totalDays = differenceInCalendarDays(date2, newDate1)
    console.log('New Difference: ', totalDays)
    setValue(totalDays)
  };

  const handleChangeDate2 = (newDate2) => {
    setDate2(newDate2);
    console.log('Saved Date2: ', newDate2)
    const totalDays = differenceInCalendarDays(newDate2, date1)
    console.log('New Difference: ', totalDays)
    setValue(totalDays)
  };

  return (
      <Stack direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2} style={{ margin: '50px' }}>
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
          minDate={date1}
        />
        <TextField
          id="standard-read-only-input"
          label="Total Days"
          InputProps={{
            readOnly: true,
          }}
          value={value}
        />
      </Stack>
  )
}

export default DateAway