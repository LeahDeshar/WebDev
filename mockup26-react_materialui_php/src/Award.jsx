import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./App.css";

const Award = () => {
  return (
    <Box className="gridMenu">
      <section style={{ width: "75%", margin: "auto" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "600",
            textAlign: "center",
            margin: "20px 0 50px 0",
            color: "#fd853d",
            fontSize: "70px",
          }}
        >
          Awards
        </Typography>
        <Grid container spacing={4}>
          <Grid item lg={4} sm={10}>
            <div className="Agrid" style={{ padding: "10px 20px" }}>
              <p style={{ fontSize: "25px" }}>
                <span style={{ color: "#f82b58", padding: "50px 10px" }}>
                  5
                </span>{" "}
                Webby Awards
              </p>
              <p style={{ fontSize: "25px" }}>
                <span style={{ color: "#f82b58", padding: "50px 10px" }}>
                  2
                </span>{" "}
                Cannes Gold Integrated Lions
              </p>
              <p style={{ fontSize: "25px" }}>
                <span style={{ color: "#f82b58", padding: "50px 10px" }}>
                  2
                </span>{" "}
                D&AD Digital Design
              </p>
              <p style={{ fontSize: "25px" }}>
                <span style={{ color: "#f82b58", padding: "50px 10px" }}>
                  2
                </span>{" "}
                ADC Digital
              </p>
            </div>
          </Grid>
          <Grid item lg={4} sm={10}>
            <div className="Agrid" style={{ padding: "10px 20px" }}>
              <p style={{ fontSize: "25px" }}>
                <span style={{ color: "#f82b58", padding: "50px 10px" }}>
                  5
                </span>{" "}
                Webby Awards
              </p>
              <p style={{ fontSize: "25px" }}>
                <span style={{ color: "#f82b58", padding: "50px 10px" }}>
                  2
                </span>{" "}
                Cannes Gold Integrated Lions
              </p>
              <p style={{ fontSize: "25px" }}>
                <span style={{ color: "#f82b58", padding: "50px 10px" }}>
                  2
                </span>{" "}
                D&AD Digital Design
              </p>
              <p style={{ fontSize: "25px" }}>
                <span style={{ color: "#f82b58", padding: "50px 10px" }}>
                  2
                </span>{" "}
                ADC Digital
              </p>
            </div>
          </Grid>
          <Grid item lg={4} sm={10}>
            <div className="Agrid" style={{ padding: "10px 25px" }}>
              <p style={{ fontSize: "25px" }}>
                <span style={{ color: "#f82b58", padding: "50px 10px" }}>
                  5
                </span>{" "}
                Webby Awards
              </p>
              <p style={{ fontSize: "25px" }}>
                <span style={{ color: "#f82b58", padding: "50px 10px" }}>
                  2
                </span>{" "}
                Cannes Gold Integrated Lions
              </p>
              <p style={{ fontSize: "25px" }}>
                <span style={{ color: "#f82b58", padding: "50px 10px" }}>
                  2
                </span>{" "}
                D&AD Digital Design
              </p>
              <p style={{ fontSize: "25px" }}>
                <span style={{ color: "#f82b58", padding: "50px 10px" }}>
                  2
                </span>{" "}
                ADC Digital
              </p>
            </div>
          </Grid>
        </Grid>
        <Box sx={{ width: "75%", margin: "50px auto", textAlign: "center" }}>
          <Button
            variant="outlined"
            sx={{
              color: "#000",
              paddingX: "30px",
              paddingY: "8px",
              marginTop: "20px",
              borderRadius: "12px",
              border: "2px solid #fd853d",

              fontSize: "20px",
            }}
          >
            LEARN MORE
          </Button>
        </Box>
      </section>
    </Box>
  );
};

export default Award;
