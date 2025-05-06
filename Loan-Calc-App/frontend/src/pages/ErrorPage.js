import React from "react";
import { Container, Typography } from "@mui/material";

function ErrorPage() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>404</Typography>
      <Typography variant="h5">Oops! Page not found.</Typography>
    </Container>
  );
}

export default ErrorPage;