import React from 'react';
import { AppBar, Toolbar, IconButton, MenuItem, Typography, createStyles, makeStyles, Theme, Hidden } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

interface IProps {
  handleDrawerToggle: () => void
}

export default function TopBar(props: IProps) {
  return (
    <Hidden smUp>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton onClick={props.handleDrawerToggle}>
            <Menu />
          </IconButton>
          <Typography variant="h4">
            Placeholder
          </Typography>
        </Toolbar>
      </AppBar>
    </Hidden>
  )
}