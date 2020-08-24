import React from 'react';
import Scrollspy from 'react-scrollspy';
import './Nav.css';

export default function Nav() {
  return (
    <Scrollspy items={
      [
        "aboutMe",
        "pekingUniversity",
        "victoriaUniversity",
        "universityOfAuckland",
        "nandToTetris",
        "div",
        "keyPoint",
        "colorfulLife",
        "aboutFuture"
      ]} 
      currentClassName="is-current"
      className="scroll-spy"
    >
      <a href="#aboutMe">About me</a>
      <a href="#pekingUniversity">Peking University</a>
      <a href="#victoriaUniversity">Victoria University of Wellington</a>
      <a href="#universityOfAuckland">University of Auckland</a>
      <a href="#nandToTetris">Project - Nand to Tetris</a>
      <a href="#div">Project - div</a>
      <a href="#keyPoint">Project - KeyPoint</a>
      <a href="#colorfulLife">Project - Colorful Life</a>
      <a href="#aboutFuture">About future</a>
    </Scrollspy>
  )
}