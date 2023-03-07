import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './AdvertForm.scss';


const AdvertForm = () => {

  return (
    <div>
      <Navbar />
      <div>
        <h1>
          Coucou, voici la listes des annonces, c'est carré !
        </h1>
      </div>
      <Footer />  
    </div>
  )
}

export default AdvertForm
