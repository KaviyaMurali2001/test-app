import React, { useEffect, useState } from 'react'
import './App.css';
import pic from './user.jpg'
import EditIcon from './images/edit.svg'
import axios from 'axios';
import { Card, CardContent, Typography , TextField } from '@mui/material';
import search from './images/search-svgrepo-com.svg';

const FormValidation =(props) => {

  const[userName,setUserName] = useState()

  const [pageFlag, setUserFlag] = useState(0);
  const[userValues , setUserValues] = useState({})
const[resultArray , setResultArray] = useState([]);


const[postData, setPostData] = useState([])
const[searchValue, setSearchValue]= useState()
const[searchData, setSearchData] = useState()

const setFocus = (key) =>{
    document.getElementsByName(key)[0].focus()
  }
const formSubmit = (e)=> {
  // e.preventDefault();
  // e.preventDefault();
  // console.log("userName",userValues);
  setUserFlag(pageFlag + 1);
  setResultArray([...resultArray, userValues]);

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
// const prevPage = () => {
//   setUserFlag(pageFlag-1);
// }

console.log("resultArray", resultArray)
const setInputName = (e) => {
  setUserValues({...userValues, [e.target.name] : e.target.value})
  // setUserName(e.target.value)
  
  
}

const loadPosts = () => {
  let response= axios.get('https://jsonplaceholder.typicode.com/posts/')
  response.then((r)=> {
    if(r.data){
     setSearchData(r.data)
    setPostData(r.data)
    props.loadData(r.data)
    }}
  )
}


useEffect(() => {
  loadPosts();
},[])

const searchById = (e) =>{
  if(e.target.value !== ''){
  let resultData = searchData.filter((k) => k['id'] === Number(e.target.value));
    setPostData(resultData)
  }else{
    setPostData(searchData)
  }
}
return(
  <>
  {/* <input placeholder='Search' value={searchValue} onChange={searchById} style={{marginTop:"25px"}}></input> */}
  <TextField label="Search" value={searchValue} onChange={searchById} style={{marginTop:"25px"}}variant="outlined" />
  <img src={search} alt=""height={20} width={20} style={{display: "flex", marginTop:-40 , marginLeft:840, cursor:"pointer"}}></img>
 <linearGradient color={["red" ,"pink"]}>

 </linearGradient>
 
  <Card variant="outlined" className='gradient-box' style={{margin:"50px", paddingTop:"30px",}}>
    {/* <CardContent>
      <Typography sx={{flexDirection:"row"}}> */}
{
  postData.map((data) =>
  <div className="gradient"style={{ height:100, width:200,boxShadow:"0px 5px 5px",display:'inline-flex', overflow:"auto",marginRight:"20px",marginTop:"25px", marginBottom:"50px" ,flexDirection:'row',flexWrap:'wrap',textAlign:"left", padding:"20px"}}>
   <div><label style={{fontWeight:"bold"}}>ID:</label> 
   {data.id}</div>
   
   <div><label style={{fontWeight:"bold"}}>Title:</label>
   {data.title}</div>
  </div>)
}
      {/* </Typography>
    </CardContent> */}

{/* <div>
 <div style={{display:"flex", flexWrap:"wrap", flexDirection:"row", textAlign:"inherit", columnGap:"30px"}}>
  {postData.map((data) =><div style={{width:210 , height:250, boxShadow:"0px 2px 2px" , }}>
  <h3>ID</h3><div>{data.id}</div>
    <h3>Title</h3><div>{data.title}</div>
    
  </div>)}
  </div>
</div> */}
  </Card>
  {/* <div>
    {pageFlag === 0 &&
    <div className='outer-box'>
<br/>
<img src={pic} height={50} width={50}/>
{
  inputField.map((k) =>
  <>
  <br/>
  <br/>
  <input type={k.type} name={k.name} placeholder={k.placeholder} onChange={(e) => setInputName(e)}></input>
    {k.name!== "lastname" && <img src={EditIcon} height={20} width={20} 
onClick={()=> setFocus(k.name)} style={{cursor:"pointer"}}></img>}
  
  </>
  )
}
<button onClick={formSubmit}>Login</button>
</div>}
{
  pageFlag === 1 && <div>
    <p>Hello</p>
    <button onClick={prevPage}>Back</button>
    <table>
    {
     resultArray?.map((k) => 
     <>
     <tr>
     <th>FirstName</th>
     <th>LastName</th>
     <th>Age</th>
     <th>PhoneNumber</th>

   </tr>
   <tr>
    <td>{k.firstname}</td>
    <td>{k.lastname}</td>
    <td>{k.age}</td>
    <td>{k.phonenumber}</td>
    
    

   </tr>
      </>
    
        
  
         
        
     )}
     
     </table>
    </div>} */}
    

    
    
  {/* </div> */}
  </>
)
}
export default FormValidation;

