import React, { useState } from 'react'
import './Form.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Description, Dialog, DialogPanel, DialogTitle,DialogBackdrop } from '@headlessui/react'
import ApplySuccess from '../ApplySuccess/ApplySuccess';
const Form = () => {
    const [FirstName, setFirstName] = useState()
    const [LastName, setLastName] = useState()
    const [Email, setEmail] = useState()
    const [PhoneNo, setPhoneNo] = useState()
    const [age, setAge] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const backToHomePage =()=>{
        setIsOpen(false);
        navigate('/');
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        
        axios.post('http://localhost:4000/ContactUs', { FirstName, LastName, Email, PhoneNo, age, time,date })
       .then(response => {
            console.log(response)
            
        })
       .catch(error => {
            console.error(error)
        })
        e.target.reset();
        setIsOpen(true)
        
    }
    const changeFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const changeLastName = (e) => {
        setLastName(e.target.value)
    }
    const changePhoneNo = (e) => {
        setPhoneNo(e.target.value)
    }
    const changeAge = (e) => {
        setAge(e.target.value)
    }
    const changeDate = (e) => {
        setDate(e.target.value)
    }
  
    const changeTime = (e) => {
        setTime(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    
  return (
    <>
    <form class="form bg-slate-200 m-4" method='post' onSubmit={(e)=>handelSubmit(e)}>
    {/* <p class="title">Contact Us </p> */}
    
        <div class="form-content">
        <label>
            <input required="true" onChange={changeFirstName} name='Firstname' placeholder="" type="text" class="input"/>
            <span>Firstname</span>
        </label>
        
        <label>
            <input required="true" onChange={changeLastName} name='Lastname' placeholder="" type="text" class="input"/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input required="true" onChange={changeEmail} name='Email' placeholder="" type="email" class="input"/>
        <span>Email</span>
    </label> 

    <label>
        <input required="true" min="1000000000" onChange={changePhoneNo} name='PhoneNo' placeholder="" type="number" class="input"/>
        <span>Phone No</span>
    </label>

    
    <label htmlFor='occupation' >
        <select required="true" class="input" onChange={changeAge} name='Occupation' >
            <option value="" hidden disabled selected></option>
            <option value="self Occupied">0-10yrs</option>
            <option value="salaried">10-20yrs</option>
            <option value="salaried">20-30yrs</option>
            <option value="salaried">30-40yrs</option>
            <option value="salaried">40-50yrs</option>
            <option value="salaried">60-60yrs</option>
            <option value="salaried">60-70yrs</option>
            <option value="salaried">70-80yrs</option>
            <option value="salaried">80yrs+</option>
        </select>
        <span>Age</span>
    </label>
    <label>
            <input required="true" onChange={changeDate} name='Firstname' placeholder="" type="date" class="input"/>
           
    </label>
    <label>
            <input required="true" onChange={changeTime} name='Firstname' placeholder="" type="time" class="input"/>
            
    </label>
    
    

    
    <button type='submit'  class="submit">Done</button>

    
</form>

<Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            
            <ApplySuccess/>
            <div className="flex justify-center">
              <button className='success-btn' onClick={backToHomePage}>Done</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

</>      
  )
}

export default Form