import './App.css'
// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import CreateAccount from './pages/CreateAccount'
import DisplayAccount from './pages/DisplayAccount'
import UpdateAccount from './pages/UpdateAccount'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CreateAccount />}/>
      <Route path='/display' element={<DisplayAccount/>}/>
      <Route path='/update' element={<UpdateAccount/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
