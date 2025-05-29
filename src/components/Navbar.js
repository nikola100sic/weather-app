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
  useMediaQuery,
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

  // responsivnost
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const [input, setInput] = useState("");
  const [showInputXs, setShowInputXs] = useState(false); // prikaz polja na telefonu

  const handleSearch = () => {
    if (input.trim()) {
      onChangeCity(input.trim());
      setInput("");
    }
    if (isXs) setShowInputXs(false); // sakrije polje na telefonu
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          p: { xs: 1, sm: 2 },
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <WbSunnyIcon sx={{ fontSize: { xs: 20, sm: 28 } }} />
          WeatherApp
        </Typography>

        {/* Kontrole */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 2 },
            flexGrow: 1,
            justifyContent: { xs: "center", sm: "flex-end" },
          }}
        >
          {/* Select za brzi izbor grada */}
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
              minWidth: { xs: 80, sm: 100 },
              mr: { xs: 0, sm: 1 },
            }}
          >
            <MenuItem value="Belgrade">Belgrade</MenuItem>
            <MenuItem value="Novi Sad">Novi Sad</MenuItem>
            <MenuItem value="Niš">Niš</MenuItem>
          </Select>

          {/* Search – na telefonu prvo samo ikonica */}
          {(showInputXs || !isXs) && (
            <TextField
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              size="small"
              placeholder="Search city"
              variant="outlined"
              autoFocus={isXs && showInputXs}
              onBlur={() => isXs && setShowInputXs(false)}
              sx={{
                width: { xs: 120, sm: 150, md: 200 },
                input: {
                  color: theme.palette.mode === "dark" ? "white" : "black",
                  p: { xs: "4px 8px", sm: "6px 12px" },
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
          )}

          {/* Ikonica za search (uvek), ili za otvaranje polja na XS */}
          {isXs && !showInputXs ? (
            <IconButton
              onClick={() => setShowInputXs(true)}
              color="inherit"
              sx={{ p: 0.5 }}
            >
              <SearchIcon fontSize="small" />
            </IconButton>
          ) : (
            <IconButton
              onClick={handleSearch}
              color="inherit"
              sx={{ p: { xs: 0.5, sm: 1 } }}
            >
              <SearchIcon fontSize={isXs ? "small" : "medium"} />
            </IconButton>
          )}

          {/* Dark / Light toggle */}
          <IconButton
            onClick={colorMode.toggleColorMode}
            color="inherit"
            sx={{ p: { xs: 0.5, sm: 1 } }}
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon fontSize={isXs ? "small" : "medium"} />
            ) : (
              <Brightness4Icon fontSize={isXs ? "small" : "medium"} />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
