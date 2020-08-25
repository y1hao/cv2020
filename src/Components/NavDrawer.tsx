import React from 'react';
import { Drawer, Hidden, Theme, createStyles, makeStyles, List, ListItem, Link, Tooltip, Typography } from '@material-ui/core';
import Nav from './Nav';
import avatar from '../images/avatar.jpg';
import { MailOutline, PhoneIphone, GitHub, LinkedIn } from '@material-ui/icons';

interface IProps {
  isDrawerOpen: boolean,
  handleDrawerToggle: () => void
}

export default function NavDrawer(props: IProps) {
  const classes = makeStyles((theme: Theme) => 
    createStyles({
      drawerPaperSm: {
        width: 350,
        maxWidth: '80%',
        backgroundColor: theme.palette.primary.main,
        border: 'none'
      },
      drawerPaper: {
        width: 350,
        backgroundColor: theme.palette.primary.main,
        border: 'none',
        boxShadow: 'black 0 0 10px'
      },
      drawer: {
        width: 350
      },
      content: {
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
      },
      profileWrapper: {

      },
      avatar: {
        width: '40%',
        display: 'block',
        borderRadius: '50%',
        margin: 'auto',
        marginTop: 20,
        borderWidth: 7,
        borderStyle: 'solid',
        borderColor: theme.palette.primary.dark,
        boxShadow: 'black 0 0 10px',
        '&:hover': {
          boxShadow: 'black 0 0 20px'
        }
      },
      name: {
        fontSize: 30,
        textAlign: 'center',
        margin: 'auto',
        marginBottom: 10,
        color: 'white'
      },
      contact: {
        fontSize: 15,
        fontWeight: 'lighter',
        margin: 'auto',
        textAlign: 'center',
        color: 'white'
      },
      icon: {
        fontSize: 20,
        transform: 'translate(0, 5px)'
      },
      link: {
        fontSize: 12,
        fontWeight: 'lighter',
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline'
        }
      }
    })
  )();

  const content = (
    <div className={classes.content}>
      <div className={classes.profileWrapper}>
        <Tooltip arrow title={<Typography>Hi &#9995; I am a programming enthusiast &#128515; </Typography>}>
          <img src={avatar} className={classes.avatar} />
        </Tooltip>
        <div className={classes.name}>Yihao Wang</div>
        <div className={classes.contact}><MailOutline className={classes.icon} /> yesiamyihao@gmail.com</div>
        <div className={classes.contact}><PhoneIphone className={classes.icon} /> 021 0806 1979</div>
        <div className={classes.contact}><GitHub className={classes.icon} /> <a href="https://github.com/CoderYihaoWang" className={classes.link}>https://github.com/CoderYihaoWang</a></div>
        <div className={classes.contact}><LinkedIn className={classes.icon} /> <a href="https://linkedin.com/in/yihao-wang-683519165" className={classes.link}>https://linkedin.com/in/yihao-wang-683519165</a></div>
      </div>
      <Nav />
    </div>
  );

  return (
    <div>
      <Hidden mdUp>
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
      <Hidden smDown>
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