import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addstudent from './components/Addstud'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Addstudent/>
      
    </>
  )
}

export default App
