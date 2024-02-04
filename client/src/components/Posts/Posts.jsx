import React from "react";
import posts from "../../data";
import "../../App.css";
import {
  Grid,
  Typography,
  Container,
} from "@mui/material";
import Navbar from "../Navbar";
import PostDetails from "./PostDetails";

const Posts = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: 0,
      }}
    >
      <Navbar />
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
