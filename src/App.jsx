import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Index from "./pages/Index"
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-full bg-violet-800 bg-opacity-80 lg:h-screen' >
      <div className='lg:bg-desk bg-mobile bg-cover bg-center w-full flex flex-col pb-10 h-full' >
        <Router>
          <Header/>
          <div>
            <Routes>
              <Route path='/' exact element={<Index/>} />
            </Routes>
          </div>
        </Router>
          <Footer/>
      </div>
    </div>
  )
}

export default App
