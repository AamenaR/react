import React from 'react'
import { Routes,Route,Link } from 'react-router-dom';
import About from './About';
import About1 from './About1';
import About2 from './About2';
import Home from './Home';

function Rounnter() {
  return (

    <div className='App'>
        <Link to="/home" target="_blank">HOME</Link> 
        <Link to="/About" target="_blank">ABOUT</Link>


      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}>
          <Route path='About1' element={<About1/>}></Route>
          <Route path='About2' element={<About2/>}></Route>




































































































































          
        </Route>
      </Routes>
    </div>
  )
}

export default Rounnter;
