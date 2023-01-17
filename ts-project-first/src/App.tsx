import React, { useEffect } from 'react';
import './App.css';
import NavBar from './component/navBar-component/NavBar';
import RoutesComponent from './component/navBar-component/router-component/RoutesComponent';
import { BrowserRouter as Router,
  useNavigate
} from 'react-router-dom';
import { ACCESS_TOKEN } from './constant';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
      navigate("/login")
    } else {
      navigate("/")
    }
  }, [])
  // console.log(localStorage.getItem(ACCESS_TOKEN))
  return (

    <div className="App">
        {localStorage.getItem(ACCESS_TOKEN) ? <NavBar/> : ''}
        <RoutesComponent/>
    </div>
  );
}

export default App;
