import React from 'react'
import Main from './components/foodies/main'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main Type={'Home'} />} />
          <Route path='/category' element={<Main Type={'Categories'} />} />
          <Route path='/search' element={<Main Type={'Search'} />} />
          <Route path='/login' element={<Main Type={'Login'} />} />
          <Route path='/register' element={<Main Type={'Register'} />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App