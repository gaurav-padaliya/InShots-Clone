import { faDisplay } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './Footer.css'
// import FontAwesomeIcon from '@fortawesome/FontAwesomeIcon'
const Footer = () => {
  return (
    <footer className='ftr'>
        <div className='first'>
            <img style = {{width:"160px" , height:"48px"}} src="https://assets.inshorts.com/website_assets/images/logo_footer.png"/>
            <span>
            <span style={{fontWeight:700}}> inshorts </span>
                Pte. Ltd.
            <div></div>
            <span style={{fontSize:"12px"}}>
            ©COPYRIGHT 2022</span>
            </span>
        </div>
        <div className='sec' >
            <div style={{marginTop:"-5px"}}><img style = {{width:"132px" , height:"48px"}} src="https://assets.inshorts.com/website_assets/images/contact_icon.png"/></div>              
            <div className="terms-text">
                <a style={{color: "#fff"}} ><span>Terms &amp; conditions</span><br/>
                    <span>Privacy Policies</span>
                </a>
            </div>
        </div>
        <div className="socialIcon">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-twitter"></i>
        </div>
    </footer>
  )
}

export default Footer