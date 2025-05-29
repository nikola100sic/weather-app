import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import OpacityIcon from "@mui/icons-material/Opacity";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

const WeatherCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  const { dt_txt, main, weather } = data;
  const condition = weather[0].main;
  const theme = useTheme();

  const icon = {
    Clear: <WbSunnyIcon color="warning" />,
    Clouds: <CloudIcon color="action" />,
    Rain: <OpacityIcon color="primary" />,
  }[condition] || <CloudIcon />;

  return (
    <>
      <Card
        sx={{
          backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "white",
          color: theme.palette.mode === "dark" ? "white" : "black",
          marginBottom: 1,
        }}
      >
        <CardActionArea onClick={() => setOpen(true)}>
          <CardContent>
            <Box display="flex" alignItems="center" gap={1}>
              {icon}
              <Typography variant="h6">
                {new Date(dt_txt).toLocaleDateString("sr-RS", {
                  day: "2-digit",
                  month: "2-digit",
                })}
              </Typography>
            </Box>
            <Typography variant="body1">Condition: {condition}</Typography>
            <Typography variant="body2">
              Temp: {main.temp}°C (Min: {main.temp_min}°C / Max: {main.temp_max}
              °C)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>
          Details - {new Date(dt_txt).toDateString()}
          <IconButton
            aria-label="close"
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Weather: <strong>{weather[0].description}</strong>
          </Typography>
          <Typography gutterBottom>
            Temperature: <strong>{main.temp}°C</strong>
          </Typography>
          <Typography gutterBottom>
            Feels Like: <strong>{main.feels_like}°C</strong>
          </Typography>
          <Typography gutterBottom>
            Min/Max: {main.temp_min}°C / {main.temp_max}°C
          </Typography>
          <Typography gutterBottom>Humidity: {main.humidity}%</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WeatherCard;
