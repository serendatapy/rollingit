import * as React from 'react';

import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import DateAway from './DateAway';
import parseISO from 'date-fns/parseISO';

function App() {
  //const [datesAway,setDatesAway] = useState([])

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>

      <DateAway dates={sampleDays[0]}></DateAway>

    </LocalizationProvider>
  )
}

export default App;

const sampleDays = [
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
