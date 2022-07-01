import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Sobre from './paginas/sobre/Sobre';
import Login from './paginas/login/Login';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{minHeight: '75vh'}}>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/login' element={<Login />} />
          <Route element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
