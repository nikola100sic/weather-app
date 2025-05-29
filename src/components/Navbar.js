import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../ThemeContext";

const Navbar = ({ city, onChangeCity }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      onChangeCity(input.trim());
      setInput("");
    }
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <WbSunnyIcon />
          WeatherApp
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Select
            value={city}
            onChange={(e) => {
              onChangeCity(e.target.value);
              setInput("");
            }}
            variant="standard"
            sx={{
              color: "white",
              borderBottom: "1px solid white",
              "& .MuiSelect-icon": { color: "white" },
              minWidth: "100px",
            }}
          >
            <MenuItem value="Belgrade">Belgrade</MenuItem>
            <MenuItem value="Novi Sad">Novi Sad</MenuItem>
            <MenuItem value="Niš">Niš</MenuItem>
          </Select>

          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            size="small"
            placeholder="Search city"
            variant="outlined"
            sx={{
              input: {
                color: theme.palette.mode === "dark" ? "white" : "black",
              },
              "& .MuiOutlinedInput-root": {
                backgroundColor:
                  theme.palette.mode === "dark" ? "#333" : "white",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
            }}
          />

          <IconButton onClick={handleSearch} color="inherit">
            <SearchIcon />
          </IconButton>

          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
