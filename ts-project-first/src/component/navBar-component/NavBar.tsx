import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import LinksComponent from './router-component/LinksComponent';
import TemporaryDrawer from './toggle-navbar-component/TemporaryDrawer';

export default function NavBar(){
  const [stateNavBar,setSateNavBar] = useState<{
    linkActive : string
  }>({linkActive : '/'})
    return (
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
              <MenuIcon>
                <TemporaryDrawer></TemporaryDrawer>
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
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
    )
}