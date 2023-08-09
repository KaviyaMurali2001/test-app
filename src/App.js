// import logo from './logo.svg';
// import { Component } from 'react';
import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Reactforms from './Reactforms';
// // import Props from './Props'
// import React,{useState} from 'react';
// import UseState from './UseState';
// import UseEffect from './UseEffect';
// import UseRef from './UseRef';
// import UseContext from './UseContext';
import Condition from './Condition';
import Axios from './Axios';
import Style from './Style';
import Array from './Array'
import OutlinedCard from './Card';
import FormValidation from "./FormValidation";
import Jsx from './Jsx';
import Navigationbar from './Navigation bar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routepages/Home';
import About from './Routepages/About';
import Details from './Routepages/Details';
import Signup from './Routepages/Signup';

import ReactForms from './Reactforms';
function App(){
return(
  <div className='App'>
    {/* <ReactForms/> */}
   
    
    {/* <UseState/>
    <UseEffect/>
    <UseRef/>
    <UseContext/> */}
    {/* <Axios/>
    <Condition/> */} 
    {/* <Array/> */}
  {/* <Style/>
  <OutlinedCard/> */}
 
  {/* <FormValidation/> */}
  {/* <Html/> */}
  {/* <Jsx/> */}
<BrowserRouter>
<Navigationbar />
<Routes>
<Route path="home" element={<Home />}></Route>
<Route path="about" element={<About />}></Route>
<Route path="details" element={<Details />}></Route>
<Route path="signup" element={<Signup />}></Route>
</Routes>
</BrowserRouter>


 


  </div>
)
}
export default App;