import React, { useState } from "react";
import pic from './user.jpg'
import EditIcon from './images/edit.svg';
import DeleteIcon from './images/delete.svg';

function ReactForms () {
    const[inputs, setUserInputs]= useState('')
    const[firstName, setFirstName] = useState('')
    const[lastname, setLastName]= useState('')
    const[age,setUserAge] = useState('')
    const[checkbox, setCheckbox]= useState('')
    const[phone, setUserPhone] = useState('')
    

const formSubmit = (e) => {
    e.preventDefault();
    console.log("FirstName", firstName);
    console.log("LastName", lastname)
    console.log("Age",age)
    console.log("PhoneNumber",phone)


}
const checkboxHandler = () =>{
    setCheckbox(!checkbox)
}

const setFocus = () =>{
    document.getElementsByClassName('username')[0].focus()
    
}

const setFocus1 = () =>{
    document.getElementsByClassName('last')[0].focus()
    
}
const setFocus2 = () =>{
    document.getElementsByClassName('phone')[0].focus()
    
}




return(
  
    
        <div id='box'>
        <div className="user">USER LOGIN</div>
<br>
</br>

<img src = {pic} height={40} width={40}/>

<br></br>
<br></br>
        <form onSubmit={formSubmit} className="form">
            <input type="text" placeholder="Firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} name="form" className="username" size={30}></input>
         
            <img src={EditIcon} alt="" onClick={setFocus} height={25} width={25} style={{display: "flex", marginTop:-30, marginLeft:240,cursor: "pointer"}}></img>
           <img src ={DeleteIcon} alt="" height={25} width={25} style={{display: "flex", marginLeft: 210, cursor: "pointer",marginTop: -25}}></img> 
           
         
            <br></br>
            <input type="text" placeholder="Lastname" value={lastname} onChange={(e) => setLastName(e.target.value)} name="form" className="last" size={30}></input>
            
            <img src={EditIcon} alt="" onClick={setFocus1}height={25} width={25} style={{display: "flex", marginTop:-30, marginLeft:240,cursor: "pointer"}}></img>
            <img src ={DeleteIcon} alt="" height={25} width={25} style={{display: "flex", marginLeft: 210, cursor: "pointer",marginTop: -25}}></img> 
        
            <br></br>
            <input type="number" placeholder="Age" value={age} onChange={(e) => setUserAge(e.target.value)} className="age" size={30}></input>
            <br></br>
            <br></br>
            <input type="text" placeholder="PhoneNumber" value={phone} OnChange={(e) => setUserPhone(e.target.value)}  name ="form" className="phone" size={30}></input>
          
            <img src={EditIcon} alt="" onClick={setFocus2} height={25} width={25} style={{display: "flex", marginTop:-30, marginLeft:240,cursor: "pointer"}}></img>
           
         <img src ={DeleteIcon} alt=""  height={25} width={25} style={{display: "flex", marginLeft: 210, cursor: "pointer",marginTop: -25}}></img> 
<br></br>

<div className="remember">
           <input type="checkbox" checked={checkbox} onChange={checkboxHandler}></input>
           <label>Remember me</label>
           <br></br>
           <br></br>
           
            <input type="submit" className="button" value={"LOG IN"}></input>
            
            </div>
        </form>

        </div>
      
        
        
        
        
                
        

        

    )
}

export default ReactForms;
