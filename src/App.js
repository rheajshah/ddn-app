import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
          <Route path="/" element={<Home />} />
          <Route path='/comps' element={<Comps />} />
          <Route path='/elo' element={<ELO />} />
          <Route path='/teams' element={<Teams />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
