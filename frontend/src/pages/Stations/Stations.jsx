import StationCard from "../../components/Stations/StationCard"
import { stations } from "./../../assets/data/stations"
import FaqList from '../../components/Faq/FaqList';
import faqImg from '../../assets/images/faq-img.png';
import useGetData from '../../hooks/useFetchData'
import { BASE_URL } from '../../config';
import Loading from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
import { useState, useEffect } from "react";

const Stations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchInput, setSearchInput] = useState('')
  const {data: stations, loading, error} = useGetData(`${BASE_URL}/station?query=${searchInput}`)
  const handleInputChange = (e) => {
    setSearchInput(e.target.value)
  }
  return <>
    {/* Search */}
    <section className="bg-[#fff9ea]">
      <div className="container text-center">
        <h2 className="heading">Find a Charging Station</h2>
        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
          <input type="search" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor" placeholder="Search Station" value={searchInput} onChange={handleInputChange}/>
        </div>
      </div>
    </section>
    {/* Station Card*/}
    <section>
      <div className="container">
        {loading && !error && <Loading/>}
        {error && !loading && <Error errMsg={error}/>}
        {!loading && !error && (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {stations.map(station => (
              <StationCard key={station._id} station={station}/>
            ))}
          </div>
        )}
      </div>
    </section>
    {/* Faq section */}
    <section>
      <div className="container">
        <div className='flex justify-between gap=[50px] lg:gap-0'>
          <div className='w-1/2 pr-8 lg:pt-10 lg:pr-20 pt-5 hidden md:block'>
            <img src={faqImg} alt=""/>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className='heading'>
              Most questions by our beloved users
            </h2>
            <FaqList />
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Stations