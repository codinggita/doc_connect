import { useState } from 'react';
import { Card, Button } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Auth/Authentication';
import Posts from './components/Posts/Posts';
import ChatComp from './components/Chat/ChatComp';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/chat' element={<ChatComp />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
