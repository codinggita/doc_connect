import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";

function Signup({ setIsLogin }) {
  const user = false;

  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <>
      <div style={{ paddingTop: "5rem", textAlign: "center" }}>
        <img src={logo} alt="logo" width="70%"  />
      </div>

      <Typography variant="h4" color="white">
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
          <Grid item xs={12}>
            <Link to="./posts">
              <Button fullWidth variant="contained">
                Sign Up
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Typography textAlign={"center"} pb={1} variant="h6" color="white">
              OR
            </Typography>
            <GoogleLogin
              onSuccess={(response) => console.log(response)}
              onError={() => console.log("Error")}
            />
          </Grid>
        </Grid>

        <Grid container justifyContent="flex-end">
          <Grid item sx={{ color: "white", p: 1 }}>
            Already have an account?{" "}
            <Link
              onClick={() => {
                setIsLogin(true);
              }}
            >
              Log In.
            </Link>{" "}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Signup;
