import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addstud from './components/Addstud'
import Search from './components/Search'
import Delete from './components/Delete'
import View from './components/View'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    
    <Route path="/add" element = {<Addstud/>}/>
    <Route path="/delete" element = {<Delete/>}/>
    <Route path="/search" element = {<Search/>}/>
    <Route path="/view" element = {<View/>}/>

    </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
