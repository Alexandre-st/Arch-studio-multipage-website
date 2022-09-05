import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import Header from './layouts/Header';
import Home from './pages/Home';
import PortFolio from './pages/Portfolio';
import About from './pages/About';
import Footer from './layouts/Footer';
import './styles/index.scss';

const App = () => {
  return ( 
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/portfolio' element={<PortFolio />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}
 
export default App;