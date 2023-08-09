import React, { useState , useEffect } from 'react';

import './App.css';


function Effect(){
    const [resourceType , setResourceType] = useState('');
   console.log('render')
    useEffect(() =>{
console.log('resource type changed')
    })
    
    return(
        <>
<div>
    <button onClick={() => setResourceType('posts')}>Posts</button>
    <button onClick={() => setResourceType('users')}>Users</button>
    <button onClick={() => setResourceType('comments')}>Comments</button>
</div>
<h1>{resourceType}</h1>
</>
    )
}

export default Effect;