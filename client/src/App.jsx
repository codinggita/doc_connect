import { useState } from 'react';
import { Card, Button } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Auth/Authentication';
import Posts from './components/Posts/Posts';
import ChatComp from './components/Chat/ChatComp';
import Profile from './components/Profile/Profile';
import Modal from './components/Posts/PostDetailsModal';
import './App.css';
import EditPost from './components/Posts/EditPost';
import PostDetailsModal from './components/Posts/PostDetailsModal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/posts/open/:id' element={<PostDetailsModal />} />
        <Route path='/posts/edit/:id' element={<EditPost />} />
        <Route path='/chat' element={<ChatComp />}/>
        <Route path='/:username' element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
