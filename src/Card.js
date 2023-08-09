import React from "react";
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { startTransition } from "react";


const array = [1,2,3,4,5,6,7,8,9,10]
const bear = (
    
    <Box sx={{display:'inline-block', mx:'10px'}}>

     </Box>
     
)

const card = (
    <>
        <CardContent>
            <Typography sx= {{fontsize: 14}} color = 'pink' gutterBottom>
                Word of the day
            </Typography>

            <Typography variant ="h5">
                ka{bear}vi{bear}ya{bear}.M
            </Typography>

            <Typography style={{fontsize: 14}} color = 'blue'>
               name
            </Typography>

          <Typography variant="body2">
            Meaning of the name is poem.
            <br/>
            {'"a benevolent smile"'}
          </Typography>
<br/>
<br/>
          <CardActions>
            <Button size ="small">Learn More</Button>
          </CardActions>
        </CardContent>
    </>
)



export default function OutlinedCard (){
    return(
        <Box style={{maxWidth: 275 , display:"inline-start" }}>
            <br/>
            {array.map(()=><Card variant = "outlined">{card}</Card>)}
        </Box>

    )
}