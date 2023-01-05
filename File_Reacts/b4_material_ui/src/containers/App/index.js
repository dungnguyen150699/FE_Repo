import { Button } from "@material-ui/core";
import { Container,withStyles } from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles"
// import styles from "./styles.js";
import TaskBroads from "../TaskBoard/index.js";
import React, { Component } from 'react'
import theme from "../../common/Theme/index.js";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
    };
  }
  
  render() {
    return (
      // Cai theme nay se nhay vao cais style
      <ThemeProvider theme={theme}> 
        <Container maxWidth="lg">
        {/* <CssBaseline/> */}
          <h3>Material_UI</h3>
          <TaskBroads/>
        </Container>
      </ThemeProvider>
    );
  }
}

export default (App);
