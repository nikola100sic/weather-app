import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { Typography, Grid, Box } from "@mui/material";
import WeatherCard from "./components/WeatherCard";
import ActivitySuggestions from "./components/ActivitySuggestions";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Snackbar, Alert } from "@mui/material";

const API_KEY = "4130c5e7df8b63813f75dea963f73b17";

const App = () => {
  const [city, setCity] = useState("Belgrade");
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(false);
  const [cityNotFound, setCityNotFound] = useState(false);

  useEffect(() => {
    if (!city || city.length < 2) return;

    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=24&appid=${API_KEY}`
        );
        const filtered = res.data.list.filter((_, i) => i % 8 === 0);
        setWeatherData(filtered);
        setError(false);
        setWeatherData(filtered);
        setCityNotFound(false);
      } catch (error) {
        console.error("City not found:", error);
        setWeatherData([]);
        setError(true);
        setCityNotFound(true);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar city={city} onChangeCity={setCity} />

      <Box sx={{ padding: 2, flexGrow: 1 }}>
        {cityNotFound ? (
          <Typography align="center" color="error" sx={{ mt: 4 }}>
            No forecast available for <strong>{city}</strong>. Try another city.
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {weatherData.map((data, idx) => (
              <Grid item xs={12} sm={4} key={idx}>
                <WeatherCard data={data} />
                <ActivitySuggestions
                  weather={data.weather[0].main}
                  city={city}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      <Footer />
      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={() => setError(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setError(false)}
          severity="error"
          variant="filled"
        >
          City not found. Please enter a valid city.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default App;
