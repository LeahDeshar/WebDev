import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./App.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Planning = () => {
  return (
    <Box
      sx={{
        height: "auto",
        backgroundColor: "#291569",
        paddingBottom: "150px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ width: "80%", margin: "auto", paddingTop: "7%", color: "#fff" }}
      >
        <Grid item lg={6}>
          <div
            style={{
              textAlign: "center",
              position: "relative",
              top: "30%",
            }}
          >
            <img
              src={require("./assets/p1.png")}
              alt="p1"
              style={{ width: "45%" }}
            />
            <h1
              style={{
                letterSpacing: "4px",
                fontSize: "30px",
                fontWeight: "500",
              }}
            >
              APP DEVELOPMENT
            </h1>
            <p
              style={{
                fontSize: "25px",
                fontWeight: "400",
                width: "75%",
                margin: "25px auto",
                paddingBottom: "5%",
              }}
            >
              Develop an on-demand app for your delivery business to reach your
              targeted customers without any interruption.
            </p>
            <span
              style={{
                borderRadius: "50%",
                width: "20px",
                padding: "22px 33px",
                backgroundColor: "#fd853d",
                position: "relative",
              }}
            >
              <ArrowDownwardIcon
                sx={{
                  marginTop: "10px ",
                  fontSize: "35px",
                  position: "absolute",
                  top: "5%",
                  right: "21%",
                }}
              />
            </span>
          </div>
        </Grid>
        <Grid item lg={6}>
          <img
            src={require("./assets/p2.png")}
            alt="p1"
            style={{ width: "70%", margin: "0 0 10% 10%" }}
          />
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                color: "#fd853d",
                fontSize: "65px",
                lineHeight: "70px",
                width: "50%",
                margin: "auto",
                padding: "4% 0",
              }}
            >
              Strategic Planning
            </h1>
            <p
              style={{
                fontSize: "22px",
                fontWeight: "400",
                width: "75%",
                margin: "25px auto",
                paddingBottom: "5%",
                lineHeight: "32px ",
              }}
            >
              Egestas dui id ornare arcu odio. In tellus integer feugiat
              scelerisque varius morbi enim nunc. Habitasse platea dictumst
              quisque sagittis. Interdum velit euismod in pellentesque massa
              placerat duis. Quis viverra nibh cras pulvinar mattis.
            </p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Planning;
