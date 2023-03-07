import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Adverts.scss';

import { advertAPI } from '../../services/fetchAdverts'

const Adverts = () => {

  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await advertAPI.getAdverts();
        setAdverts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);


  return (
    <div>
      <Navbar />
      <div>
        <h1>
          Coucou, voici la listes des annonces, c'est carré !
        </h1>
        {adverts.map(advert => (
          <div className='card' key={advert.id}>
            <h2>{advert.title}</h2>
            <p>{advert.description}</p>
          </div>
        ))}
      </div>
      <Footer />  
    </div>
  )
}

export default Adverts
