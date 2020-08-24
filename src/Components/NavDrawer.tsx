import React from 'react';
import { Drawer, Hidden, Theme, createStyles, makeStyles, List, ListItem, Link } from '@material-ui/core';
import Nav from './Nav';

interface IProps {
  isDrawerOpen: boolean,
  handleDrawerToggle: () => void
}

export default function NavDrawer(props: IProps) {
  const classes = makeStyles((theme: Theme) => 
    createStyles({
      drawerPaperSm: {
        width: '80%',
        backgroundColor: theme.palette.primary.main,
        border: 'none'
      },
      drawerPaper: {
        width: 300,
        backgroundColor: theme.palette.primary.main,
        border: 'none',
        boxShadow: 'black 0 0 10px'
      },
      drawer: {
        width: 300
      },
      content: {
        backgroundColor: theme.palette.primary.main
      }
    })
  )();

  const content = (
    <div className={classes.content}>
      <Nav />
    </div>
  );

  return (
    <div>
      <Hidden smUp>
        <Drawer
          classes={{paper: classes.drawerPaperSm}}
          variant="temporary"
          open={props.isDrawerOpen}
          onClose={props.handleDrawerToggle}
          anchor="left"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          className={classes.drawer}
          classes={{paper: classes.drawerPaper}}
          variant="permanent"
          anchor="left"
        >
          {content}
        </Drawer>
      </Hidden>
    </div>
  )
}