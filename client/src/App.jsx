import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Auth/Authentication";
import Posts from "./components/Posts/Posts";
import ChatComp from "./components/Chat/ChatComp";
import Profile from "./components/Profile/Profile";
import CreatePost from "./components/Posts/CreatePost";
import EditPost from "./components/Posts/EditPost";
import PostDetailsModal from "./components/Posts/PostDetailsModal";
import EditProfile from "./components/Profile/EditProfile";
import { GoogleOAuthProvider } from '@react-oauth/google';
// import { createContext } from "react";

// export const Context = createContext();

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_API_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/create" element={<CreatePost />} />
          <Route path="/posts/open/:id" element={<PostDetailsModal />} />
          <Route path="/posts/edit/:id" element={<EditPost />} />
          <Route path="/chat" element={<ChatComp />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/profile/:username" element={<EditProfile />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
