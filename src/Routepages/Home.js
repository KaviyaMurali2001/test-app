import React from 'react'
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom';


const Home= () =>{
  const newpage=useNavigate()

  const data = useLocation()
  console.log("data",data)

  const nextPage = () =>{
    newpage('/details' ,{
      state:{
        detail:"Hello"}
    })

    
  }
  return (
    
    <div style={{ position: "absolute",top: "50%",left: "39%", height:"100px",width:"100px"}} >
    <Card className='inputbox' sx={{ minWidth: 275 }}>
       <CardContent>
         <Typography sx={{ fontSize: 20 , fontWeight:"bold"}}>
      Home Component
         </Typography>
         </CardContent>
         </Card>
         <button onClick={nextPage} >Next page</button>
         <div>
       
         </div>
        
       

   
  </div>

 

      
    
  )
  }

export default Home;