import React from 'react';
import './App.css';
import NavBar from './component/navBar-component/NavBar';
import RoutesComponent from './component/navBar-component/router-component/RoutesComponent';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
// let name:String = "NTD";
// let age:number = 20;
// let sleep:boolean=false;
// let arr:string[] = ['project1','project2'];
// arr[0] = '12';
// let typer:any = 'any type';
/**
 * C1 
    type Student = {
      name : String,
      age : number
    };
    let student : Student ={
      name : 'dungnt',
      age : 21
    };

    C2
    let student : {
      name : string,
      age : number
    } = {
      name : 'dungnt',
      age : number
    }
*/
function App() {
  if(!localStorage.getItem('user')) return (
    <div className='App'>
      <Lo
    </div>
  )

  return (
    <div className="App">
       <Router>
        <NavBar/>
        <RoutesComponent/>
      </Router>
    </div>
  );
}

export default App;
