import React ,{useEffect, useState} from 'react'
import './EmiCalculator.css'
const EmiCalculator = () => {
    const [height, setHeight] = useState(150)
    const [weight, setWeight] = useState(50)
    
    const [bmi, setBmi] = useState(0)
    
    const handelSubmit=(e)=>{
      e.preventDefault();
    }
    const changeHeight = (e) => {
      setHeight(e.target.value)
    }

    const changeWeight = (e) => {
      setWeight(e.target.value);
      
        
    }

    // const changeTenure = (e) => {
    //     setTenure(e.target.value);
    // }
    useEffect(()=>{
    
    var bmi=(weight/(height*height))*10000;
    var b =Math.round(bmi * 100) / 100
    setBmi(b)
    
    },[weight,height])
  return (
    <form class="form">
        <p class="title">BMI Calculator </p>
        
        <div  >
            <span className='m-5'>Weight: </span>
            <input className="font-bold loan-amount-input" type='text' value={`${weight}Kg`}></input>
            <input className='m-5 range' type="range" min="0" max="250" step="0.5" onChange={(e)=>changeWeight(e)} list='values1'></input>
            <datalist id="values1">
              <option value="0" label="0"></option>
              <option value="64.5" label="25"></option>
              <option value="125" label="50"></option>
              <option value="187.5" label="75"></option>
              <option value="250" label="100"></option>
            </datalist>
        </div>
        
        <div  >
            <span className='m-5'>Height: </span>
            <input className="font-bold interest-rate-input" type='text' value={`${height}cm`}></input>
            <input className='m-5 range' type="range" min="0" max="240" step="0.5" onChange={(e)=>changeHeight(e)} list='values2'></input>
            <datalist id="values2">
              <option value="0" label="0"></option>
              <option value="60" label="25"></option>
              <option value="120" label="50"></option>
              <option value="180" label="75"></option>
              <option value="240" label="100"></option>
            </datalist>
        </div>
        
        <div className='emi-details m-3'>
          BMI:<span className='font-bold'> {bmi}</span>
        </div>
        {/* <div className='emi-details m-3'>
          Total Interest Payable:<span className='font-bold'> ₹{pInterest}</span>
        </div>
        <div className='emi-details m-3'>
          Total Amount:<span className='font-bold'> ₹{total}</span>
        </div> */}
    </form>
  )
}

export default EmiCalculator