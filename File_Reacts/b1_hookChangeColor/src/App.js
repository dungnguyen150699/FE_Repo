import React,{ useState,useEffect } from 'react';
import BlockColor from './BlockColor';

function App() {
var [color,setColor] = useState('pink');
  function changeColor(nameColor){
    setColor(nameColor);
  }

  return (
    <div className="App">
      <BlockColor color={color}/>
      <button onClick={()=>changeColor("blue")}>blue</button>
      &nbsp;
      <button onClick={()=>changeColor("pink")}>pink</button>
    </div>
  );
}

export default App;
