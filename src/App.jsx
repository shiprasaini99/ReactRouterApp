import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className='text-4xl bg-orange-400'>REACT ROUTER</h1>
       <Header/>
       <Home/>
       <Footer/>
    </>
  )
}

export default App
