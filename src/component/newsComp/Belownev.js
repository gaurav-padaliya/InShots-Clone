import React from 'react'
import './belownev.css'
const belownev = () => {
  return (
    <div className='bar'>
      <div style={{color: '#fff' }}>
        <span>For the best experience use</span>
        <span style={{fontWeight:700}}> inshorts</span>
        <span> app on your smartphone</span>
      </div>
      <div className='image'>
        <img style={{ marginLeft: 50 ,width :100 ,height : 35 }} src="https://assets.inshorts.com/website_assets/images/appstore.png" />
        <img style={{width :100 ,height : 35 }} src="https://assets.inshorts.com/website_assets/images/playstore.png"/>
      </div>
    </div>
  )
}

export default belownev