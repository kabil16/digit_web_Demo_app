import axios from 'axios';
import './App.css';
import Card from './components/Card';
import React, {useEffect,useState } from 'react';
// import Samplt from './components/Samplt';
// import StyleCom from './components/StyleCom';
//import Home from './components/Home';


function App() {
  useEffect(() => {
    fetchApi()    
  }, []);

  const [dcimg, setDcimg] = useState([]);
  const [dcoder_id, setDcoder_id] = useState([]);
  const [dsku, setDsku] = useState([]);
  

  const fetchApi = async() =>{
    try {
      const response = await axios.get("http://localhost:5000/user/post")
      const ddata = response.data.data;
      
      ddata.forEach(element => {
        
        const cimg = element.image_from_ship;
        const coder_id = element.orderID;
        const sku = element.name;
        setDcimg(cimg)
        setDcoder_id(coder_id)
        setDsku(sku)
        console.log(cimg);
        console.log(coder_id);
        console.log(sku);

      });
      
    } catch (error) {
      
    }

  }

  return (
    <>
    <Card  image={dcimg} did={dcoder_id} disku={dsku}/>      
    </>
  );
}

export default App;
