import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import parseISO from 'date-fns/parseISO';
import DateAwayList from './DateAwayList';

import Button from '@mui/material/Button';

export const DatesAwayContext = React.createContext();

function App() {

  const [sampleDates, setSampleDates] = React.useState(sampleDays);

  /**
   * ES6: Here we use handleAddDates instead of handleAddDates: handleAddDates, because the key-value pair are the same
   */
  const DatesAwayContextValue = {
    handleAddDates,
    handleDeleteDates
  }


  function handleAddDates() {
    const newDate = {
      id: uuidv4(),
      dateDeparture: new Date(),
      dateReturn: new Date(),
    }

    setSampleDates([...sampleDates, newDate])
  }

  function handleDeleteDates(datesId) {
    setSampleDates(sampleDates.filter(dates => dates.id !== datesId));
  }

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <DatesAwayContext.Provider value={DatesAwayContextValue}>


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

      </DatesAwayContext.Provider>

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
