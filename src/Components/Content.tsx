import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const Fade = require('react-reveal/Fade');

export default function Content() {
  const classes = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        [theme.breakpoints.up('md')]: {
          marginLeft: 350
        }
      },
      page: {
        minHeight: '100vh',
        scrollSnapAlign: 'start',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
          paddingTop: 50,
          minHeight: 'calc(100vh - 50px)'
        }
      },
      sectionName: {
        fontSize: '1.2vw',
        margin: 0,
        fontWeight: 'bold',
        display: 'inline',
        textAlign: 'left',
        padding: 0,
        paddingLeft: '0.5em',
        paddingRight: '0.5em',
        backgroundColor: theme.palette.primary.light,
        color: 'white',
        [theme.breakpoints.down('sm')]: {
          fontSize: '2vw'
        }
      },
      title: {
        margin: 0,
        fontSize: '4vw',
        fontWeight: 'bolder',
        textShadow: '#bbb 0 0 5px',
        color: theme.palette.primary.light,
        [theme.breakpoints.down('sm')]: {
          fontSize: '5vw'
        }
      },
      titleDiscription: {
        fontSize: '1.2vw',
        paddingLeft: '1vw',
        fontWeight: 'lighter',
        textShadow: 'none',
        color: theme.palette.primary.light,
        [theme.breakpoints.down('sm')]: {
          fontSize: '2vw'
        }
      },
      subTitle: {
        fontSize: '2vw',
        paddingLeft: '2vw',
        fontWeight: 'normal',
        textShadow: 'none',
        color: theme.palette.primary.light,
        [theme.breakpoints.down('sm')]: {
          fontSize: '3vw'
        }
      },
      titleWrapper: {
        marginLeft: '10%',
        marginTop: '1em',
        paddingTop: '1em',
        display: 'flex',
        flexDirection: 'column'
      },
      largeTitle: {
        display: 'block',
        fontSize: '5.5vw',
        textAlign: 'center',
        paddingTop: '5.5vw',
        fontWeight: 'lighter',
        color: theme.palette.primary.light,
        textShadow: '#bbb 0 0 10px',
        [theme.breakpoints.down('sm')]: {
          fontSize: '8vw'
        }
      },
      contentWrapper: {
        display: 'grid',
        
      },
      description: {

      },
      emphasis: {

      },
      link: {

      },
      transition: {
        position: 'absolute',
        bottom: '2vw',
        fontSize: '1.5vw',
        margin: 'auto',
        width: '100%',
        color: 'white',
        textShadow: 'black 0 0 10px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
          fontSize: '3vw'
        }
      }
    })
  )();

  return (
    <div className={classes.root}>
      <section id="aboutMe" className={classes.page}>
        <Fade up>
          <span className={classes.largeTitle}>About Me</span>
        </Fade>
        <Fade up>
          <div className={classes.transition}>👇 Scroll down to see my education background</div>
        </Fade>
      </section>
      <section id="pekingUniversity" className={classes.page}>
        <Fade up>
          <div className={classes.titleWrapper}>
            <span>
              <p className={classes.sectionName}>EDUCATION</p>
            </span>
            <span className={classes.title}>
              Peking University
            <span className={classes.titleDiscription}>2012.9 - 2017.7</span>
            </span>
          </div>
        </Fade>
      </section>
      <section id="victoriaUniversity" className={classes.page}>
        <Fade up>
          <div className={classes.titleWrapper}>
            <span>
              <p className={classes.sectionName}>EDUCATION</p>
            </span>
            <span className={classes.title}>
              Victoria University
            <span className={classes.titleDiscription}>2017.11 - 2019.9</span>
            </span>
          </div>
        </Fade>
      </section>
      <section id="universityOfAuckland" className={classes.page}>
        <Fade up>
          <div className={classes.titleWrapper}>
            <span>
              <p className={classes.sectionName}>EDUCATION</p>
            </span>
            <span className={classes.title}>
              University of Auckland
            <span className={classes.titleDiscription}>2020.3 - 2020.7</span>
            </span>
          </div>
        </Fade>
        <Fade up>
          <div className={classes.transition}>👇 Scroll down to see my programming projects</div>
        </Fade>
      </section>
      <section id="nandToTetris" className={classes.page}>
        <Fade up>
          <div className={classes.titleWrapper}>
            <span>
              <p className={classes.sectionName}>PROJECT</p>
            </span>
            <span className={classes.title}>
              Nand to Tetris
            <span className={classes.subTitle}>- A computer built from scratch</span>
            </span>
          </div>
        </Fade>
      </section>
      <section id="div" className={classes.page}>
        <Fade up>
          <div className={classes.titleWrapper}>
            <span>
              <p className={classes.sectionName}>PROJECT</p>
            </span>
            <span className={classes.title}>
              div
            <span className={classes.subTitle}>- A Turing-complete programming language</span>
            </span>
          </div>
        </Fade>
      </section>
      <section id="keyPoint" className={classes.page}>
        <Fade up>
          <div className={classes.titleWrapper}>
            <span>
              <p className={classes.sectionName}>PROJECT</p>
            </span>
            <span className={classes.title}>
              KeyPoint
            <span className={classes.subTitle}>- A blogging website</span>
            </span>
          </div>
        </Fade>
      </section>
      <section id="colorfulLife" className={classes.page}>
        <Fade up>
          <div className={classes.titleWrapper}>
            <span>
              <p className={classes.sectionName}>PROJECT</p>
            </span>
            <span className={classes.title}>
              Colorful Life
            <span className={classes.subTitle}>- Generative art base on Game of Life</span>
            </span>
          </div>
        </Fade>
      </section>
      <section id="aboutFuture" className={classes.page}>
        <Fade up>
          <span className={classes.largeTitle}>About Future</span>
        </Fade>
      </section>
    </div>
  )
}