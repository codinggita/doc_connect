import React from "react";
import "../../App.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Container, Stack, Typography, Modal, Backdrop } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Navbar from "../Navbar";

const PostDetailsModal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.postData;
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };

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
          style={{
            borderColor: "white",
            backgroundColor: "white",
            display: "flex",
            zIndex: "1300",
            maxWidth: "90vw",
            height: "80vh",
          }}
          sx={{
            flexDirection: { lg: "row", xs: "column", md: "column" },
          }}
        >
          <img
            style={{
              objectFit: "contain",
              padding: "1rem",
              height: "auto",
              maxWidth: "90vw",
            }}
            src={data.image}
            alt="post"
          />

          <Stack style={{ overflowY: "scroll" }}>
            <Typography
              pl={2}
              pt={2}
              style={{ textDecoration: "underline" }}
              variant="h6"
              fontFamily="cursive"
              color="initial"
            >
              {data.user}
            </Typography>
            <Typography pl={2} pr={2} pt={2} color="initial">
              {data.content}
            </Typography>
            <Typography pl={2} pt={1} variant="h6" color="initial">
              <FavoriteIcon pr={2} color="primary" />
              {data.likes.length}
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              style={{ textDecoration: "underline" }}
              fontFamily="cursive"
              color="initial"
            >
              Comments
            </Typography>
            <Typography style={{}} pl={3} pt={1} variant="h6" color="initial">
              {data.comments.map((comment, index) => (
                <Typography key={index} color="initial">
                  {comment.user}: {comment.text}
                </Typography>
              ))}
            </Typography>
          </Stack>
        </Box>
      </Modal>
    </Container>
  );
};

export default PostDetailsModal;
