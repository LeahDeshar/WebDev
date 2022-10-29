import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { DataList } from "./data";
import Feature from "./Feature";
const List = () => {
  return (
    <Box className="gridMenu">
      <div style={{ textAlign: "center" }}>
        <Typography
          variant="body2"
          className="blue"
          sx={{
            fontSize: "30px",
            letterSpacing: "6px",
            paddingBottom: "20px",
            fontWeight: "200",
          }}
        >
          FEATURES
        </Typography>
        <Typography
          variant="h4"
          className="blue"
          sx={{ fontSize: "60px", fontWeight: "800", paddingBottom: "60px" }}
        >
          Our Features & Services
        </Typography>
      </div>
      <Box className="grid">
        {DataList.map((feature, key) => {
          return (
            <Feature
              key={key}
              image={feature.img}
              head={feature.head}
              content={feature.content}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default List;
