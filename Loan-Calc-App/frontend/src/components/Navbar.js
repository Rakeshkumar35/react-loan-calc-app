import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Switch,
  Box
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Navbar({ toggleTheme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "Exchange Rates (Live)", path: "/exchange-rates" },
    { text: "About", path: "/about" },
    { text: "Error Page", path: "/error" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ mb: 2 }}>
        <Toolbar>
          
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", sm: "none" }, mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

         
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Button color="inherit" component={Link} to="/" sx={{ textTransform: "none" }}>
              Loan Calculator
            </Button>
          </Typography>

          
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((link) => (
              <Button key={link.text} color="inherit" component={Link} to={link.path}>
                {link.text}
              </Button>
            ))}
            <Switch onChange={toggleTheme} />
          </Box>
        </Toolbar>
      </AppBar>

      
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.text} component={Link} to={link.path}>
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
            <ListItem>
              <ListItemText primary="Dark Mode" />
              <Switch onChange={toggleTheme} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
