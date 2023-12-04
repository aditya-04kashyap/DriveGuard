import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import First from './Components/FirstPage'
import Analysis from './Components/AnalysisPage'
function App() {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/analysis" element={<Analysis/>} />
          
        </Routes>
      </HashRouter>
  );
}

export default App;
