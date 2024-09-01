// Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import healthcare from '../../pics/healthcare.png'
import invoice from '../../pics/invoice.png'

function Dashboard() {
  const navigate = useNavigate();

  return (

    <div className="container mx-auto mt-10 h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 h-84">Dashboard</h1>
      <div className="flex justify-center space-x-4">
        
        {/* card */}
         <div class="card card-5">
          <div className=' card-upper flex items-center '>
            <div class="card__icon">
              <img src={healthcare}/> 
            </div> 
            <div className='card-title'>Patient detail</div>
          </div>
          <div className='card-content'>
          Turn your dream home into a reality today with our affordable and hassle-free home loan solutions!
          </div>
          <div className='flex justify-end gap-6'>
          {/* <div className="know-more-link"><a href='/Services/HomeLoan'>Know More</a></div> */}
          <div className='card-link'><a href='/Patientdetail'>Check Now</a></div>
          </div>
        </div>

        {/* card-2
         */}
         <div class="card card-5">
          <div className=' card-upper flex items-center '>
            <div class="card__icon">
              <img src={healthcare}/> 
            </div> 
            <div className='card-title'>Reports</div>
          </div>
          <div className='card-content'>
          Turn your dream home into a reality today with our affordable and hassle-free home loan solutions!
          </div>
          <div className='flex justify-end gap-6'>
          {/* <div className="know-more-link"><a href='/Services/HomeLoan'>Know More</a></div> */}
          <div className='card-link'><a href='/SelfCheckup'>Check Now</a></div>
          </div>
        </div>

        {/* card-3
        
      */}
      <div class="card card-5">
          <div className=' card-upper flex items-center '>
            <div class="card__icon">
              <img src={healthcare}/> 
            </div> 
            <div className='card-title'>Prescription</div>
          </div>
          <div className='card-content'>
          Turn your dream home into a reality today with our affordable and hassle-free home loan solutions!
          </div>
          <div className='flex justify-end gap-6'>
          {/* <div className="know-more-link"><a href='/Services/HomeLoan'>Know More</a></div> */}
          <div className='card-link'><a href='/SelfCheckup'>Check Now</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
