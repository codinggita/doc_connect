import { useState } from 'react';
import { Card, Button } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Auth/Authentication';
import Posts from './components/Posts';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/posts' element={<Posts />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
