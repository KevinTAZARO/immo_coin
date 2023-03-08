export default function Adverts() {

  const [adverts, setAdverts] = useState([]);

  const [searchCity, setSearchCity] = useState(null);

  const handleChange = (e) => {
    e.target.value ? setSearchCity({
      [e.target.name]: e.target.value,
    }) : setSearchCity(
      null
    )
  }

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
        <div className="signin-form">
          <form action="" className="register-form" id="login-form">
              <div className="form-group">
                  <input type="text" name="city" id="city" placeholder="Localisation" onChange={handleChange}/>
              </div>
          </form>
        </div>
        {searchCity === null ? (
          adverts.map(advert => (
            <div className='card' key={advert.id}>
              <h2>{advert.title}</h2>
              <p>{advert.description}</p>
            </div>
          ))
        ) : (
          adverts.filter(advert => advert.city.toUpperCase() == searchCity.city.toUpperCase()).map(advert => (
            <div className='card' key={advert.id}>
              <h2>{advert.title}</h2>
              <p>{advert.description}</p>
            </div>
          ))
        )}
      </div>
      <Footer />  
    </div>
  )
}


import React, { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

import { advertAPI } from '../../services/fetchAdverts'

import './Adverts.scss';
