import React, { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import Feed from "./components/Feed";
// import Navbar from "./components/Navbar";
import {
  AppBar,
  Box,
  styled,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MailIcon from "@mui/icons-material/Mail";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import NotificationsIcon from "@mui/icons-material/Notifications";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  color: "#000",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  color: "#fff",
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  color: "#fff",
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          Navbar
        </Typography>
        <Diversity1Icon
          sx={{
            display: { xs: "block", md: "none" },
          }}
        />
        <Search>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error" paddingX={2}>
            <NotificationsIcon />
          </Badge>

          <Avatar
            alt="Monkey D luffy"
            src={require(`./img.jpg`)}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar alt="Monkey D luffy" src={require(`./img.jpg`)} />
          <Typography variant="span">Luffy</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
