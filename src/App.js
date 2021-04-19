import React, { useState } from 'react';
import Stock from './components/Stock';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [ tickerSymbol, setTickerSymbol ] = useState();
  
  return (
    <div className="app-container">
      <div>
        <Header inputHandler = { setTickerSymbol }/> 
        <Stock tickerSymbol = { tickerSymbol } /> 
      </div>
    </div>
  );
};

export default App;
