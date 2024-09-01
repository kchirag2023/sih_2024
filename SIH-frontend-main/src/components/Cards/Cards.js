import React from 'react'

// import personal from '../../pics/personal.png';
// import scholarship from '../../pics/scholarship.png' 
import healthcare from '../../pics/healthcare.png'
import invoice from '../../pics/invoice.png'

import './Cards.css'
const Cards = () => {
  return (
    <>
    <div className='cards-section'>
      <div className='cards-title flex items-center'>DashBoard</div>
      <div className='cards'>

        <div class="card card-5">
          <div className=' card-upper flex items-center '>
            <div class="card__icon">
              <img src={healthcare}/> 
            </div> 
            <div className='card-title'>DashBoard</div>
          </div>
          <div className='card-content'>
          Turn your dream home into a reality today with our affordable and hassle-free home loan solutions!
          </div>
          <div className='flex justify-end gap-6'>
          {/* <div className="know-more-link"><a href='/Services/HomeLoan'>Know More</a></div> */}
          <div className='card-link'><a href='/Dashboard'>Check Now</a></div>
          </div>
        </div>

      <div class="card card-5">
      <div className=' card-upper flex items-center '>
        <div class="card__icon">
          <img src={invoice}/> 
        </div> 
        <div className='card-title'>Invoice</div>
        </div>
        <div className='card-content'>
        Get the financial boost you need to make your dreams come true with our convenient and quick personal loans!
        </div>
          <div className='flex justify-end gap-6'>
          <div className='card-link'><a href='/invoice'>Generate Invoice</a></div>
          </div>
      </div>

      <div class="card card-5">
      <div className=' card-upper flex items-center '>
        <div class="card__icon">
          <img src={invoice}/> 
        </div> 
        <div className='card-title'>Education Loan</div>
        </div>
        <div className='card-content'>
        Invest in your future and unlock limitless opportunities with our easy and affordable education loans!
        </div>
          <div className='flex justify-end gap-6'>
          <div className="know-more-link"><a href='/Services/EducationLoan'>Know More</a></div>
          <div className='card-link'><a href='/ContactUs'>Apply Now</a></div>
          </div>
      </div>


      </div>
    </div>
    
    </>
  )
}

export default Cards