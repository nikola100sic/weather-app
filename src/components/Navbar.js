import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../ThemeContext";
import { useTheme } from "@mui/material/styles";

const Navbar = ({ city, onChangeCity }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">WeatherApp</Typography>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Select
            value={city}
            onChange={(e) => onChangeCity(e.target.value)}
            variant="standard"
            sx={{
              color: "white",
              borderBottom: "1px solid white",
              "& .MuiSelect-icon": { color: "white" },
            }}
          >
            <MenuItem value="Belgrade">Belgrade</MenuItem>
            <MenuItem value="Novi Sad">Novi Sad</MenuItem>
            <MenuItem value="Niš">Niš</MenuItem>
          </Select>

          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
