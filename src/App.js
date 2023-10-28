import React from 'react'
import Launchpage from './components/LaunchPage/Launchpage'
import { Route, Routes } from 'react-router-dom'
import Card from './components/newCard/card'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Launchpage/>} />
        <Route path='/card' element={<Card/>} />
      </Routes>

      
      
      </BrowserRouter>
    </div>
  )
}

export default App