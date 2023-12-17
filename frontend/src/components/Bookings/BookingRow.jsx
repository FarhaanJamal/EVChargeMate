import React from 'react'

const BookingRow = ({ booking }) => {
  const {stationName, type, slot, slotDate, startTime, endTime} = booking
  return <>
    <div className=' py-0.5 min-w-[428px]  max-w-full flex lg:text-lg md:text-lg text-[14px]'>
      <div className='w-72'>
        <p>
          {stationName}
        </p>
      </div>
      <div className='w-32 flex justify-center'>
        <p>
          {type}
        </p>
      </div>
      <div className='w-28 flex justify-center'>
        <p>
          {slot}
        </p>
      </div>
      <div className='w-36 flex justify-center'>
        <p>
          {slotDate}
        </p>
      </div>
      <div className='w-32 flex justify-center'>
        <p>
          {startTime} - {endTime}
        </p>
      </div>
    </div>
    </>
}

export default BookingRow