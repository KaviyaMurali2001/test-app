import React from 'react'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material'
import ReactForms from '../Reactforms'
const Signup =() => {
  return (
    <div style={{ position: "absolute",top: "50%",left: "39%", height:"100px",width:"100px"}}>
   {/* <Card className='inputbox' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 , fontWeight:"bold"}}>
         SignUp Component
        </Typography>
        </CardContent>
        </Card> */}
<ReactForms/>
      </div>
  )
}

export default Signup