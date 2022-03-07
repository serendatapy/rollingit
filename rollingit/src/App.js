import * as React from 'react';

import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import parseISO from 'date-fns/parseISO';
import DateAwayList from './DateAwayList';

function App() {
  //const [datesAway,setDatesAway] = useState([])

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>

      <DateAwayList sampleDays={sampleDays}></DateAwayList>

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
