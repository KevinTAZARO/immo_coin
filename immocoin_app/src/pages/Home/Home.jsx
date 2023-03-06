import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='home-title'>
        <h1>
          Home
        </h1>
      </div>
      <Footer />  
    </div>
  )
}

export default Home
