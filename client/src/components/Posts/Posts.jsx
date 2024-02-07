import React, { useState, useEffect } from "react";
import "../../App.css";
import { Grid, Typography, Container } from "@mui/material";
import Navbar from "../Navbar";
import PostDetails from "./PostDetails";
import InfiniteScroll from "react-infinite-scroll-component";
import { Hourglass } from "react-loader-spinner";
import axios from "axios";

const Posts = () => {
  const [items, setItems] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(6);
  const [loading, setLoading] = useState(true);
  const apiURL = "http://localhost:3000/posts";

  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    const ws = new WebSocket("ws://localhost:3000/posts");

    // Listen for deletion events
    ws.onmessage = (event) => {
      const deletedItemId = JSON.parse(event.data).id;
      setItems((prevItems) =>
        prevItems.filter((item) => item.id !== deletedItemId)
      );
    };

    return () => {
      ws.close(); // Close WebSocket connection on component unmount
    };
  }, []);

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
          <Grid item xs={12} style={{ textAlign: "center", paddingLeft: 0 }}>
            <Typography fontFamily="monospace" variant="h4">
              Posts
            </Typography>
          </Grid>
          {loading ? (
            <div style={{ textAlign: "center", marginTop: "8rem" }}>
              <Hourglass color="#00BFFF" height={100} width={100} />
            </div>
          ) : (
            items.map((post, index) => <PostDetails key={index} data={post} />)
          )}
        </Grid>
      </InfiniteScroll>
    </Container>
  );
};

export default Posts;
