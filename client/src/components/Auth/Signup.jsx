import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
const apiURL = "http://localhost:3000/auth/signup";

const cookies = new Cookies();

function Signup({ setIsLogin }) {
  const user = false;
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function submitHandler(e) {
    e.preventDefault();
    console.log(userData);
    // const { name, username, email, password, confirmPassword } = userData;
 
    const { data: { jwt, stream, newUser: { _id, username, hashedPassword } } } = axios
      .post(apiURL, userData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    console.log(data);
    cookies.set("id", _id);
    cookies.set("jwt", jwt);
    cookies.set("stream", stream);
    cookies.set("username", username);
    cookies.set("hashedPassword", hashedPassword);
    navigate('./posts');
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <img src={logo} alt="logo" width="70%" />
      </div>

      <Typography variant="h4" color="white">
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={submitHandler} sx={{ p: 3 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Name"
              name="name"
              required
              fullWidth
              id="Name"
              autoFocus
              value={userData.name}
              onChange={handleChange}
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
              value={userData.username}
              onChange={handleChange}
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
              value={userData.email}
              onChange={handleChange}
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
              value={userData.password}
              onChange={handleChange}
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
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
              sx={{
                input: { color: "white" },
                border: "1px solid#fff",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            {/* <Link to="./posts"> */}
            <Button fullWidth type="submit" variant="contained">
              Sign Up
            </Button>
            {/* </Link> */}
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography pb={1} variant="h6" color="white">
              OR
            </Typography>
            <GoogleLogin
              align="center"
              shape="pill"
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
