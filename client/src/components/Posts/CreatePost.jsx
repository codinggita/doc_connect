import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import "../../App.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Modal,
  Backdrop,
  Button,
} from "@mui/material";
import Navbar from "../Navbar";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const EditProile = () => {
  const navigate = useNavigate();
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
            Create Post
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                placeholder="Caption"
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
            </Grid>
            <Grid item xs={12}>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload photo
                <VisuallyHiddenInput type="file" />
              </Button>
            </Grid>
          </Grid>

          <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Create Post
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default EditProile;
