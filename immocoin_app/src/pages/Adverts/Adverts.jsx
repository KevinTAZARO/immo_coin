export default function Adverts() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const galleryRef = useRef(null);
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

  const handleMouseMove = e => {
    const gallery = galleryRef.current;
    setMousePosition({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    });
    const maxX = gallery.scrollWidth - window.innerWidth;
    const maxY = gallery.scrollHeight - window.innerHeight;
    const panX = maxX * mousePosition.x * -1;
    const panY = maxY * mousePosition.y * -1;
    gallery.style.transform = `translate(${panX}px, ${panY}px)`;
  };

  return (
    <div className='adverts' onMouseMove={handleMouseMove}>
      <div className='gallery' ref={galleryRef}>
        {adverts.map(advert => (
          <div className='card' key={advert.id}>
            <img src={advert.picture_url} />
          </div>
        ))}
      </div>
      <Link to="/" id='home-link' class='meta-link'>
        <span>
          Get back to Home
        </span>
      </Link>  
    </div>
  )
}


import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer/Footer'

import { advertAPI } from '../../services/fetchAdverts'

import './Adverts.scss';
