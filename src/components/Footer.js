import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#1976d2",
        color: "white",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Nikola. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
