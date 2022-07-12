import './Nevbar.css'
import React from 'react'
import Drower from './Drower';

function nevBar({setCatagory}) {
  return (
    <>
        <div className='icon'>
          <Drower setCatagory = {setCatagory}/>
          <img src="https://www.inshorts.com/dist/images/home_page/logo.png" alt="no image" />
        </div>
    </>
  );
}


export default nevBar