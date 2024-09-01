import react,{ useState } from 'react';
import './Carousel.css'
// import pic from '../../pics/pic6.png';
import doctors from '../../pics/doctors.png'
import Button from '../Button/Button';
import Button2 from '../Button2/Button2';
function Carousels() {
  

  return (
    <>
      <div className='hero shadow bg-gradient-to-t from-slate-100'>
        
          <div className='hero-img-div  '>
            <img src={doctors} />
          </div>
          <div className='hero-content-div'>
            <div className='hero-title flex flex-col justify-center items-start'>
              <p className=' hero-para1 text-indigo-700 text-5xl font-bold'> Get Your Daily Health Checkup </p>
              <p className='hero-para1 text-indigo-700 text-5xl font-bold'> With Your  <span className='text-rose-600'>Personal Doctor</span></p>
            </div>
            <div className='hero-paras'>
              <p>Stay on top of your health track, manage, and improve your</p>
              <p>well-being effortlessly. Join thousands who are transforming their lives today!</p>
            </div>
            <div className='contact-btn-div gap-10'>
            <Button/>
            {/* <Button2/> */}
            </div>
          </div>
          
        
      </div> 
      
    </>
  )
}

export default Carousels;