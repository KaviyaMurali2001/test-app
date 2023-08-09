import React from 'react'
import {Card , CardContent,Typography} from '@mui/material';
import { useLocation } from 'react-router-dom';

const About =() => {


  return (
    <div style={{ position: "absolute",top: "50%",left: "39%", height:"100px",width:"100px"}}>
   <Card className='inputbox' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 , fontWeight:"bold" }}>
         About Component
        </Typography>
        </CardContent>
        </Card>
      
      </div>
  )
}

export default About