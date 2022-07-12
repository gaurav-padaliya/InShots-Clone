import React from "react";
import './newsElem.css'

const NewsElem = ({val}) => {
  {
    var a = new Date(val.publishedAt)
    var d = a.toString().split(" ");
    if(val.urlToImage === null){
      val.urlToImage ='https://picsum.photos/200'
    }
  } 
  const routeChange = () =>{
    let path = `${val.url}`; 
    window.location.href = path;
  }
  return (
    <div className="container">
       
      <div style={{
        // background: 'url("https://cdn.codechef.com/images/cc-logo.svg")',
        background:`url('${val.urlToImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: '50%'
      }} className="image1">
      </div>
      <div style={{ textAlign: 'left' ,color: 'gray'}}>
        <span className="headline">
            {
            val.title
          }
        </span>
        <div className="date-time" style={{fontSize:'13px' , padding: '5px 0px'}} >
         {/* by Shreyasi Banerjee / 11:07 pm on 25 Jun 2022,Saturday */}
            <span style={{fontWeight:600}} >short</span>
            <span> by {val.author} /</span>
            <span>{d.map((val,ind)=>{
              if(ind <= 4)
              return val+" "
            })}</span>
        </div>
        <div className="content">
        {
           val.description
        }
        </div>
        <div className="footer1">
          <span>read more at </span>
          <span style={{fontWeight:600}} onClick = {routeChange}>{val.source.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsElem;
