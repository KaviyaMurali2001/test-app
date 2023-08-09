import React, { useState } from 'react'
import './App.css';
import pic from './user.jpg'
import EditIcon from './images/edit.svg'



function Jsx() {



  const [pageFlag, setUserFlag] = useState(0);

const formSubmit = (e)=> {

  e.preventDefault();

  setUserFlag(pageFlag + 1);
}
  const setFocus = (key) =>{
    document.getElementsByName(key)[0].focus()
  

 

}

  

const inputField = [

  {

    type:"text",

    name:"firstname",

    placeholder:"Firstname",



  },

  {

    type:"text",

    name:"lastname",

    placeholder:"Lastname"

  },

  {

    type:"number",

    name:"age",

    placeholder:"Age"

  },

  {

    type:"number",

    name:"phonenumber",

    placeholder:"Phonenumber"

  }

]

return(

  <div>

    {pageFlag === 0 &&

    <div className='outer-box'>

<br/>

{

  inputField.map((k) =>

  <>

  <br/>

  <br/>

  <input type={k.type} name={k.name} placeholder={k.placeholder}></input>
  {k.name!== "lastname" && <img src={EditIcon} height={20} width={20} 
onClick={()=> setFocus(k.name)} style={{cursor:"pointer"}}></img>}

  </>

  )

}

<button onClick={formSubmit}>Login</button>
</div>}
{

  pageFlag === 1 && <div>
    <p>Hey</p></div>


}

    

  </div>

)

}

export default Jsx;