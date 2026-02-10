import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx' 
import About from './pages/About.jsx'
import Profile from './pages/Profile.jsx'
import { Container } from 'lucide-react'

function App() {

  return (
    <>
      <Home />
      <About />
      <Profile /> 
    </>
  );
}

export default App
