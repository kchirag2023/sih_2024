import React from 'react'
import './Button3.css'
const Button3 = () => {
  return (
    <>
    <button className="learn-more button3">
        <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
        </span>
        <a href='/ContactUs'><span className="button3-text">Apply Now</span></a>
    </button>
    </>
  )
}

export default Button3