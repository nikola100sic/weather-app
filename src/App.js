import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { Typography, Grid, Box } from "@mui/material";
import WeatherCard from "./components/WeatherCard";
import ActivitySuggestions from "./components/ActivitySuggestions";

const API_KEY = "4130c5e7df8b63813f75dea963f73b17";
const CITY = "Belgrade";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&units=metric&cnt=24&appid=${API_KEY}`
      )
      .then((res) => {
        const filtered = res.data.list.filter((_, i) => i % 8 === 0);
        setWeatherData(filtered);
      });
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom align="center">
        Weather & Activity Suggestions for your city
      </Typography>
      <Grid container spacing={2}>
        {weatherData.map((data, idx) => (
          <Grid item xs={12} sm={4} key={idx}>
            <WeatherCard data={data} />
            <ActivitySuggestions weather={data.weather[0].main} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default App;
