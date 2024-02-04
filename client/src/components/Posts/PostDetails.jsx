import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import PostDetailsModal from "./PostDetailsModal";
import {
  Typography,
  Container,
  Grid,
  Paper,
  Modal,
  Backdrop,
  Fade,
  Box,
} from "@mui/material";
import EditPost from "./EditPost";

function PostDetails({ data }) {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Paper
        style={{
          height: "30rem",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          overflow: "none",
        }}
      >
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={`../${data.user}`}>
            <Typography variant="h6" fontFamily="cursive">
              {data.user}
            </Typography>
          </Link>

          {/* {loggedInUser == data.user && edit} */}
          <Link
            to={`./edit/${data?._id?.$oid}`}
            state={{ postData: data }}
          >
            <EditIcon />
          </Link>
        </Box>

        <Link
          to={`./open/${data?._id?.$oid}`}
          state={{ postData: data }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: 0,
              pt: "0.5rem",
            }}
          >
            <img
              className="eachPost"
              style={{ objectFit: "contain" }}
              src={data.image}
              alt="post"
            />
          </Container>
          <Container style={{ display: "flex", margin: 0, padding: 0 }}>
            <FavoriteIcon color="primary" sx={{ pt: "0.2rem", pr: "0.5rem" }} />
            <Typography variant="h6" color="initial">
              {data.likes.length}
            </Typography>
          </Container>
          <Typography sx={{ fontSize: "medium" }} color="initial">
            {data.content}
          </Typography>
        </Link>
      </Paper>
    </Grid>
  );
}

export default PostDetails;
