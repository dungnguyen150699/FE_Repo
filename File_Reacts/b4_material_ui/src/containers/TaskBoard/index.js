import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import { Button } from '@material-ui/core';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Grid from '@material-ui/core/Grid';
import styles from "./styles.js"

class TaskBoard extends Component {
    constructor(props){
        super(props);
        this.Grids = this.Grids.bind(this);
    }
    
    Grids() {
        return(
            <Grid container spacing={1}>
                <Grid item md={4} xs={12}>READY</Grid>
                <Grid item md={4} xs={12}>IN PROGESS</Grid>
                <Grid item md={4} xs={12}>COMPLETED</Grid>
            </Grid>
        )
    }

    render() {
        const { classes } = this.props;
        return (
        <div className={classes.taskBoard}>
            <Button variant="contained" color="primary" className={classes.shape}><AddCircleIcon/> Add New Task</Button>
            {this.Grids()}
        </div>
        )
    }
}

export default withStyles(styles)(TaskBoard)