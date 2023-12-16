import React from 'react'
import {Button} from './Button'
import './buttonpanel.css';
export default function ButtonsPanel() {
  return (
    <>
    <div id="button-pannel">
    <div className='group1'>
    <Button name="AC" color=' #E4E4E4'/>
    <Button name="+/-"color=' #E4E4E4'/>
    <Button name="%"color=' #E4E4E4'/>
    <Button name="/"/>
    </div>
    <div className='group2'>
    <Button name="7"color='#E4E4E4'/>
    <Button name="8"color='#E4E4E4'/>
    <Button name="9"color='#E4E4E4'/>
    <Button name="X"/>
    </div>
    <div className='group3'>
    <Button name="4"color='#E4E4E4'/>
    <Button name="5"color='#E4E4E4'/>
    <Button name="6" color='#E4E4E4'/>
    <Button name="-"/>
    </div>
    <div className='group4'>
    <Button name="1" color='#E4E4E4'/>
    <Button name="2" color='#E4E4E4'/>
    <Button name="3" color='#E4E4E4'/>
    <Button name="+"/>
    </div>
    <div className='group5'>
        <Button name="0" wide={true} color='#E4E4E4'/>
        <Button name="." color='#E4E4E4'/>
        <Button name="="/>
    </div>
    </div>
    </>
  )
}
