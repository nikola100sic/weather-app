import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const activities = {
  Clear: [
    "Walk in Petrovaradin",
    "Cycling tours along the Danube",
    "Visit Museum of Vojvodina",
  ],
  Clouds: [
    "Visit Museum of Novi Sad",
    "Coffee at Trčika",
    "Shopping at Promenada",
  ],
  Rain: [
    "Brunch at Project 72",
    "Visit an art gallery",
    "Watch a movie at Arena Cineplex",
  ],
  Snow: ["Stay indoors", "Read a book", "Hot drink with friends"],
  Default: [
    "Explore Novi Sad",
    "Visit a local cafe",
    "Relax and enjoy your day",
  ],
};

const ActivitySuggestions = ({ weather }) => {
  const suggestions = activities[weather] || activities["Default"];

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
