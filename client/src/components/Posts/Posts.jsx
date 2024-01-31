import React from "react";
import posts from "../../data";
import "../../css/Posts.css";
import logo from "../../assets/logo.svg";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import {
  Grid,
  Typography,
  Container,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import PostDetails from "./PostDetails";

const Posts = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: 0,
      }}
    >
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
      <Grid
        container
        spacing={3}
        sx={{ m: "5rem 0", pr: "1.5rem" }}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h4">Posts</Typography>
        </Grid>

        {posts.map((post, index) => (
          <PostDetails key={index} data={post} />
        ))}
      </Grid>
    </Container>
  );
};

export default Posts;
