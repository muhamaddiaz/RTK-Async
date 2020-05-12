import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'

import Corona from "../features/Corona/Corona";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Corona />
      </div>
    </BrowserRouter>

  );
}

export default App;
