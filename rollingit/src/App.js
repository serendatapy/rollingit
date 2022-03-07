import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import parseISO from 'date-fns/parseISO';
import DateAwayList from './DateAwayList';

import Button from '@mui/material/Button';

function App() {

  const [sampleDates, setSampleDates] = React.useState(sampleDays);


  function handleAddDates() {
    const newDate = {
      id:uuidv4(),
      dateDeparture: new Date(),
      dateReturn: new Date(),
    }

    setSampleDates([...sampleDates,newDate])
  }

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>

      <div style={{ margin: '50px' }}>
        <DateAwayList
          sampleDays={sampleDates}
        />
        <Button
          variant="contained"
          size="large"
          onClick={handleAddDates}
        >
          Add Trip
        </Button>
      </div>


    </LocalizationProvider>
  )
}

export default App;

let sampleDays = [
  {
    id: 1,
    dateDeparture: parseISO("2022-03-08T19:39:49.000Z"),
    dateReturn: parseISO("2022-03-17T19:39:49.000Z"),
  },
  {
    id: 2,
    dateDeparture: parseISO("2022-03-01T19:39:49.000Z"),
    dateReturn: parseISO("2022-03-03T19:39:49.000Z"),
  }
]
