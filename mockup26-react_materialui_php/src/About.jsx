import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
const About = () => {
  return (
    <Box sx={{ backgroundColor: "#e5e5e5", paddingBottom: "1px" }}>
      <Box
        sx={{
          width: "80%",
          marginX: "auto",
        }}
      >
        <Grid container spacing={2} sx={{ marginBottom: "10%" }}>
          <Grid item lg={6} md={12} sx={{ alignItems: "center" }}>
            <img
              src={require("./assets/img1.png")}
              alt="image"
              style={{ width: "80%", position: "relative", top: "29%" }}
            ></img>
          </Grid>
          <Grid item lg={6} md={12}>
            <Typography
              variant="h2"
              sx={{
                marginTop: "15%",
                marginBottom: "3%",
                color: "#291569",
                fontWeight: "600",
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#999",
                fontSize: "20px",
                lineHeight: "28px",
                width: "90%",
                letterSpacing: "1px",
                marginBottom: "5%",
              }}
            >
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#291569", fontWeight: "800" }}
            >
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </Typography>
            <Card
              sx={{
                minWidth: 175,
                width: "43%",
                backgroundColor: "#291569",
                position: "relative",
                top: "11%",
                left: "50%",
                borderRadius: "5px",
              }}
            >
              <CardContent sx={{ padding: "30px" }}>
                <Typography
                  sx={{ fontSize: 20, color: "#fff" }}
                  color="text.secondary"
                  gutterBottom
                >
                  <CheckIcon
                    sx={{
                      position: "relative",
                      top: "5px",
                      paddingRight: "9px",
                    }}
                  />
                  Sample text, Click to
                </Typography>
                <Typography
                  sx={{ fontSize: 20, color: "#fff" }}
                  color="text.secondary"
                  gutterBottom
                >
                  <CheckIcon
                    sx={{
                      position: "relative",
                      top: "5px",
                      paddingRight: "9px",
                    }}
                  />
                  Sample text, Click to
                </Typography>
                <Typography
                  sx={{ fontSize: 20, color: "#fff" }}
                  color="text.secondary"
                  gutterBottom
                >
                  <CheckIcon
                    sx={{
                      position: "relative",
                      top: "5px",
                      paddingRight: "9px",
                    }}
                  />
                  Sample text, Click to
                </Typography>
                <Typography
                  sx={{ fontSize: 20, color: "#fff" }}
                  color="text.secondary"
                  gutterBottom
                >
                  <CheckIcon
                    sx={{
                      position: "relative",
                      top: "5px",
                      paddingRight: "9px",
                    }}
                  />
                  Sample text, Click to
                </Typography>
                <Typography
                  sx={{ fontSize: 20, color: "#fff" }}
                  color="text.secondary"
                  gutterBottom
                >
                  <CheckIcon
                    sx={{
                      position: "relative",
                      top: "5px",
                      paddingRight: "9px",
                    }}
                  />
                  Sample text, Click to
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
