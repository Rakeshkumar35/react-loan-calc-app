import { createTheme } from "@mui/material/styles";
import { useState } from "react";

function useCustomTheme() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleTheme = () => setDarkMode(!darkMode);

  return { theme, toggleTheme };
}

export default useCustomTheme;