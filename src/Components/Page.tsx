import React from 'react';
const Fade = require('react-reveal/Fade');

interface IProps {
  className: string,
  id: string
}

export default function Page(props: IProps) {
  return (
    <div className={props.className} id={props.id}>
    <Fade left>
    <p>placeholder for a page</p>
    </Fade>
    </div>
  )
}