import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      textAlign: "center",
      padding: "1rem",
      marginTop: "2rem",
      backgroundColor: "#1976d2",
      color: "white",
    }}
  >
    <Typography variant="body2">
      © {new Date().getFullYear()} All rights reserved — Nikola
    </Typography>
  </Box>
);

export default Footer;
