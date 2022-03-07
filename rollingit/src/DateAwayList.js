import React from 'react'
import DateAway from './DateAway';


function DateAwayList(props) {
  const {
    sampleDays,
    handleDeleteDates
  } = props;
  return (
    <>
      {
        sampleDays.map(dates => {
          return (
            <DateAway
            key={dates.id}
            handleDeleteDates={handleDeleteDates}
            {...dates}
            />
          )
        })
      }
    </>
  )
}

export default DateAwayList
