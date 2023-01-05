import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Component/Navbar";
import CRoutes from "./Component/CRoutes";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <br></br>
      <div className="container">
          <CRoutes/>
      </div>
    </Router>
  );
}
export default App;