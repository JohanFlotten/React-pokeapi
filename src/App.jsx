import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gen13 from './pages/Gen1-3.jsx';
import Gen46 from './pages/Gen4-6.jsx'
import Gen79 from './pages/Gen7-9.jsx'
import { Footer } from './components/Footer';
import Home from './pages/Home.jsx';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/generations-1-3" element={<Gen13 />} />
          <Route path="/generations-4-6" element={<Gen46 />} />
          <Route path="/generations-7-9" element={<Gen79 />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
