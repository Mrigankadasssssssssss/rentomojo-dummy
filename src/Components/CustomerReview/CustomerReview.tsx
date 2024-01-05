'use client'
import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import './CustomerReview.css'

const CustomerReview = () => {
  return (
    <div>
      <>
      <div className='container'>
        <div className='container__left'>
            <h1>Read What Our Customers Love About Us</h1>
            <p>Over 1.5 lac happy subscribers</p>
            <p>Here's what they have to say about their RentoMojo experience</p>
            <button>Read Our Success Stories</button>
        </div>

        <div className="container__right">

            <div className="card">
                <img src="" alt="" />
                <div className="card__content">
                    <span>
                        <FaQuoteLeft/>
                    </span>
                    <div className="card__details">
                        <p>
                            When I moved to Kolkata to Bangalore, I rented a bed and mattress. Now I sleep so peacefully that I always end up being late for work :D
                        </p>
                        <h1>- Subhodeep Banerjee</h1>
                    </div>  
                </div>
            </div>

            <div className="card">
                <img src="" alt="" />
                <div className="card__content">
                    <span>
                        <FaQuoteLeft/>
                    </span>
                    <div className="card__details">
                        <p>
                        From service to product quality, everything was superb. Now I can change the look of my home whenever I want 😬
                        </p>
                        <h4>- Souvik Sardar</h4>
                    </div>  
                </div>
            </div>

            <div className="card">
                <img src="" alt="" />
                <div className="card__content">
                    <span>
                        <FaQuoteLeft/>
                    </span>
                    <div className="card__details">
                        <p>
                        Rentomojo was unbelievably helpful. The customer support staff was on their toes to help me.
                        </p>
                        <h4>- Debdipta Sardar</h4>
                    </div>  
                </div>
            </div>


        </div>
      </div>
      
      </>
    </div>
  )
}

export default CustomerReview
