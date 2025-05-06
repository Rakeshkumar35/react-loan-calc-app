import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoanCalculator from "./pages/LoanCalculator";
import ExchangeRates from "./pages/ExchangeRates";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useCustomTheme from "./theme";

function App() {
  const { theme, toggleTheme } = useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<LoanCalculator />} />
          <Route path="/exchange-rates" element={<ExchangeRates />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;