import React from 'react';
import './App.css';
import ButtonsPanel from './components/ButtonsPanel';
import DisplayResult from './components/DisplayResult';
function App() {
  return (
    <>
    <div id='calculator'>
    <DisplayResult result='0'/>
    <ButtonsPanel/>
    </div>
    </>
  );
}

export default App;
