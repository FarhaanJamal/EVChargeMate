import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Home from '../pages/Home'
import MyBookings from '../pages/MyBookings'
import Stations from '../pages/Stations/Stations'
import StationDetails from '../pages/Stations/StationDetails'
import StationsBooking from '../pages/Stations/StationBooking'

import {Routes, Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

const Routers = () => {
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Signup/>} />
      <Route path="/mybookings" element={<ProtectedRoute><MyBookings/></ProtectedRoute>} />
      <Route path="/stations" element={<Stations/>} />
      <Route path="/stations/:id" element={<StationDetails/>} />
      <Route path="/stations/:id/booking" element={<ProtectedRoute><StationsBooking/></ProtectedRoute>} />
    </Routes>
  )
}

export default Routers