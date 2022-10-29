import { Box, Button } from "@mui/material";
import React from "react";
import "./App.css";
function Feature({ image, head, content }) {
  return (
    <div>
      <Box>
        <img src={image} alt="" width={"80%"} style={{ marginTop: "50px" }} />
        <h1 className="blue" style={{ fontSize: "32px" }}>
          {head}
        </h1>
        <p
          style={{
            fontSize: "21px",
            color: "#212121e4",
            width: "90%",
            margin: "auto",
          }}
        >
          {content}
        </p>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fd853d",
            letterSpacing: "3px",
            color: "#fff",
            borderRadius: "30px",
            fontSize: "22px",
            fontWeight: "300",
            paddingX: "45px",
            paddingY: "5px",
            marginY: "20px",
          }}
        >
          MORE
        </Button>
      </Box>
    </div>
  );
}

export default Feature;
