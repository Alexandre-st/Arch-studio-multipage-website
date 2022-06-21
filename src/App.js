import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './layouts/Header';
import Home from './pages/Home';
import './styles/index.scss';

const App = () => {
  return ( 
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}
 
export default App;