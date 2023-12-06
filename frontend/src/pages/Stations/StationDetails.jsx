import { useEffect } from "react";
import { stations } from "./../../assets/data/stations"
import useGetData from '../../hooks/useFetchData'
import { BASE_URL } from '../../config';
import Loading from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
import { useNavigate } from 'react-router-dom'

const StationDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const url = window.location.href
  const urlParts = url.split('/')
  const id = urlParts[urlParts.length-1]
  const {data: station, loading, error} = useGetData(`${BASE_URL}/station/${id}`)
  //console.log(station)
  const {name, photo, address, price, type, bio} = station
  const navigate = useNavigate()
  const handleBookNowClick = () => {
    navigate(`/stations/${id}/booking`)
  }
  return <section>
    <div className="max-w-[1170px] px-5 mx-auto ">
      {loading && !error && <Loading/>}
      {error && !loading && <Error errMsg={error}/>}
      {!loading && !error && station && station.length !== 0 && (
      <div className="grid md:grid-cols-3 gap-[50px]">
        <div className='md:col-span-2'>
          <div className="flex items-center gap-5">
            <figure className='max-w-[200px] max-h-[200px]'>
              <img src={photo} alt="" className='w-full'/>
            </figure>
            <div>
              <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>
                {name}
              </h3>
              <p className='text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]'>
                {address}
              </p>
            </div>
          </div>
          <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
            <p className={'py-2 px-5 mr-5 text-[20px] leading-7 text-headingColor font-semibold'}>About</p>
          </div>
          <div className='mt-[50px]'>
            <p className='text__para'>
              {bio}
            </p>
          </div>
        </div>
        <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
          <div className='bg-[#f0cbff] text-purpleColor mt-2 lg:mt-4 flex items-center justify-between rounded'>
            <span className='py-1 px-2 lg:py-2 lg:px-4 flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold'>Average Price</span>
            <span className='py-1 px-2 lg:py-2 lg:px-4 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold'>
              {price}
            </span>
          </div>
          <div className="mt-[30px]">
            <p className='text__para mt-0 font-semibold text-headingColor'>
                Charging Type:
            </p>
            <div className='mt-2 lg:mt-4 flex items-center justify-between'>
              <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold rounded'>
              {type.map((typeItem, index) => (
                <p key={index}>
                  {typeItem}
                </p>
              ))}
              </span>
            </div>
          </div>
          <button onClick={handleBookNowClick} className='btn px-2 w-full rounded-md'>Book Now</button> 
        </div>
      </div>
      )}
    </div>
  </section>
};

export default StationDetails;