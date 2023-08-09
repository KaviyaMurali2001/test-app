import axios from "axios";
import React, { useEffect, useState } from "react";

function Axios(){
const [data , setData] = useState([])
const loadAirLines = () => {
    let response;
    response = axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
   response.then((res)=> setData(res.data));
    // console.log('data' , response)
}

useEffect(() => {
    loadAirLines()
},[]);
    return(
<div className="border">
<tr>
    <th>Name</th>
    <th>City</th>
</tr>
{ data.map((re)=> <tr>
<td>{re.name}</td>
<td>{re.city}</td>
</tr>)}
</div>
    )
}
export default Axios;