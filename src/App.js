import React from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Route and Switch
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home.js';
import Comps from './Comps.js';
import ELO from './ELO.js';
import Teams from './Teams.js';

function App() {
  const basename = process.env.NODE_ENV === 'development' ? '/' : '/ddn-app';
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={(<Home/>)} />
          <Route path='/comps' element={(<Comps/>)}/>
          <Route path='/elo' element={(<ELO/>)}/>
          <Route path='/teams' element={(<Teams/>)}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
