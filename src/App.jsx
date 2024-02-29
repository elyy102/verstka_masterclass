import { useState } from 'react'
import './App.css'
import Afisha from './Afisha'
import Header from './Header'
import Footer from './Footer'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login />
    </>
  )
}

export default App
