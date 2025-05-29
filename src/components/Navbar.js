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
          flexWrap: "wrap", // Omogućava prelamanje na mobilnim
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Leva strana: Logo */}
        <Typography
          variant="h6"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <WbSunnyIcon />
          WeatherApp
        </Typography>

        {/* Desna strana: Select + Search + Icons */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 2,
            justifyContent: { xs: "center", sm: "flex-end" },
            flexGrow: 1,
          }}
        >
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
              minWidth: "150px",
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
