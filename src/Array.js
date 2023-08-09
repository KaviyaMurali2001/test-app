import React from "react";
import {Card} from "@mui/material";
import photo from "./html.png";
import { useState } from "react";
import photo1 from "./css.png";
import photo2 from "./js.webp";
import {Button} from "@mui/material";

function Array(){

 const array = [1,2,3,4,5,6,7,8,9,10]

 
 const[displayFlag , setDisplayFlag] = useState(false)
 const[displayFlagOne , setDisplayFlagOne] = useState(false)
 const[displayFlagTwo , setDisplayFlagTwo] = useState(false)

const displayDiv = (key) => {
  if(key === 1){
      setDisplayFlag(true)
      setDisplayFlagOne(false)
      setDisplayFlagTwo(false)
  }
  else if(key === 2){
      setDisplayFlag(false)
      setDisplayFlagOne(true)
      setDisplayFlagTwo(false)
  }
  else{
      setDisplayFlag(false)
      setDisplayFlagOne(false)
      setDisplayFlagTwo(true)
  }
}
 
    const Card = () => {
        return (
          <>
          <div className="card">
                 {displayFlag && <div>
            <img src = {photo} height={60} width={60}/>
            <h3>HTML refers to HyperText Markup Language</h3>

            </div>}
        {displayFlagOne &&<div>
            <img src = {photo1} height={60} width={60}/>
            <h3>CSS refers to Cascading Style Sheet</h3>
            </div>}
        {displayFlagTwo &&<div>
            <img src = {photo2} height={60} width={60}/>
            <h3>JS is a programming language</h3>
            </div>}  
    
            </div>
            </>
        );
      };
      
    return(
        <>
{array.map(()=><Card variant="outlined"></Card>)}

<div>
<Button variant="outlined" onClick={() =>displayDiv(1)}>Show A</Button>
<Button variant="outlined" onClick={() =>displayDiv(2)}>Show B</Button>
<Button variant="outlined" onClick={() =>displayDiv(3)}>Show C</Button>
</div>


        </>
    )
}
export default Array;