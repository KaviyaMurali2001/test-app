import React from 'react';
import './App.css';
// import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navigationbar = ()=> {
  return (
<>
<div>
  
    
       {/* <nav> */}
    <ul style={{backgroundColor:"white",height:"39px",width:"1104px",display:"inline-flex", borderRadius: "30px", paddingRight: "384px",marginTop: "28px",paddingBottom:"5px",paddingLeft: "25px",columnGap: "25px",paddingTop: "17px",listStyle:"none"}}>
        <li className='list'><Link to = '/home'>Home</Link></li>
        <li className='list'><Link to ='/about'>About</Link></li>
        <li className='list'><Link to='/details'>Details</Link></li>
        <li className='list'><Link to = '/signup'>Signup</Link></li>
        {/* <li className='list'><a href="/Signup">Sign Up</a></li> */}
        
        </ul>
      
      {/* </nav>   */}
      {/* <Outlet /> */}
    
</div>
</>
  )
}

export default Navigationbar;
