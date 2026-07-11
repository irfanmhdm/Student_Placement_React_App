import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addstudent from './components/Addstud'
import Search from './components/Search'
import Delete from './components/Delete'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Addstudent/>
    <Search/>
    <Delete/>
      
    </>
  )
}

export default App
