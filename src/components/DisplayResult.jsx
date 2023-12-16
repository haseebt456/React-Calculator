import React from 'react';
import './display.css';

export default function DisplayResult(props) {
  return (
    <>
    <div id='display'>{props.result}</div>
    </>
  )
}
