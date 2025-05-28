import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const activities = {
  Clear: ["Walk in Kalemegdan", "Bike ride at Ada", "Visit Tesla Museum"],
  Clouds: ["Visit Museum of Yugoslavia", "Coffee at Kafeterija", "Shopping at Galerija"],
  Rain: ["Brunch at Manufaktura", "Visit an art gallery", "Watch a movie"],
  Snow: ["Stay indoors", "Read a book", "Hot drink with friends"],
  Default: ["Explore the city", "Visit a local cafe", "Relax and enjoy your day"]
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