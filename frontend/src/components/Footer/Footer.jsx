import React from 'react'
import {Link} from 'react-router-dom'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillGithub} from 'react-icons/ai'

const socialLinks01 = [
  {
    path: "https://www.linkedin.com/in/farhaan-jamal/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5"/>
  },
  {
    path: "https://github.com/FarhaanJamal",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5"/>
  }
]
const socialLinks02 = [
  {
    path: "https://www.linkedin.com/in/gowri-priya-mahendran-227962228",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5"/>
  },
  {
    path: "https://github.com/GowripriyaMahendran",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5"/>
  }
]

const quickLinks01 = [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/stations",
    display: "Find a Charging Station"
  },
  {
    path: "/mybookings",
    display: "My Bookings"
  }
]
const quickLinks02 = [
  {
    path: "/stations",
    display: "Book a Slot"
  },
  {
    path: "/stations",
    display: "Find a Location"
  },
  {
    path: "/stations",
    display: "Find a Station"
  }
]
const quickLinks03 = [
  {
    path: "mailto:farhaanjamal456@gmail.com",
    display: "Contact Us"
  }
]
const Footer = () => {
  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className='flex justify-around flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <div>
              <h2 className='text-[20px] leading-[30px] font-[700] text-headingColor'>
                Developed By
              </h2>
            </div>
            <div className='flex flex-col content-around'>
              <div className='flex items-center gap-3 mt-4 content-around'>
                <p className='text-[16px] leading-7 font-[400] text-textColor'>
                  Farhaan J
                </p>
                {socialLinks01.map((link, index)=> (
                  <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                    {link.icon}
                  </Link>
                ))}
              </div>
              <div className='flex items-center gap-3 mt-4 content-around'>
                <p className='text-[16px] leading-7 font-[400] text-textColor'>
                  Gowri Priya M
                </p>
                {socialLinks02.map((link, index)=> (
                  <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) =>(
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              I want to
            </h2>
            <ul>
              {quickLinks02.map((item, index) =>(
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) =>(
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer