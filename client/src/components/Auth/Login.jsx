import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";

function Login({ setIsLogin }) {
  return (
    <>
      <Typography variant="h3" color="white">
        Login
      </Typography>
      <Box sx={{ p: 3 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="username"
              placeholder="Username"
              name="username"
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
              id="password"
              placeholder="Password"
              name="password"
              sx={{
                input: { color: "white" },
                border: "1px solid#fff",
              }}
            />
          </Grid>
        </Grid>

        <Link to="./posts">
          <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
        </Link>

        <Grid container justifyContent="flex-end">
          <Grid item sx={{ color: "white" }}>
            Not yet registered?{" "}
            <Link
              onClick={() => {
                setIsLogin(false);
              }}
            >
              Sign Up
            </Link>{" "}
            to continue.
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Login;
