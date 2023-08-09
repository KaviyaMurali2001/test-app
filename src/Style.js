import React, { useState } from "react";
import { Button } from "@mui/material";
import './App.css';
import photo from './html.png';
import photo1 from './css.png';
import photo2 from './js.webp';

function Style(){

 
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

   
      

    return(
   
        <>
 <div className="card">
          {displayFlag && <div>
            <img src = {photo} height={40} width={40}/>
            <h3>HTML refers to HyperText Markup Language</h3>

            </div>}
        {displayFlagOne &&<div>
            <img src = {photo1} height={50} width={50}/>
            <h3>CSS refers to Cascading Style Sheet</h3>
            </div>}
        {displayFlagTwo &&<div>
            <img src = {photo2} height={50} width={50}/>
            <h3>JS is a programming language</h3>
            </div>}  
            
 </div>
<div>
<Button variant="outlined" onClick={() =>displayDiv(1)}>Show A</Button>
<Button variant="outlined" onClick={() =>displayDiv(2)}>Show B</Button>
<Button variant="outlined" onClick={() =>displayDiv(3)}>Show C</Button>
</div>


</>

    )
}

export default Style;