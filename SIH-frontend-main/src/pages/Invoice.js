import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import InvoiceForm from '../components/InvoiceForm'
const Invoice = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <InvoiceForm />
      </div>
    </div>
    </>
  )
}

export default Invoice