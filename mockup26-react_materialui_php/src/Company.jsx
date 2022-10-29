import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Company = () => {
  return (
    <div style={{ backgroundColor: "#291569" }}>
      <Box sx={{ width: "75%", marginX: "auto", paddingY: "5%" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ textAlign: "center", position: "relative", marginTop: "5%" }}
          >
            <span className="underline"></span>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "600",
                fontSize: "63px",
                color: "#fd853d",
                width: "50%",
                marginX: "auto",
                textAlign: "center",
                marginTop: "12px",
              }}
            >
              Website Development Company
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
                width: "80%",
                marginX: "auto",
                fontWeight: "300",
                marginY: "4%",
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#fff", fontSize: "18px" }}
            >
              Images from
              <a href="index.html" className="line">
                Freepik
              </a>
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                paddingX: "30px",
                paddingY: "8px",
                marginTop: "45px",
                borderRadius: "5px",
                borderColor: "#fd853d",
                fontSize: "20px",
              }}
            >
              LEARN MORE
            </Button>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ marginTop: "3%" }}>
            <img
              src={require("./assets/img2.png")}
              alt="image2"
              style={{ width: "90%", marginLeft: "4%" }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Company;
