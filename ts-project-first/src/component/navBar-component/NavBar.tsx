import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import LinksComponent from './router-component/LinksComponent';
import { Link } from 'react-router-dom';
import * as React from 'react';

export default function NavBar(){
  const [stateNavBar,setSateNavBar] = useState<{
    linkActive : string
  }>({linkActive : '/'})
    return (
        <Box sx={{ flexGrow: 1 }} className="navBar">
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              <MenuIcon>
              </MenuIcon>
              </IconButton>
              <Typography 
              variant="h6" 
              component="div" 
              sx={{ flexGrow: 1 }}
              align="left"
              >
              <LinksComponent></LinksComponent>
              </Typography>
              <Button color="inherit">
                <Link to="/login">
                  Login
                </Link>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
    )
}