import React from 'react'
import userImg from "./../assets/images/user-img.png";
import useGetData from '../hooks/useFetchData'
import { BASE_URL } from '../config';
import Loading from '../components/Loader/Loading';
import Error from '../components/Error/Error';
import { useContext, useEffect } from 'react';
import { authContext } from '../context/AuthContext';

const MyBookings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {user} = useContext(authContext)
  const {data: bookings, loading, error} = useGetData(`${BASE_URL}/booking`)
  //console.log(bookings, 'User Bookings')
  return <>
    <div className='booking mt-16 mb-16 flex justify-around'>
      <div className='shadow-panelShadow p-6 lg:p-8 ml-10 rounded-md min-w-[280px] max-w-[280px]'>
        <figure className='max-w-[80px] max-h-[80px]'>
          <img src={userImg} alt="" className='w-full'/>
        </figure>
        <div>
          <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>
            {user.name}
          </h3>
          <p className='text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]'>
            {user.email}
          </p>
        </div>
      </div>
      <div className="ml-10 px-0" >
        <h2 className="heading mt-5">My Bookings</h2>
        {loading && !error && <Loading/>}
        {error && !loading && <Error errMsg={error}/>}
        {!loading && !error && (
        <div style={{ overflowX: 'auto', maxWidth: '100%', whiteSpace: 'nowrap' }}>
          <div>
            <div className='mt-3 py-0.5 min-w-[560px] flex lg:text-lg md:text-lg text-[14px]'>
              <div className='w-72 pl-6'>
                <h3 className='text-headingColor text-[20px] leading-9 mt-3 font-bold'>
                  Staion Name
                </h3>
              </div>
              <div className='w-32 flex justify-center'>
                <h3 className='text-headingColor text-[20px] leading-9 mt-3 font-bold'>
                  Type
                </h3>
              </div>
              <div className='w-28 flex justify-center'>
                <h3 className='text-headingColor text-[20px] leading-9 mt-3 font-bold'>
                  Slot
                </h3>
              </div>
              <div className='w-36 flex justify-center'>
                <h3 className='text-headingColor text-[20px] leading-9 mt-3 font-bold'>
                  Date
                </h3>
              </div>
              <div className='w-32 flex justify-center'>
                <h3 className='text-headingColor text-[20px] leading-9 mt-3 font-bold'>
                  Timing
                </h3>
              </div>
            </div>
            <div className='mt-5'>
              {bookings.map(booking => (
                <div key={booking._id} className="mt-3 py-0.5 min-w-[560px] flex lg:text-lg md:text-lg text-[14px]">
                  <div className='w-72'>
                    <h3 >
                      {booking.stationName}
                    </h3>
                  </div>
                  <div className='w-32 flex justify-center'>
                    <h3 >
                      {booking.type}
                    </h3>
                  </div>
                  <div className='w-28 flex justify-center'>
                    <h3 >
                      {booking.slot}
                    </h3>
                  </div>
                  <div className='w-36 flex justify-center'>
                    <h3 >
                      {new Date(booking.slotDate).toLocaleDateString('en-GB')}
                    </h3>
                  </div>
                  <div className='w-32 flex justify-center'>
                    <h3 >
                      {booking.startTime} - {booking.endTime}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex text-[14px] mt-5 p-5 items-center justify-center w-min-[560px]'>
            <h2 >**Timings are in 24 hrs format</h2>
          </div>
        </div>
        )}
        {!loading && !error && bookings.length==0 && (
          <div className='flex p-5 items-center justify-center w-full'>
            <h2 >You haven't booked any slot!</h2>
          </div>
        )}
      </div>
    </div>
  </>
}

export default MyBookings