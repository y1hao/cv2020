import React from 'react';
import { Drawer, Hidden, Theme, createStyles, makeStyles } from '@material-ui/core';

interface IProps {
  isDrawerOpen: boolean,
  handleDrawerToggle: () => void
}

export default function NavDrawer(props: IProps) {
  const classes = makeStyles((theme: Theme) => 
    createStyles({
      drawerPaperSm: {
        width: '80%'
      },
      drawerPaper: {
        width: 300
      },
      drawer: {
        width: 300
      }
    })
  )();

  const content = <p>Placeholder for drawer content</p>

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