import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Rrouters from '../routes/Routers'

const Layout = () => {
  return <>
    <Header/>
    <main>
      <Rrouters/>
    </main>
    <Footer/>
  </>
}

export default Layout