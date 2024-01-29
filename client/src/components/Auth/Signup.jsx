import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";

function Signup({ setIsLogin }) {
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <>
      <Typography variant="h3" color="white">
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={submitHandler} sx={{ p: 3 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Name"
              name="Name"
              required
              fullWidth
              id="Name"
              autoFocus
              sx={{
                input: { color: "white" },
                border: "1px solid#fff",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="username"
              placeholder="Username"
              name="username"
              autoComplete="family-name"
              sx={{
                input: { color: "white" },
                border: "1px solid#fff",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              placeholder="Email"
              name="email"
              autoComplete="email"
              sx={{
                input: { color: "white" },
                border: "1px solid#fff",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              placeholder="Password"
              name="password"
              type="password"
              id="password"
              autoComplete="new-password"
              sx={{
                input: { color: "white" },
                border: "1px solid#fff",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              placeholder="Confirm Password"
              name="cfmpassword"
              type="password"
              id="cfmpassword"
              autoComplete="new-password"
              sx={{
                input: { color: "white" },
                border: "1px solid#fff",
              }}
            />
          </Grid>
        </Grid>

        <Link to="./posts">
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Link>

        <Grid container justifyContent="flex-end">
          <Grid item sx={{ color: "white" }}>
            Already have an account?{" "}
            <Link
              onClick={() => {
                setIsLogin(true);
              }}
            >
              Sign In.
            </Link>{" "}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Signup;
