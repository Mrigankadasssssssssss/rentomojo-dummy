'use client'
import React from 'react'
import Banner from '../Hero/Banner'
import ProductType from '../ProductType/ProductType'
import WhyUs from '../WhyUs/WhyUs'
import CustomerReview from '../CustomerReview/CustomerReview'

const Home = () => {
  return (
    <div>
      <Banner/>
      <ProductType/>
      <WhyUs/>
      <CustomerReview/>
    </div>
  )
}

export default Home