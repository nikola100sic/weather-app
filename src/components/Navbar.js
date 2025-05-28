import React from "react";
import { AppBar, Toolbar, Typography, Select, MenuItem } from "@mui/material";

const Navbar = ({ city, onChangeCity }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        WeatherApp
      </Typography>
      <Select
        value={city}
        onChange={(e) => onChangeCity(e.target.value)}
        sx={{
          color: "white",
          borderBottom: "1px solid white",
          backgroundColor: "transparent",
        }}
      >
        <MenuItem value="Belgrade">Belgrade</MenuItem>
        <MenuItem value="Novi Sad">Novi Sad</MenuItem>
        <MenuItem value="Niš">Niš</MenuItem>
      </Select>
    </Toolbar>
  </AppBar>
);

export default Navbar;
