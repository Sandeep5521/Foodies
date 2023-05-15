import React from 'react'
import Main from './components/foodies/main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main Type={'Home'} />} />
        <Route path='/category' element={<Main Type={'Categories'} />} />
        <Route path='/search' element={<Main Type={'Search'} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App