import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Box, Grid, Typography, TextField, Button, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions } from "@mui/material";
import Cookies from "universal-cookie";
import axios from "axios";
const apiURL = "http://localhost:3000/auth/signin";

const cookies = new Cookies();

function Login({ setIsLogin }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();

    if (userData.username == "" || userData.password == "") {
      setOpen(true);
      return;
    }

    const { result } = axios
      .post(apiURL, userData)
      .then((response) => console.log(response))
      .catch(() => {
        setOpen(true);
        return;
      });

    console.log(result);
    navigate("./posts");
    // cookies.set("id", _id);
    // cookies.set("jwt", jwt);
    // cookies.set("stream", stream);
    // cookies.set("username", username);
    // cookies.set("hashedPassword", hashedPassword);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  return (
    <>
      <img src={logo} alt="logo" width="80%" />
      <Typography variant="h4" color="white">
        Login
      </Typography>
      <Box sx={{ p: 3 }} component="form" noValidate onSubmit={submitHandler}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="username"
              placeholder="Username"
              name="username"
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
              id="password"
              placeholder="Password"
              name="password"
              type="password"
              value={userData.password}
              onChange={handleChange}
              sx={{
                input: { color: "white" },
                border: "1px solid#fff",
              }}
            />
          </Grid>
        </Grid>

        {/* <Link to="./posts"> */}
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Log In
        </Button>
        {/* </Link> */}

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

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Invalid Credentials"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please enter correct credentials.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Login;
