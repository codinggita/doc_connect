import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import {
  Typography,
  Avatar,
  Container,
  Stack,
  Divider,
  Chip,
  Grid,
} from "@mui/material";
import posts from "../../data";
import EditIcon from "@mui/icons-material/Edit";
import PostDetails from "../Posts/PostDetails";
import { deepPurple } from "@mui/material/colors";

function Profile() {
  const { username } = useParams();
  const userPosts = posts.filter((post) => post.user == username);

  return (
    <>
      <Navbar />
      <Container
        maxWidth="lg"
        style={{
          marginTop: "5rem",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            bgcolor: deepPurple[500],
            m: "2rem",
            width: 100,
            height: 100,
            fontSize: "xx-large",
          }}
        >
          {username[0].toUpperCase()}
        </Avatar>

        <Stack>
          <Typography
            variant="h4"
            style={{
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "cursive",
            }}
          >
            {username}
            <Link to={`../profile/${username}`}>
              {/* state={{ userData: data }} */}
              <EditIcon color="primary" style={{ marginLeft: "1rem" }} />
            </Link>
          </Typography>
          <Typography color="initial">John Doe</Typography>
          <Typography color="initial">Neurosurgeon</Typography>
        </Stack>
      </Container>
      <Divider sx={{ margin: "0 9rem" }} variant="middle" aria-hidden="true">
        <Chip label="POSTS" size="small" />
      </Divider>

      <Grid
        container
        spacing={3}
        sx={{ p: "1.5rem" }}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {userPosts.map((post, index) => (
          <PostDetails key={index} data={post} />
        ))}
      </Grid>
    </>
  );
}

export default Profile;
