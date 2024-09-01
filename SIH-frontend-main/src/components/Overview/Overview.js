import React from 'react'
import './Overview.css'
import Button3 from '../Button3/Button3'



const Overview = ({data}) => {
  return (
    <>
    <div className='overview bg-slate-200'>
        <div className='overview-title'>{data.title}</div><br/>
    
    <div className='overview-content'>{data.content} </div><br/>
    <div  className='overview-about'>{data.about}</div>
    </div>

    <div className='type-of-loan'>
        <div className='type-of-loan-title'>{data.typeTitle}</div><br/>
        <div>
            {data.homeloanPoint.map((e)=><><p><span className='font-bold'>{e.a}</span> {e.b}</p><br/></>)}     
        </div>

    </div>

    <div className='eligibility bg-slate-200'>
        <div className='eligibility-title'>Eligibility criteria for {data.title}</div><br/>
        <div>
            {data.criteriaBullet.map((e)=><><p><span className='font-bold'>{e.a}</span> {e.b}</p><br/></>)}
        </div>
    </div>
    <div className='tips'>
        <div className='tips-title'>Tips for getting a Loan in Delhi</div><br/>
        <div>
        <p><span className='font-bold'> {data.tipsBullet.bullet1} </span>{data.tips.tip1}</p><br/>
        <p><span className='font-bold'> {data.tipsBullet.bullet2} </span>{data.tips.tip2}</p><br/>
        <p><span className='font-bold'> {data.tipsBullet.bullet3} </span>{data.tips.tip3}</p><br/>
        <p><span className='font-bold'> {data.tipsBullet.bullet4} </span>{data.tips.tip4}</p><br/>
        </div>
    </div>
    <div className='flex justify-end m-5'><Button3/></div>
    </>
  )
}

export default Overview