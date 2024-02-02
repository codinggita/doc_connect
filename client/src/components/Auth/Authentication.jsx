import React, { useState } from "react";
import bg from "../../assets/bg.jpg";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Login from "./Login";
import Signup from "./Signup";
import { Card, Container } from "@mui/material";

function Authentication() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password, phoneNumber, avatarURL } = form;

    const URL = "https://localhost:5000/auth";
    // const URL = 'https://medical-pager.herokuapp.com/auth';

    const {
      data: { token, userId, hashedPassword, fullName },
    } = await axios.post(`${URL}/${isLogin ? "login" : "signup"}`, {
      username,
      password,
      id,
    });

    cookies.set("stream", stream);
    cookies.set("jwt", jwt);
    cookies.set("id", id);
    cookies.set("username", username);

    if (isSignup) {
      cookies.set("hashedPassword", hashedPassword);
    }

    window.location.reload();
  };

  return (
    <Container
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          margin: "auto",
          minHeight: "80vh",
          width: "30rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 13, 46, .84)",
        }}
      >
        <img src={logo} alt="logo" width="80%" />

        {isLogin ? (
          <Login setIsLogin={setIsLogin} />
        ) : (
          <Signup setIsLogin={setIsLogin} />
        )}
      </Card>
    </Container>
  );
}

export default Authentication;
