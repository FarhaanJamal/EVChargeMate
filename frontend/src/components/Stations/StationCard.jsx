import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight, } from 'react-icons/bs';

const StationCard = ({ station }) => {
  const {
    _id, name, photo, address, price, type
  } = station
  return <>
      <div className='p-3 lg:p-5'>
        <div>
          <img src={photo} className='w-full' alt=''/>
        </div>
        <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5'>
          {name}
        </h2>
        <p className='text-[14px] leading-6 font-[400] text-textColor'>
          {address}
        </p>
        <div className='bg-[#f0cbff] text-purpleColor mt-2 lg:mt-4 flex items-center justify-between rounded'>
          <span className='py-1 px-2 lg:py-2 lg:px-4 flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold'>
            Average Price
          </span>
          <span className='py-1 px-2 lg:py-2 lg:px-4 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold'>
            {price}
          </span>
        </div>
        <div className='mt-2 lg:mt-4 flex items-center justify-between'>
          <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold rounded'>
          {type.map((typeItem, index) => (
            <p key={index}>
              {typeItem}
            </p>
          ))}
          </span>
          <Link to={`/stations/${_id}`} className="w-[36px] h-[36px] lg:w-[44px] lg:h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none">
            <BsArrowRight className="group-hover:text-white lg:w-6 lg:h-5 w-5 h-4" />
          </Link>
        </div>
      </div>
    </>
}

export default StationCard