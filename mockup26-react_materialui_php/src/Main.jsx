import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./App.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Main = () => {
  return (
    <>
      <Box className="box" sx={{ display: "flex", alignItems: "flex-end" }}>
        <ArrowBackIosIcon
          sx={{
            position: "relative",
            left: "11%",
            bottom: "30%",
            color: "#fff",
          }}
        />
        <Box
          sx={{
            width: "42%",
            position: "relative",
            left: "13%",
            bottom: "15%",
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "#fd853d", fontWeight: "800", paddingY: "30px" }}
          >
            Branding Concepts
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#fff", paddingBottom: "20px" }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#fff", paddingBottom: "32px" }}
          >
            Image from{" "}
            <a href="index.js" className="line">
              Freepik
            </a>
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              paddingX: "30px",
              paddingY: "8px",
              marginTop: "20px",
              borderRadius: "5px",
              borderColor: "#fd853d",
              fontSize: "20px",
            }}
          >
            LEARN MORE
          </Button>
        </Box>
        <ArrowForwardIosIcon
          sx={{
            position: "relative",
            left: "12%",
            bottom: "30%",
            color: "#fff",
          }}
        />
      </Box>
    </>
  );
};
export default Main;
