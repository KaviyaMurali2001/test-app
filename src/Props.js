import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <h2>I am a { props.brands }!</h2>;
}

const myElement = <Car brands="Ford" />;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

              export default Car;
              