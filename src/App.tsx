import React, { useState } from 'react';
import {AppBar, Toolbar, makeStyles, createStyles, Theme } from '@material-ui/core';
import './App.css';
import TopBar from './Components/TopBar';
import NavDrawer from './Components/NavDrawer';
import Content from './Components/Content';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <div>
      <TopBar
        handleDrawerToggle={handleDrawerToggle}
      />
      <div>
        <NavDrawer 
          isDrawerOpen={isDrawerOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Content/>
      </div>
    </div>
  )
}

export default App;
