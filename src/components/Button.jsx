import React from 'react'
import './button.css';

export const Button = ({name,color,wide}) => {
    const buttonStyle = {
        backgroundColor: color || '#FF9500', // Default to orange if color prop is not provided
      };
  return (
    <button className={wide===true? 'wide':''} style={buttonStyle}>{name}</button>
  )
}
