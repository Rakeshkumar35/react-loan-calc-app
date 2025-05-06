import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

const LoanCalculator = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(amount);
    const R = parseFloat(rate) / 1200;
    const N = parseFloat(term) * 12;

    const emiVal = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(emiVal.toFixed(2));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Loan Calculator Dashboard</Typography>
      <TextField label="Loan Amount" value={amount} onChange={e => setAmount(e.target.value)} margin="normal" />
      <TextField label="Interest Rate (%)" value={rate} onChange={e => setRate(e.target.value)} margin="normal" />
      <TextField label="Term (Years)" value={term} onChange={e => setTerm(e.target.value)} margin="normal" />
      <br />
      <Button variant="contained" onClick={calculateEMI}>Calculate</Button>
      {emi && <Typography variant="h6">Monthly EMI: ₹{emi}</Typography>}
    </Container>
  );
};

export default LoanCalculator;