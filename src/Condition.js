import React, { useState } from "react";
import { Button } from "@mui/material";


function Condition(){
    
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
    

    
        <div>Conditonal Rendering</div>

        {displayFlag && <div>A</div>}
        {displayFlagOne &&<div>B</div>}
        {displayFlagTwo &&<div>C</div>}
        
        
        <Button variant="text" onClick={() =>displayDiv(1)}>Show A</Button>
        <Button variant="text" onClick={() =>displayDiv(2)}>Show B</Button>
        <Button variant="text" onClick={() =>displayDiv(3)}>Show C</Button>
      


   
 
        </>
    )
}

export default Condition;