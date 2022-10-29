import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingY: 2,
            width: "80%",
            margin: "auto",
          }}
        >
          <img src={require("./assets/logo.png")} alt="logo"></img>

          <IconButton size="large" edge="end" color="inherit" aria-label="menu">
            <MenuIcon sx={{ color: "#000", fontSize: "35px" }} />
          </IconButton>
        </Toolbar>
      </Box>
    </>
  );
};
export default Navbar;
