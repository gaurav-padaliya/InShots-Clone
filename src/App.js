import './App.css';
import React, { useState , useEffect } from 'react';
// import ReactDOM from 'react-dom';
import Nevbar from './component/nevBar';
import axios from 'axios';
import  NewsCont from './component/newsComp/NewsCont'
import Footer from './component/Footer.js'
function App() {
  const [catagory, setCatagory] = useState("general");
  const [newsApi, setNewsApi] = useState([]);
  const [newsRes, setNewsRes] = useState();
  const [loadmore, setLoadmore] = useState(20);
  const getApi = async ()=>{
    try{
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${catagory}&pageSize=${loadmore}&apiKey=95082c1e818d4654bc406f1a84aece42`);
      // res.then(res => {
        setNewsApi([...res.data.articles]);
        setNewsRes(res.data.totalResults)
        // console.log(newsApi);  
      // })
    }catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getApi();
  }, [catagory,newsRes,loadmore])
  
  return (
    <div className="App">
      
        <Nevbar setCatagory = {setCatagory}/>
        <NewsCont newsApi = {newsApi }loadmore = { loadmore} newsRes = {newsRes} setLoadmore = {setLoadmore} />
        <Footer/>
    </div>
    
  );
}

export default App;
