import React from 'react';
import './App.css';
import SignalCard from './SignalCard';

function App() {
  return (
    <div className="App">
      <h1>SignalGlide</h1>
      <p>Welcome to your trading signals dashboard!</p>
      <SignalCard />
    </div>
  );
}

export default App;
