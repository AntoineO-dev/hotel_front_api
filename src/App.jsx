import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NavBar from './components/Navbar'
import Loginpage from './pages/LoginPage'
import RoomsPage from './pages/roomsPage'
import Registerpage from './pages/RegisterPage'
import ServicesPage from './pages/ServicePage'


function App() {
 

  return (
    <>

    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/chambres" element={<RoomsPage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/register" element={<Registerpage />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App;
