import React from "react";
import { Container, Typography } from "@mui/material";

function About() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>About This App</Typography>
      <Typography variant="body1">
        This Loan Calculator App allows users to calculate EMI (Equated Monthly Installments)
        for a loan based on amount, interest rate, and duration. It also features real-time
        exchange rates and theme switching.
      </Typography>
    </Container>
  );
}

export default About;