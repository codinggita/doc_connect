import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Card, Typography, Container, Grid, Paper } from "@mui/material";

function PostDetails({ data }) {
  return (
    <Grid item  xs={12} md={6} lg={4}>
      <Paper
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          overflow: "none",
        }}
      >
        <Typography variant="h6" fontFamily="cursive">{data.user}</Typography>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 0,
          }}
        >
          <img className="eachPost" style={{"objectFit": "contain"}} src={data.image} alt="post" />
        </Container>
        <Container style={{ display: "flex", margin: 0, padding: 0 }}>
          <FavoriteIcon color="primary" sx={{ pr: "1rem" }}/>
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
