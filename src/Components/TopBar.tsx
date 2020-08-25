import React from 'react';
import { AppBar, Toolbar, IconButton, MenuItem, Typography, createStyles, makeStyles, Theme, Hidden } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

interface IProps {
  handleDrawerToggle: () => void
}

export default function TopBar(props: IProps) {
  const rootStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between'
  }
  return (
    <Hidden mdUp>
      <AppBar position="fixed">
        <Toolbar style={rootStyle}>
          <IconButton onClick={props.handleDrawerToggle}>
            <Menu />
          </IconButton>
          <Typography variant="h6" >
            Yihao Wang's CV
          </Typography>
        </Toolbar>
      </AppBar>
    </Hidden>
  )
}