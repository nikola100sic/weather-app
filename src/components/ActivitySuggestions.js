import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const activityMap = {
  Belgrade: {
    Clear: [
      "Walk at Kalemegdan",
      "Bike ride at Ada",
      "Visit Nikola Tesla Museum",
    ],
    Rain: [
      "Visit National Museum",
      "Coffee at Kafeterija",
      "Watch a movie at Cineplexx",
    ],
    Clouds: ["Walk through Zemun", "Lunch at Beton Hala", "Shopping at Ušće"],
  },
  "Novi Sad": {
    Clear: [
      "Walk in Petrovaradin",
      "Cycling along the Danube",
      "Visit Museum of Vojvodina",
    ],
    Rain: [
      "Brunch at Project 72",
      "Visit an art gallery",
      "Watch a movie at Arena Cineplex",
    ],
    Clouds: [
      "Visit Museum of Novi Sad",
      "Coffee at Trčika",
      "Shopping at Promenada",
    ],
  },
  Niš: {
    Clear: [
      "Visit Niš Fortress",
      "Stroll by Nišava River",
      "Coffee at Tramvaj",
    ],
    Rain: [
      "Visit National Theater",
      "Coffee at Pleasure",
      "Watch a movie at Cineplex",
    ],
    Clouds: [
      "Walk in Čair park",
      "Lunch at Nislijska mehana",
      "Shopping at Delta Planet",
    ],
  },
};

const ActivitySuggestions = ({ weather, city }) => {
  const cityActivities = activityMap[city] || {};
  const suggestions = cityActivities[weather] || cityActivities["Clear"] || [];

  return (
    <Card sx={{ marginTop: 1 }}>
      <CardContent>
        <Typography variant="subtitle1">Activities:</Typography>
        <ul>
          {suggestions.map((activity, idx) => (
            <li key={idx}>
              <Typography variant="body2">{activity}</Typography>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ActivitySuggestions;
