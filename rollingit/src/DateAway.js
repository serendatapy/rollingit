import React from 'react'
import { differenceInCalendarDays } from "date-fns"

import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import Button from '@mui/material/Button';

function DateAway(props) {

  const {
    id,
    dateDeparture,
    dateReturn,
    handleDeleteDates
  } = props;

  const [date1, setDate1] = React.useState(dateDeparture);
  const [date2, setDate2] = React.useState(dateReturn);
  const [value, setValue] = React.useState(differenceInCalendarDays(date2, date1) || 0);

  const handleChangeDate1 = (newDate1) => {
    setDate1(newDate1);
    let totalDays = differenceInCalendarDays(date2, newDate1)
    if (totalDays < 0) {
      setDate2(newDate1);
      setValue(0)
    } else setValue(totalDays)
  };

  const handleChangeDate2 = (newDate2) => {
    setDate2(newDate2);
    const totalDays = differenceInCalendarDays(newDate2, date1)
    setValue(totalDays)
  };

  return (
    <Stack direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      style={{ marginBottom: '50px' }}
    >
      <DesktopDatePicker
        label="Date left"
        inputFormat="dd/MM/yyyy"
        value={date1}
        onChange={handleChangeDate1}
        renderInput={(params) => <TextField {...params} />}
      />
      <DesktopDatePicker
        label="Date returned"
        inputFormat="dd/MM/yyyy"
        value={date2}
        onChange={handleChangeDate2}
        renderInput={(params) => <TextField {...params} />}
        minDate={date1}
      />
      <TextField
        id="total-days-difference"
        label="Total days"
        InputProps={{
          readOnly: true,
        }}
        value={value}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleDeleteDates(id)}
      >
        Delete
      </Button>
    </Stack>
  )
}

export default DateAway