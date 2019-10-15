import React from 'react';
import './App.css';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter name="Vijay" />
      <HoverCounter />
    </div>
  );
}

export default App;
