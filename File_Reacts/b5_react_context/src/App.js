import React, { Component } from 'react'
import C1 from './Component/C1.js'
import C2 from './Component/C2.js';
export const context = React.createContext("this is C1 value");

class App extends Component {
  render() {
    return (
      <div>
        <context.Provider value={"this is C1 value modify"}>
          <C1/>
        </context.Provider>
          <span>if not have context Provider value is default value when declare createContext <br/> (manual react give state to ReactContext)</span>
          <C2/>
      </div>
      )
  }
}


export default App;
