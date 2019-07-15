import axios from 'axios';
import React, { useEffect, useState } from "react";
import Description from './components/Description';
import Content from './components/Content';
import Title from './components/Title';
import Date from './components/Date';
import "./App.css";


function App() {
  const [nasaData, setNasaData] = useState([]);

  const fetchImage = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
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
        <Date data={nasaData} />         
        <Content  data={nasaData} />
        {/* https://api.nasa.gov/images/apod.jpg   for when server is not working can use this direct link */}
        <Description data={nasaData} />
      </div>
    </div>
  );
}
export default App;
