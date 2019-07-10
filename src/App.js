import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Title from './Title';
import Description from './Description';
import Image from './Image';
import Date from './Date';

function App() {
  const [nasaData, setNasaData] = useState([]);
  // const [query, setQuery] = useState("corgi");

  const fetchImage = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-03-15')
    .then(res => {
      console.log(res.data);
      setNasaData(res.data);
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="App">      
      <div className="images">
        <Title data={nasaData} />
        <Description data={nasaData} />
        <Image data={nasaData} />
        <Date data={nasaData} />         
      </div>
    </div>
  );
}

export default App;
