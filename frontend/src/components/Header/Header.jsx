import {useEffect, useRef, useContext} from 'react'
import logo from '../../assets/images/logo.png'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import {BiMenu} from "react-icons/bi"
import { authContext } from '../../context/AuthContext'

const navLinks = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/stations',
    display:'Find a charging station'
  },
  {
    path:'/mybookings',
    display:'My Bookings'
  },
]

const Header = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const {user, token, dispatch} = useContext(authContext)
  const handleLogout = () => {
    localStorage.clear();
    dispatch({type: 'LOGOUT' })
    navigate('/login');
    window.location.reload();
  }
  const handleStickyHeader = () => {
    window.addEventListener('scroll', ()=> {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add("sticky__header")
      }else{
        headerRef.current.classList.remove("sticky__header")
      }
    })
  }
  useEffect(()=>{
    handleStickyHeader()
    return () => window.removeEventListener('scroll', handleStickyHeader)
  })
  const toggleMenu = ()=>{
    menuRef.current.classList.toggle("show__menu")
  }
  return <header className='header flex items-center' ref={headerRef}>
    <div className='container px-3'>
      <div className='flex items-center ml-[-10px] justify-between'>
        {/*logo*/}
        <Link to='/'>
          <img src={logo} alt=''/>
        </Link>
        {/*menu*/}
        <div className='navigation min-w-fit' ref={menuRef} onClick={toggleMenu}>
          <ul className='menu flex items-center gap-5 md:gap-3 lg:gap-[2.7rem]'>
            {
              navLinks.map((link,index)=><li key={index}>
                <NavLink to={link.path} className={navClass=> navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]': 'text-textColor text-[16px] leading-7 font-[500]'}>
                  {link.display}
                </NavLink>
              </li>)
            }
          </ul>
        </div>
        {/*nav right*/}
        <div className='flex items-center gap-2 min-w-fit pl-2'>
          {
            token && user ? <div className='flex flex-row m-0 gap-2 items-center'> 
              <div className='min-w-fit'>
                <h1 className='text-[14px] sm:text-[18px] md:text-[18px] lg:text-[18px]'>Hi, {user?.name}</h1>
              </div>
              <div className='min-w-fit'>
                <Link to='/login'>
                  <button onClick={handleLogout} className='bg-primaryColor py-2 px-4 text-[14px] sm:px-6 sm:text-[18px] md:px-6 md:text-[18px] lg:px-6 lg:text-[18px] text-white font-[600] h-[44px] flex items-center justify-center rounded-[30px]'>
                    Log Out
                  </button>
                </Link> 
              </div>
            </div> : <div className='flex flex-row m-0 gap-1.5  min-w-fit'>
              <Link to='/login'>
                <button className='bg-primaryColor py-2 px-4 text-[14px] sm:px-6 sm:text-[18px] md:px-4 md:text-[16px] lg:px-6 lg:text-[18px] text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                  Login
                </button>
              </Link>
              <Link to='/register'>
                <button className='bg-primaryColor py-2 px-4 text-[14px] sm:px-6 sm:text-[18px] md:px-4 md:text-[16px] lg:px-6 lg:text-[18px] text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                  Sign Up
                </button>
              </Link>
            </div>
          }
          <span className='md:hidden' onClick={toggleMenu}>
            <BiMenu className="w-6 h-6 cursor-pointer"/>
          </span>
        </div>
      </div>
    </div>
  </header>
}

export default Header