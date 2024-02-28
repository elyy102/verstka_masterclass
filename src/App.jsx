import { useState } from 'react'
import './App.css'
import Afisha from './Afisha'
import Header from './Header'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Afisha />
    <Footer />
    </>
  )
}

export default App
