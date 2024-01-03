'use client';
import React from 'react'
import './style.css'
const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='footerSec' >

            <div className='firstSec'>
            <label htmlFor="">RENTMOJO</label>
            <ul>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">About</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Culture</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Investors</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Careers</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Contact</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Our Benifits</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Sitemap</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Landlords</a></li>
            </ul>
            </div>
            <div className='firstSec'>
                <label htmlFor="">INFORMATION</label>
                <ul>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Blog</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Support</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Documentation</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Annual Returns</a></li>
                </ul>
            </div>
            <div className='firstSec'>
            <label htmlFor="">POLICIES</label>
            <ul>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Shipping Policy</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Cancellation & Return</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Rental Terms & Conditions</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Referral Terms & Conditions</a></li>
           
            </ul>
            </div>
            <div className='needHelp firstSec'>
                <label htmlFor="">NEED HELP ?</label>
                    <div className='mail'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                        <a href="mailto:jo@rentomojo.com"><span>jo@rentomojo.com</span></a>
                    </div>
                    <div className="download">
                        <h4>Download</h4>
                        <img src='/images/playstore.png' alt='' width={100} height={100} />
                        <img src='/images/applestore.png' alt='' width={100} height={100} />
                    </div>
            </div>
            
            </div>
            <div className='secondSec'>
                <p className='copyRight'>&copy; 2024. Edunetwork Pvt. Ltd.</p>
                <div className="images">
                    <img src="/images/fb.png" alt="" /> 
                    <img src="/images/li.png" alt="" />
                    <img src="/images/twitter.png" alt="" />
                    <img src="/images/yt.png" alt="" />
                </div>
                <p className='up'>
                    Go Up 
                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                </svg>
                </p>
            </div>
        </div>
        
    </>
  )
}

export default Footer
