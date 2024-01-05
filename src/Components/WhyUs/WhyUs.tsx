'use client'
import React from 'react'

import { TfiLocationPin } from "react-icons/tfi";
import { LuSofa } from "react-icons/lu";
import { GrVmMaintenance } from "react-icons/gr";
import { MdFreeCancellation } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { GiCardExchange } from "react-icons/gi";

import './WhyUs.css'



const WhyUs = () => {
  return (
    <div><>
        <div className='about'>
            <div className='container'>

                <div className='box'>
                    <div className='icon'>
                        <LuSofa />
                    </div>
                    <div className='detail'>
                        <h3>Finest Quality Products</h3>
                        <p>We do a strict quality-check for every product</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='icon'>
                        <TfiLocationPin />
                    </div>
                    <div className='detail'>
                        <h3>Free Relocation</h3>
                        <p>We'll relocate your rented products for free.</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='icon'>
                        <GrVmMaintenance />
                    </div>
                    <div className='detail'>
                        <h3>Free Maintenance</h3>
                        <p>You can sit back and relax.</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='icon'>
                        <MdFreeCancellation />
                    </div>
                    <div className='detail'>
                        <h3>Cancel Anytime</h3>
                        <p>Pay only for the time you use the product.</p>
                    </div>
                </div>


                {/*Can Use According Requirement}

                {/* <div className='box'>
                    <div className='icon'>
                        <GiReturnArrow />
                    </div>
                    <div className='detail'>
                        <h3>Easy Return on Delivery</h3>
                        <p>You can return it right away—no questions asked.</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='icon'>
                        <GiCardExchange />
                    </div>
                    <div className='detail'>
                        <h3>Keep Upgrading</h3>
                        <p>Upgrade to try another, newer design and enjoy the change!</p>
                    </div>
                </div> */}



            </div>
        </div></>
    </div>
  )
}

export default WhyUs
