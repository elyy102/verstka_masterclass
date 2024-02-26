import { useState } from 'react'
import './App.css'
import Afisha from './Afisha'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Afisha />
    </>
  )
}

export default App
