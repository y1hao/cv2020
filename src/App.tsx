import React, { useState } from 'react';
import {AppBar, Toolbar, makeStyles, createStyles, Theme } from '@material-ui/core';
import './App.css';
import TopBar from './Components/TopBar';
import NavDrawer from './Components/NavDrawer';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { create } from 'domain';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <div>
      <TopBar
        handleDrawerToggle={handleDrawerToggle}
      />
      <NavDrawer 
        isDrawerOpen={isDrawerOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </div>
  )
}

export default App;
