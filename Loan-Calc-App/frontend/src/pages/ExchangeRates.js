import React, { useEffect, useState } from "react";
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

function ExchangeRates() {
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then(res => res.json())
      .then(data => setRates(data.rates));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Live Exchange Rates (Base: USD)</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell>Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(rates).map(currency => (
            <TableRow key={currency}>
              <TableCell>{currency}</TableCell>
              <TableCell>{rates[currency]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default ExchangeRates;