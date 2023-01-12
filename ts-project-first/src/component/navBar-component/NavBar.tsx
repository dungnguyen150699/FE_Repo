import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import RoutesComponent from './router-component/RoutesComponent';
import LinksComponent from './router-component/LinksComponent';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function NavBar(){
    return (
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              <MenuIcon />
              </IconButton>
              <Typography 
              variant="h6" 
              component="div" 
              sx={{ flexGrow: 1 }}
              // noWrap={true}
              align="left"
              >
              <LinksComponent></LinksComponent>
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Container>
              <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper>xs=12</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <RoutesComponent/>
              <Paper>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper>xs=6 sm=3</Paper>
            </Grid>
          </Grid>
        </Container>
      </Router>
    )
}