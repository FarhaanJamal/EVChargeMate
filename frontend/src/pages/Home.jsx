import React from 'react'

import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import faqImg from '../assets/images/faq-img.png';

import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import { Link, useNavigate } from 'react-router-dom';
import {BsArrowRight, } from 'react-icons/bs';
import About from '../components/About/About';
import FaqList from '../components/Faq/FaqList';
import { useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate()
  const handleFindASlot = () => {
    navigate('/stations')
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  <>
    {/*hero section */}
    <section className='hero__section pt-[60px] 2xl:h-[800px]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
          {/* hero content */}
          <div>
            <div className='lg:w-[570px]'>
              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                We Help people's to stay Charged..!!
              </h1>
              <p className='text__para'>
                With our user-friendly app and extensive network of charging stations, we make electric vehicle ownership seamless and enjoyable.
                We are committed to providing a superior customer experience, ensuring you have a smooth and hassle-free journey.
              </p>
              <button onClick={handleFindASlot} className='btn'>Find a Slot</button>
            </div>
            {/* hero counter */}
            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                  30+
                </h2>
                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                <p className='text__para'>Charging Destination</p>
              </div>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                  15+
                </h2>
                <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                <p className='text__para'>Convenient Location</p>
              </div>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                  100%
                </h2>
                <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                <p className='text__para'>User Satisfication</p>
              </div>
            </div>
          </div>
          {/* hero content */}
          <div className="flex gap-[30px] justify-end">
            <div>
              <img className='w-full' src={heroImg01} alt="" />
            </div>
            <div className='mt-[30px]'>
              <img src={heroImg02} alt="" className="w-full mb-[30px]" />
              <img src={heroImg03} alt="" className="w-full" />
            </div>
          </div>
        </div>  
      </div>
    </section>
    {/*how it works section */}
    <section>
      <div className='container'>
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>
            We reducing your waiting time
          </h2>
          <p className='text para text-center'> 
            We care for your vehicle charging
          </p>
        </div>  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          <div className="py-[30px] px-5 ">
            <div className="flex items-center justify-center">
              <img src={icon01} alt='' />
            </div>
            <div className="mt-[30px] ">
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Find a Station 
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                Find the perfect charging station for your needs.
              </p>
              <Link to='/stations' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5' />
              </Link>
            </div>
          </div>
          <div className="py-[30px] px-5 ">
            <div className="flex items-center justify-center">
              <img src={icon02} alt='' />
            </div>
            <div className="mt-[30px] ">
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Find a Location
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                Your one-stop shop for electric car charging.
              </p>
              <Link to='/stations' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5' />
              </Link>
            </div>
          </div>
          <div className="py-[30px] px-5 ">
            <div className="flex items-center justify-center">
              <img src={icon03} alt='' />
            </div>
            <div className="mt-[30px] ">
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Book Slot
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                Book your spot in advance and avoid the hassle.
              </p>
              <Link to='/stations' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <About/>
    {/*Faq section */}
    <section>
      <div className="container">
        <div className='flex justify-between gap=[50px] lg:gap-0'>
          <div className='w-1/2 pt-5 pr-8 lg:pt-10 lg:pr-20 hidden md:block'>
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
  );
};

export default Home;