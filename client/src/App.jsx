import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Auth/Authentication';
import Posts from './components/Posts/Posts';
import ChatComp from './components/Chat/ChatComp';
import Profile from './components/Profile/Profile';
import CreatePost from './components/Posts/CreatePost';
import EditPost from './components/Posts/EditPost';
import PostDetailsModal from './components/Posts/PostDetailsModal';
import EditProfile from './components/Profile/EditProfile';
import DeletePostModal from './components/Posts/DeletePostModal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/posts/create' element={<CreatePost />}/>
        <Route path='/posts/open/:id' element={<PostDetailsModal />} />
        <Route path='/posts/edit/:id' element={<EditPost />} />
        <Route path='/posts/delete/:id' element={<DeletePostModal />} />
        <Route path='/chat' element={<ChatComp />}/>
        <Route path='/:username' element={<Profile />}/>
        <Route path='/profile/:username' element={<EditProfile />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
