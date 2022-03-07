import React from 'react'
import DateAway from './DateAway';


function DateAwayList({sampleDays}) {

  return (
    <>
      {
        sampleDays.map(dates => {
          return (
            <DateAway
              key={dates.id}
              {...dates}
            />
          )
        })
      }
    </>
  )
}

export default DateAwayList
