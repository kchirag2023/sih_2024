import React from 'react'
import contact from '../../pics/contact.png'
import appointment from '../../pics/appointment.png'
import './Contact.css'
import Form from '../Form/Form'
const Contact = () => {
  return (
    <>
        <div className='contact flex justify-around items-center'>
            <div className='contact-img'>
                {/* <p className='title'>Contact Us</p> */}
                <img src={appointment}/>
            </div>
            <div className='contact-form'>
              <Form/>
            </div>
        </div>
    </>
  )
}

export default Contact