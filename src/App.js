import React from 'react';
import './App.css';
import ButtonsPanel from './components/ButtonsPanel';
import DisplayResult from './components/DisplayResult';
function App() {
  return (
    <>
    <DisplayResult result='0'/>
    <ButtonsPanel/>
    </>
  );
}

export default App;
