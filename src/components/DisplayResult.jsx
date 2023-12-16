import React from 'react'

export default function DisplayResult(props) {
  return (
    <>
    {props.result === null ? '0': props.result}
    </>
  )
}
