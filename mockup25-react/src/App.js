import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Box, createTheme } from "@mui/material";
import { Stack } from "@mui/system";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Add from "./components/Add";
import { ThemeProvider } from "styled-components";
const App = () => {
  const [modeC, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: modeC,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction={"row"} spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={modeC} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
