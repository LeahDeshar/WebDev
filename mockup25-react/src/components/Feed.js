import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

// import { createTheme, ThemeProvider } from "@mui/material";
// // to create the theme first import createTheme
// // Then to utilize it import themeProvider
// const theme = createTheme({
//   // created the theme
//   components: {
//     // we want to manipulate the typography
//     MuiTypography: {
//       // update the variants
//       variants: [
//         {
//           props: {
//             // if the variant is equal to body2 that element will have fontsize=11px
//             variant: "body2",
//           },
//           style: {
//             fontSize: 11,
//           },
//         },
//         {
//           props: {
//             variant: "body3",
//           },
//           style: {
//             fontSize: 9,
//           },
//         },
//       ],
//     },
//   },
// });
const Feed = () => {
  return (
    <Box flex={4} p={"2"}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
