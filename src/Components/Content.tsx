import React from 'react';
import { makeStyles, Theme, createStyles, Tooltip, Typography } from '@material-ui/core';
import { SignalWifi1BarLockSharp } from '@material-ui/icons';

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
        [theme.breakpoints.down('xs')]: {
          fontSize: '2vw'
        }
      },
      title: {
        margin: 0,
        fontSize: '4vw',
        fontWeight: 'bolder',
        textShadow: '#bbb 0 0 5px',
        color: theme.palette.primary.light,
        [theme.breakpoints.down('xs')]: {
          fontSize: '5vw'
        }
      },
      titleDiscription: {
        fontSize: '1.2vw',
        paddingLeft: '1vw',
        fontWeight: 'lighter',
        textShadow: 'none',
        color: theme.palette.primary.light,
        [theme.breakpoints.down('xs')]: {
          fontSize: '2vw'
        }
      },
      subTitle: {
        fontSize: '2vw',
        paddingLeft: '2vw',
        fontWeight: 'normal',
        textShadow: 'none',
        color: theme.palette.primary.light,
        [theme.breakpoints.down('xs')]: {
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
        [theme.breakpoints.down('xs')]: {
          fontSize: '8vw'
        }
      },
      contentWrapper: {
        display: 'grid',

      },
      description: {
        fontSize: '1.3vw',
        color: 'black',
        textAlign: 'center',
        width: '80%',
        margin: 'auto',
        lineHeight: '160%',
        fontWeight: 'lighter',
        [theme.breakpoints.down('sm')]: {
          fontSize: '2vw'
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: '3.2vw'
        }
      },
      emphasis: {
        color: theme.palette.primary.light,
        fontWeight: 'normal'
      },
      link: {
        color: theme.palette.success.light,
        textDecoration: `underline dashed 1px ${theme.palette.success.light}`,
        fontWeight: 'normal',
        '&:hover': {
          color: theme.palette.success.light,
          textDecoration: `underline solid 1px ${theme.palette.success.light}`,
        },
        '&:visited': {
          color: theme.palette.success.light,
        },
        '&:active': {
          color: theme.palette.success.light,
        }
      },
      transition: {
        position: 'absolute',
        bottom: '2vw',
        fontSize: '1.2vw',
        margin: 'auto',
        width: '100%',
        color: theme.palette.success.light,
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
          fontSize: '2vw'
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: '3vw'
        }
      }
    })
  )();

  return (
    <div className={classes.root}>
      <section id="aboutMe">
        <section className={classes.page}>
          <Fade up>
            <span className={classes.largeTitle}>About Me</span>
          </Fade>
          <Fade up>
            <div className={classes.description}>
              <br />
              👋 Hello! Thank you for visiting this web page. 🥳 
              My name is <span className={classes.emphasis}>Yihao Wang</span>. I am a recent graduate  
              from the University of Auckland with a <span className={classes.emphasis}>Post-Graduate Certificate in IT</span>. 
              Before this, I also got a Bachelor's Degree in Science and a Master's Degree in Accounting (with Distinction).
              <br />
              I have been learning programming for about 2 years now, and each day I am becoming a bit better at it and a bit more passionate about it.
              I enjoy programming in  
              <Tooltip title={<Typography>Of course, this includes HTML5 and CSS3.</Typography>}><span className={classes.link}> JavaScript/Typescript</span></Tooltip>, <span className={classes.emphasis}>C#</span> and <span className={classes.emphasis}>Java</span>, 
              and I have also written code in <span className={classes.emphasis}>C</span>, <span className={classes.emphasis}>Ruby</span> and <span className={classes.emphasis}>SML</span>.
              I am familiar with <span className={classes.emphasis}>React</span> and <span className={classes.emphasis}>.Net Core</span>, and I am hoping to become a <span className={classes.emphasis}>full-stack developer</span> in the near future.
              <br /><br />
              I created this web page using React with Typescript. This is a chronological introduction of myself that I hope may help you know more about me. 😃
            </div>
          </Fade>
          <Fade up>
            <div className={classes.transition}>👇 Scroll down to know more about my education background</div>
          </Fade>
        </section>
      </section>
      <section id="pekingUniversity">
        <section className={classes.page}>
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
          <Fade>
            <div className={classes.contentWrapper}>
              
            </div>
          </Fade>
        </section>
        <section className={classes.page}>
          <Fade>
            <div className={classes.contentWrapper}>
              
            </div>
          </Fade>
        </section>
      </section>
      <section id="victoriaUniversity">
        <section className={classes.page}>
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
      </section>
      <section id="universityOfAuckland">
        <section className={classes.page}>
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
            <div className={classes.transition}>👇 Scroll down to know more about my programming projects</div>
          </Fade>
        </section>
      </section>
      <section id="nandToTetris">
        <section className={classes.page}>
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
      </section>
      <section id="div">
        <section className={classes.page}>
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
      </section>
      <section id="keyPoint">
        <section className={classes.page}>
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
      </section>
      <section id="colorfulLife">
        <section className={classes.page}>
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
      </section>
      <section id="aboutFuture">
        <section className={classes.page}>
          <Fade up>
            <span className={classes.largeTitle}>About Future</span>
          </Fade>
        </section>
      </section>
    </div>
  )
}