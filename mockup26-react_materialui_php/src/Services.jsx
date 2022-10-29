import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./App.css";
const Services = () => {
  return (
    <div style={{ backgroundColor: "#291569", height: "180vh" }}>
      <Box sx={{ width: "75%", margin: "auto" }}>
        <Typography
          variant="h3"
          sx={{
            color: "#fd853d",
            fontWeight: "700",
            fontSize: "56px",
            textAlign: "center",
            padding: "100px 0 0 0",
          }}
        >
          Our Design Services
        </Typography>
        <p
          style={{
            textAlign: "center",
            fontSize: "25px",
            color: "#fff",
            width: "75%",
            margin: "auto",
            padding: "25px 0 55px 0",
          }}
        >
          Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus .
          Phasellus sed efficitur dolor, et ultricies sapien.
        </p>
        <Box sx={{ position: "relative" }}>
          <Grid container>
            <Grid item lg={4} md={10}>
              <img
                src={require("./assets/d1.jpg")}
                alt="image1"
                className="imgD"
              ></img>
            </Grid>
            <Grid item lg={4} md={10}>
              <img
                src={require("./assets/d2.jpg")}
                alt="image1"
                className="imgD"
              ></img>
            </Grid>
            <Grid item lg={4} md={10}>
              <img
                src={require("./assets/d3.jpg")}
                alt="image1"
                className="imgD"
              ></img>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ position: "absolute", bottom: "3%", color: "#fff" }}
          >
            <Grid item lg={4} md={10} sx={{ padding: "0 3%" }}>
              <h3 style={{ fontSize: "34px", margin: "0" }}>
                Our Design Services
              </h3>
              <p
                style={{
                  fontSize: "50px",
                  margin: "0",
                  lineHeight: "40px",
                }}
              >
                ............
              </p>
              <p style={{ fontSize: "22px" }}>
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </p>
            </Grid>
            <Grid item lg={4} md={10} sx={{ padding: "0 3%" }}>
              <h3 style={{ fontSize: "34px", margin: "0" }}>Custom Projects</h3>
              <p
                style={{
                  fontSize: "50px",
                  margin: "0",
                  lineHeight: "40px",
                }}
              >
                ............
              </p>
              <p style={{ fontSize: "22px" }}>
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </p>
            </Grid>
            <Grid item lg={4} md={10} sx={{ padding: "0 3%" }}>
              <h3 style={{ fontSize: "34px", margin: "0" }}>Flexible Budget</h3>
              <p
                style={{
                  fontSize: "50px",
                  margin: "0",
                  lineHeight: "40px",
                }}
              >
                ............
              </p>
              <p style={{ fontSize: "22px" }}>
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </p>
            </Grid>
          </Grid>
        </Box>
        <p
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "22px",
            padding: "30px",
          }}
        >
          Images from Freepik
        </p>
      </Box>
    </div>
  );
};

export default Services;
