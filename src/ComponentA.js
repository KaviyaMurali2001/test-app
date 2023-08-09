// ComponentA.js

import React from 'react';

const ComponentA = () => {
  const handleClick = () => {
    const data = 'Hello from Component A';
    localStorage.setItem('myData', data);
  };

  return (
    <div>
      <h1>Component A</h1>
      <button onClick={handleClick}>Set Data</button>
    </div>
  );
};

export default ComponentA;
