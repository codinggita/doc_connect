import React, { useState, useEffect } from "react";
// import posts from "../../data";
import "../../App.css";
import { Grid, Typography, Container } from "@mui/material";
import Navbar from "../Navbar";
import PostDetails from "./PostDetails";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const Posts = () => {
  const [items, setItems] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(6);
  const apiURL = "https://docconnect-v51n.onrender.com/";
  
  useEffect(() => {
    axios.get(apiURL)
    .then(response => {
      setItems(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])
  
  function fetchData() {
    setTimeout(() => {
      setNumberOfItems((prevNumber) => prevNumber + 6);
    }, 500);
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: 0,
      }}
    >
      <Navbar />
      <InfiniteScroll
        style={{ overflow: "none" }}
        dataLength={items.length}
        next={fetchData}
        hasMore={true}
      >
        <Grid
          container
          spacing={3}
          sx={{ m: "5rem 0", pr: "1.5rem" }}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography fontFamily="monospace" variant="h4">
              Posts
            </Typography>
          </Grid>

          {items.map((post, index) => (
            <PostDetails key={index} data={post} />
          ))}
        </Grid>
      </InfiniteScroll>
    </Container>
  );
};

export default Posts;
