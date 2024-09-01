import React,{useState,useEffect} from 'react';
import './App.css';
import {Routes ,Router ,Route,BrowserRouter} from 'react-router-dom'
// import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import Loader from "./components/Loader/Loader";

import ContactUs from './pages/ContactUs';


import Invoice from './pages/Invoice';
import Dashboard from './pages/Dashboard';
import SelfCheckup from './pages/SelfCheckup';
import Patient from './pages/Patientdetail';


function App() {
  const[Loading,SetLoading]=useState(true);

  useEffect(()=>{
    SetLoading(true)

    setTimeout(()=>{
    SetLoading(false)}
    ,1900)
  },[])  
  return (
    <>
    
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/invoice' element={<Invoice/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/ContactUs' element={<ContactUs/>}></Route>
            <Route path='/SelfCheckup' element={<SelfCheckup/>}></Route>
            <Route path='/Patientdetail' element={<Patient/>}></Route>
           
            
        </Routes>
        </BrowserRouter>
       
    </>
  )
}

export default App;
