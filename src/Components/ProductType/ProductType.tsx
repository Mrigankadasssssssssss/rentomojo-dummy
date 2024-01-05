'use client'
import React from 'react'
import './ProductType.css'

const ProductType = () => {
  return (
    <div>
      <>
      <div className='product_type'>
        <div className='container'>

            <div className='box'>
                <div className='img_box'>
                    <img src='./category_images/001-package.png' alt=''></img>
                </div>
                <div className='detail'>
                    <p>Packages</p>
                </div>
            </div>

            <div className='box'>
                <div className='img_box'>
                    <img src='./category_images/002-sofa.png' alt=''></img>
                </div>
                <div className='detail'>
                    <p>Furnitures</p>
                </div>
            </div>

            <div className='box'>
                <div className='img_box'>
                    <img src='./category_images/003-electronics.png' alt=''></img>
                </div>
                <div className='detail'>
                    <p>Appliances</p>
                </div>
            </div>

            <div className='box'>
                <div className='img_box'>
                    <img src='./category_images/004-responsive.png' alt=''></img>
                </div>
                <div className='detail'>
                    <p>Electronics</p>
                </div>
            </div>

            {/* <div className='box'>
                <div className='img_box'>
                    <img src='./category_images/005-stationary-bike.png' alt=''></img>
                </div>
                <div className='detail'>
                    <p>Fitness</p>
                </div>
            </div>

            <div className='box'>
                <div className='img_box'>
                    <img src='./category_images/006-home.png' alt=''></img>
                </div>
                <div className='detail'>
                    <p>WFH Essentials</p>
                </div>
            </div> */}

            


        </div>
      </div>
      </>
    </div>
  )
}

export default ProductType
