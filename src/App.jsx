import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from '../src/components/View'
import Search from './components/Search'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<View/>}/>
        <Route path='/Search' element={<Search/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
