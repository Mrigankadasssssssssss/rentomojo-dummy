'use client'
import Footer from '@/Components/Footer/Footer'
import NavBar from '@/Components/NavBar/NavBar'
import HomePage from '@/Pages/HomePage'
import React from 'react'

const page = () => {
  return (
    <div>
      <NavBar/>
      <HomePage/>
      <Footer/>
    </div>
  )
}

export default page
