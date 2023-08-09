import React, { useState } from 'react';
import { Card , CardContent, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import FormValidation from '../FormValidation';


const Details = () => {
  const[data , setData] = useState([])

  const navigate= useNavigate()
  const location=useLocation()
 console.log("location",location.state?.detail)

  const homePage = () =>{
    navigate('/home',{
      state:{detail:data}
    })
  }


 const getLoadData = (data) =>{
   setData(data)

 }

  return (
    <div >
      {/* style={{ position: "absolute",top: "50%",left: "39%", height:"100px",width:"100px"}} */}
      
         <FormValidation  loadData={getLoadData}/>
    {/* <Card className='inputbox' sx={{ minWidth: 275 }}>
       <CardContent>
         <Typography sx={{ fontSize: 20 , fontWeight:"bold" }}>
          Details Component
         </Typography>
         </CardContent>
         </Card> */}
     
     <button onClick={homePage}>Go to home page</button>
       </div>
  )
}

export default Details