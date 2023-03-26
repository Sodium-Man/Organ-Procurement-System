import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import LoginPage from './Components/LoginPage/LoginPage'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/main' element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App

