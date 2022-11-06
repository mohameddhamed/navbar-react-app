import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Pricing from "./Pricing";
import {Routes,Route} from 'react-router-dom'


function App() {

  return (
    <>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
      </Routes>
    
    </>
  );
}

export default App;
