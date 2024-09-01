import React,{useState,useEffect,useRef,createRef} from "react"
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import Modal from '../Modal/Modal'
import './Navbar.css';

import man from '../../pics/man.png';
import cooperation from '../../pics/cooperation.png';

import logo from '../../pics/logo2.png';

const Navbar = ({items}) => {
    const [dropDown, setDropDown] = useState(false)
    const [showNavbar, setShowNavbar] = useState(false)
    // const [width, setWidth] = useState(window.innerWidth);
    // const navWidth=()=> {
    //   if (window.scrollX>= 870) {
    //       setWidth(true);
    //   } 
      
    // }

    const handelDropDown = ()=>{
      setDropDown(!dropDown);
    }
    const handelNavbar = () => {
        setShowNavbar(!showNavbar) 
    }
    // window.addEventListener("onchange", navWidth);
    return (
        <>
        
        <div className="navbar sticky top-0 z-10 bg-slate-100  flex justify-around items-center">
          <div className="company-logo  "><img className="logo-img" src={logo}></img></div>
          
          <div className="menu flex justify-around items-center">
            
            <a href="/"><div className="navlink font-bold">Home</div></a>

            {/* <div>
            <Popover>
          <PopoverButton onClick={handelDropDown} className="block font-bold navlink focus:outline-none data-[active]:text-black data-[hover]:text-black data-[focus]:outline-1 data-[focus]:outline-black">
            Services <span className="text-lg ">{dropDown ? "▴":"▾"  }</span>
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className={showNavbar? "mt-20 divide-y divide-black/5 rounded-xl bg-white shadow-2xl text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0":"divide-y divide-black/5 rounded-xl bg-white shadow-2xl text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"}
          >
            <div className="p-3 dropdown">
              <a onClick={handelDropDown} className="block shadow rounded-lg py-2 px-3 transition hover:bg-black/5" href="/Services/HomeLoan">
                
                <div className="font-semibold text-black"><img className="house-pic" src={house}></img>Home Loan</div>
                <span className="text-black/50">Learn more about home loan</span>
              </a>
              <a onClick={handelDropDown} className="block shadow rounded-lg py-2 px-3 transition hover:bg-black/5" href="/Services/PersonalLoan">
                <div className="font-semibold text-black"><img className="house-pic" src={man}></img>Personal Loan</div>
                <span className="text-black/50">Learn more about Personal loan</span>
              </a>
              <a onClick={handelDropDown} className="block shadow rounded-lg py-2 px-3 transition hover:bg-black/5" href="/Services/BusinessLoan">
                <div className="font-semibold text-black"><img className="house-pic" src={cooperation}></img>Business Loan</div>
                <span className="text-black/50">Learn more about Business loan</span>
              </a>
              <a onClick={handelDropDown} className="block shadow rounded-lg py-2 px-3 transition hover:bg-black/5" href="/Services/EducationLoan">
                <div className="font-semibold text-black"><img className="house-pic" src={graduation}></img>Education Loan</div>
                <span className="text-black/50">Learn more about Education loan</span>
              </a>
              <a onClick={handelDropDown} className="block shadow rounded-lg py-2 px-3 transition hover:bg-black/5" href="/Services/CarLoan">
                <div className="font-semibold text-black"><img className="house-pic" src={car}></img>Car Loan</div>
                <span className="text-black/50">Learn more about Car loan</span>
              </a>
              <a onClick={handelDropDown} className="block shadow rounded-lg py-2 px-3 transition hover:bg-black/5" href="/Services/Lap">
                <div className="font-semibold text-black"><img className="house-pic" src={property}></img>Loan Against Property</div>
                <span className="text-black/50">Learn more about Loan Against Property</span>
              </a>
            </div>
            
          </PopoverPanel>
        </Popover>
            </div> */}
            <a href="/Dashboard"><div className="navlink font-bold">
            Dashboard
            </div></a>
            <a href="/invoice"><div className="navlink font-bold">
            Invoice
            </div></a>
            <a href="/ContactUs"><div className="navlink font-bold">
            Contact Us
            </div></a>
           
          </div>
          <div className="cal-emi ">
            <Modal/>
          </div>
          <label className="burger" for="burger">
          <input onClick={handelNavbar} type="checkbox" id="burger"/>
          <span></span>
          <span></span>
          <span></span>
        </label>  
        </div>
        
        <div className={showNavbar?"small-nav p-5 bg-slate-100 sticky top-12 shadow-xl z-10 translate-x-0":"hidden"}>
        <div className="  ">
            
            <a href="/"><div className="navlink font-bold">Home</div></a>

            {/* <div>
            <Popover>
          <PopoverButton onClick={handelDropDown} className="block font-bold navlink focus:outline-none data-[active]:text-black data-[hover]:text-black data-[focus]:outline-1 data-[focus]:outline-black">
            Services <span className="text-lg ">{dropDown ? "▴":"▾"  }</span>
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className={showNavbar? "mt-10 z-20 w-3/4 divide-y divide-black/5 rounded-xl bg-white shadow-2xl text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0":"divide-y divide-black/5 rounded-xl bg-white shadow-2xl text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"}
          >
            <div className="p-3 dropdown">
              <a onClick={handelDropDown} className="block shadow rounded-lg py-2 px-3 transition hover:bg-black/5" href="/Services/HomeLoan">
                
                <div className="font-semibold text-black"><img className="house-pic" ></img>Home Loan</div>
                <span className="text-black/50">Learn more about home loan</span>
              </a>
              <a onClick={handelDropDown} className="block shadow rounded-lg py-2 px-3 transition hover:bg-black/5" href="/Services/PersonalLoan">
                <div className="font-semibold text-black"><img className="house-pic" ></img>Personal Loan</div>
                <span className="text-black/50">Learn more about Personal loan</span>
              </a>
              <a onClick={handelDropDown} className="block shadow rounded-lg py-2 px-3 transition hover:bg-black/5" href="/Services/BusinessLoan">
                <div className="font-semibold text-black"><img className="house-pic" src={cooperation}></img>Business Loan</div>
                <span className="text-black/50">Learn more about Business loan</span>
              </a>
              <a onClick={handelDropDown} className="block shadow rounded-lg py-2 px-3 transition hover:bg-black/5" href="/Services/EducationLoan">
                <div className="font-semibold text-black"><img className="house-pic" src={graduation}></img>Education Loan</div>
                <span className="text-black/50">Learn more about Education loan</span>
              </a>
              <a onClick={handelDropDown} className="block shadow rounded-lg py-2 px-3 transition hover:bg-black/5" href="/Services/CarLoan">
                <div className="font-semibold text-black"><img className="house-pic" src={car}></img>Car Loan</div>
                <span className="text-black/50">Learn more about Car loan</span>
              </a>
              <a onClick={handelDropDown} className="block shadow rounded-lg py-2 px-3 transition hover:bg-black/5" href="/Services/Lap">
                <div className="font-semibold text-black"><img className="house-pic" src={property}></img>Loan Against Property</div>
                <span className="text-black/50">Learn more about Loan Against Property</span>
              </a>
            </div>
            
          </PopoverPanel>
        </Popover>
            </div> */}

            <a href="/ContactUs"><div className="navlink font-bold">
            Contact Us
            </div></a>
           
          </div>
          

          <div className="small-emi-cal"><Modal/></div>
          
        </div>
  
        
        </>
    )
  
} 
export default Navbar