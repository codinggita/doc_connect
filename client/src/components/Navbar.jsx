import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import AddIcon from '@mui/icons-material/Add';

function Navbar() {
  return (
    <AppBar
        style={{
          display: "flex",
        }}
        color=""
      >
        <Toolbar>
          <Link to="/posts">
            <img className="img" src={logo} alt="logo" />
          </Link>
          <Link to="/posts/create">
            <IconButton aria-label="account-circle">
              <AddIcon color="primary" />
            </IconButton>
          </Link>
          <Link to="/profile">
            <IconButton aria-label="account-circle">
              <AccountCircle color="primary" />
            </IconButton>
          </Link>
          <Link to="/chat">
            <IconButton aria-label="chat-icon">
              <ChatBubbleIcon color="primary" />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
  )
}

export default Navbar;