import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Typography, Container, Grid, Paper } from "@mui/material";

function PostDetails({ data }) {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Paper
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          overflow: "none",
        }}
      >
        <Link to={`../${data.user}`}>
          <Typography variant="h6" fontFamily="cursive">
            {data.user}
          </Typography>
        </Link>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 0,
            pt: "0.5rem"
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
      </Paper>
    </Grid>
  );
}

export default PostDetails;
