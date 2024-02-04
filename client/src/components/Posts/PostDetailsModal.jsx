import React from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
import { Box, Container, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Navbar from '../Navbar';

const PostDetailsModal = () => {
  const location = useLocation();
  const data = location.state?.postData;
  console.log(data);

  return (
    <Container
      padding={3}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowY: "scroll",
      }}
    >
      <Navbar />
      <Box
        style={{
          borderColor: "white",
          backgroundColor: "white",
          display: "flex",
          zIndex: "1300",
          width: "90vw",
          height: "80vh",
        }}
        sx={{
          flexDirection: { lg: "row", xs: "column", md: "column" },
        }}
      >
        <img
          style={{
            objectFit: "contain",
            padding: "1rem",
            height: "auto",
            maxWidth: "90vw",
          }}
          src={data.image}
          alt="post"
        />

        <Stack style={{ overflowY: "scroll", }}>
          <Typography pl={3} pt={2} style={{ textDecoration: "underline" }} variant="h6" 
          fontFamily="cursive"
          color="initial">
            {data.user}
          </Typography>
          <Typography pl={3} pt={2} color="initial">
            {data.content}
          </Typography>
          <Typography pl={3} pt={1} variant="h6" color="initial">
            <FavoriteIcon pr={2} color="primary" />
            {data.likes.length}
          </Typography>
          <Typography variant="h6" textAlign="center" style={{ textDecoration: "underline" }} 
          fontFamily="cursive" color="initial">Comments</Typography>
          <Typography style={{ }} pl={3} pt={1} variant="h6" color="initial">
            {data.comments.map((comment, index) => (
              <Typography key={index} color="initial">{comment.user}: {comment.text}</Typography>
            ))}
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default PostDetailsModal;
