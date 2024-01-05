'use client'
import React from 'react'
import 'flowbite/dist/flowbite.css';
import './banner.css'


import { Carousel } from 'flowbite-react';

function Component() {


  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={1000}>

        <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="/banner/banner-1.jpg" alt="banner1" className='banner-image'/>
        </a>

        <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="/banner/banner-2.jpg" alt="banner2" className='banner-image'/>
        </a>

        <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="/banner/banner-3.jpg" alt="banner3" className='banner-image'/>
        </a>
        
      </Carousel>


    </div>
  );
}



export default Component
