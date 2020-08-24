import React from 'react';
import Page from './Page';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

interface IProps {

}

export default function Content(props: IProps) {
  const classes = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        [theme.breakpoints.up('sm')]: {
          marginLeft: 300
        },
        [theme.breakpoints.down('xs')]: {
          marginTop: 50
        }
      },
      page: {
        minHeight: '100vh'
      }
    })
  )();

  return (
    <div className={classes.root}>
      <section id="aboutMe" className={classes.page}>
        <p>About me</p>
      </section>
      <section id="pekingUniversity" className={classes.page}>
        <p>Peking University</p>
      </section>
      <section id="victoriaUniversity" className={classes.page}>
        <p>Victoria University of Wellington</p>
      </section>
      <section id="universityOfAuckland" className={classes.page}>
        <p>University of Auckland</p>
      </section>
      <section id="nandToTetris" className={classes.page}>
        <p>Project - Nand to Tetris</p>
      </section>
      <section id="div" className={classes.page}>
        <p>Project - div</p>
      </section>
      <section id="keyPoint" className={classes.page}>
        <p>Project - KeyPoint</p>
      </section>
      <section id="colorfulLife" className={classes.page}>
        <p>Project - Colorful Life</p>
      </section>
      <section id="aboutFuture" className={classes.page}>
        <p>About the future</p>
      </section>
    </div>
  )
}