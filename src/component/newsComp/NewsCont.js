import React from 'react'
import Container from '@mui/material/Container';
import Belownev from './Belownev';
import NewsElem from './NewsElem';
import { Button } from '@mui/material';
const NewsCont = ({newsApi, loadmore ,newsRes,setLoadmore}) => {
  // const val = 
  {
    // console.log(newsApi);
  }
  return (
    <Container maxWidth="md">
       <Belownev/>
       {
        newsApi.map((val) => (
          <NewsElem val = {val} key={val.title}/>
        ))
      }
      {
        loadmore < newsRes &&(
          <Button variant="outlined" style= {{margin:"20px auto"}} onClick = {() =>{setLoadmore(loadmore + 20)}}>load more</Button>
        )
      }
    </Container>
  )
}

export default NewsCont