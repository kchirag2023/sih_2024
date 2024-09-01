import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Heart from '../components/Heart/Heart'

const SelfCheckup = () => {
  return (
    <>
        <Navbar/>
        <div className='flex justify-center items-center w-1/4 h-1/4'>
        <Heart/>
        </div>
    </>
  )
}

export default SelfCheckup