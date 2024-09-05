import './App.css'
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Components/Login'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/home" element={ <Home/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
