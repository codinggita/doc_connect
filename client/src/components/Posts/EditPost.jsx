import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../App.css";
import {
  Box,
  Container,
  TextField,
  Typography,
  Backdrop,
  Button,
  Modal,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Navbar from "../Navbar";

const EditPost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.postData;
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <Container
      padding={3}
      style={{
        height: "100vh",
      }}
    >
      <Navbar />

      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={open}
        onClose={handleClose}
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box
          component="form"
          noValidate
          onSubmit={submitHandler}
          style={{
            borderColor: "white",
            backgroundColor: "rgba(0, 13, 46, .84)",
            zIndex: "1300",
            padding: "1rem",
          }}
          sx={{
            width: { lg: "25vw", sm: "50vw" },
          }}
        >
          <Typography
            variant="h4"
            color="white"
            style={{
              textAlign: "center",
              padding: "1rem 2rem",
            }}
          >
            Edit Post
          </Typography>

          <TextField
            value={data.content}
            name="caption"
            required
            fullWidth
            id="caption"
            autoFocus
            sx={{
              input: { color: "white" },
              border: "1px solid#fff",
            }}
          />

          <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Edit Post
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default EditPost;
