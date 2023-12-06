import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { stations } from "./../../assets/data/stations"
import useGetData from '../../hooks/useFetchData'
import { BASE_URL } from '../../config';
import Loading from '../../components/Loader/Loading';
import ErrorComponent from '../../components/Error/Error';
import { token } from '../../config';
import { toast } from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'

function getFormattedDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const StationBooking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const url = window.location.href
  const urlParts = url.split('/')
  const id = urlParts[urlParts.length-2]
  const {data: station, loading, error} = useGetData(`${BASE_URL}/station/${id}`)
  //console.log(station)
  const [selectedType,  setSelectedType] = useState(null)
  const [availabilityStatus, setAvailablityStatus] = useState(null)
  const {name, photo, address, price, type, slot, bio} = station
  const [formData, setFormData] = useState({
    type: '',
    slot: '',
    slotDate: getFormattedDate(new Date()),
    startTime: '',
    endTime: ''
  });
  const handleInputChange = e=>{
    const {name, value} = e.target
    if (name==='type'){
      const selectedIndex = e.target.selectedIndex
      const selectedType = type[selectedIndex]
      const filteredSlots = slot.filter((_, index) => index === selectedIndex)
      setFormData({...formData, [name]: value, slot: filteredSlots.length > 0 ? filteredSlots[0]: ''})
    } else {
      setFormData({...formData, [e.target.name]:e.target.value})
    }
  };
  const [loadingHashCheck, setLoadingCheck] = useState(false)
  const navigate = useNavigate()
  const handleCheckNowClick =  async () => {
    setLoadingCheck(true)
    try {
      //console.log(token)
      const response = await fetch(`${BASE_URL}/booking/check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          stationName: name,
          type: formData.type,
          slot: formData.slot,
          slotDate: formData.slotDate,
          startTime: formData.startTime,
          endTime: formData.endTime,
        }),
      });
      //console.log(name, formData.type, formData.slot, formData.slotDate, formData.startTime, formData.endTime)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setAvailablityStatus(result.data)
      setLoadingCheck(false)
      //console.log(result.data);
    } catch (error) {
      setLoadingCheck(false)
      console.error('Error during availability check:', error);
    }
  }
  const [loadingHash, setLoading] = useState(false)
  const submitHandler = async event => {
    //console.log(formData)
    event.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${BASE_URL}/booking/new`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          stationName: name,
          type: formData.type,
          slot: formData.slot,
          slotDate: formData.slotDate,
          startTime: formData.startTime,
          endTime: formData.endTime,
        })
      })
      const {message} = await res.json()
      if (!res.ok){
        throw new Error(message)
      }
      setLoading(false)
      toast.success(message)
      navigate('/mybookings')
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }
  return <section>
    <div className="max-w-[1170px] px-5 mx-auto ">
      {loading && !error && <Loading/>}
      {error && !loading && <ErrorComponent errMsg={error}/>}
      {!loading && !error && station && station.length !== 0 && (
      <div className="grid md:grid-cols-3 gap-[50px]">
        <div className='md:col-span-2'>
          <div>
            <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>
              {name}
            </h3>
            <p className='text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]'>
              {address}
            </p>
          </div>
          <div className='mt-[50px] border-t-4 border-solid border-[#0066ff34]'>
            <form onSubmit={submitHandler}>
              <div className="mt-2 flex flex-wrap">
                <div className="flex-1 mb-5 mr-5">
                  <label htmlFor="type" className='text-[14px] text-primaryColor leading-6 md:text-[15px] lg:max-w-[390px]'>Select a type</label>
                  <select name="type" id="type" onChange={handleInputChange} value={formData.type} className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" required>
                    {type.map((typeItem, index) => (
                      <option key={index} value={typeItem}>
                        {typeItem}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 mb-5 mr-5">
                  <label htmlFor="slot" className='text-[14px] text-primaryColor leading-6 md:text-[15px] lg:max-w-[390px]'>Select a slot</label>
                  <select name="slot" id="slot" onChange={handleInputChange} value={formData.slot} className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" required>
                    {Array.from({ length: formData.slot }, (_, index) => index + 1).map((slotItem) => (
                      <option key={slotItem} value={slotItem}>
                        {slotItem}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex-1 mb-5">
                  <label htmlFor="slotDate" className='text-[14px] text-primaryColor leading-6 md:text-[15px] lg:max-w-[390px]'>Select a date</label>
                  <input
                    type="date" 
                    id="slotDate" 
                    name="slotDate"
                    onChange={handleInputChange} 
                    value={formData.slotDate} 
                    min={getFormattedDate(new Date())}
                    className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer" 
                    required
                  />
                </div>
              <div className="flex flex-wrap">
                <div className="flex-1 mb-5 mr-5">
                  <input 
                  type="number" 
                  placeholder="Enter the starting hour" 
                  name="startTime" 
                  value={formData.startTime} 
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                  min="0" max="23"
                  />
                </div>
                <div className="flex-1 mb-5">
                  <input 
                  type="number" 
                  placeholder="Enter the ending hour" 
                  name="endTime" 
                  value={formData.endTime} 
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                  min="1" max="24"
                  />
                </div>
              </div>
              <div className="w-full mt-7">
                <button
                  type="submit"
                  className={`w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 ${availabilityStatus !== 'Available' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={availabilityStatus !== 'Available' || (loadingHash && true)}
                >
                    {loadingHash ? <HashLoader size={35} color="#ffffff"/> : 'Book Now'}
                </button>
              </div>
            </form>
            <div className='flex text-[14px] mt-5 p-5 items-center justify-center w-full'>
              <h2 >**Timings are in 24 hrs format</h2>
            </div>
          </div>
        </div>
        <div className='shadow-panelShadow p-3 lg:p-5 rounded-md h-64'>
          <p className='text__para mt-6 font-semibold text-headingColor'>
            Check Availablity:
          </p>
          <button onClick={handleCheckNowClick} className='btn px-2 w-full rounded-md mt-6'>
            {loadingHashCheck ? <HashLoader size={35} color="#ffffff"/> : 'Check Now'}
          </button> 
          <div className="mt-[30px]">
            <div className='mt-2 md:mt-4 md:pt-2 sm:pt-4 lg:mt-4 flex items-center justify-around'>
              {availabilityStatus === 'Available' && (
                <span className=' bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                  Available
                </span>
              )}
              {availabilityStatus === 'Booked' && (
                <span className=' bg-[#f0cbff] text-purpleColor py-1 px-2 lg:py-2 lg:px-6 text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                  Booked
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  </section>
};

export default StationBooking