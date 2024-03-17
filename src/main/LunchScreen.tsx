// LunchScreen.tsx

import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TypewriterEffectSmooth from "./TypewriterEffectSmooth"; // Import the missing component
import { Link } from "react-router-dom";

const LunchScreen: React.FC = () => {
  const words = ["The", "future", "of", "cycling", "is", "here", "-", "Aura"];

  return (
    <div className="typewriter-container">
      <Typography variant="h3" className="static-text">
        The road to freedom starts from here
      </Typography>
      <TypewriterEffectSmooth words={words} />
      <div className="buttonContainer">
        <Button
          variant="outlined"
          className="join-button"
          component={Link}
          to="/landingPage"
          style={{
            textTransform: "capitalize",
            textDecoration: "none",
            borderRadius: "12px",
          }}
        >
          Join Now
        </Button>
        <Button
          variant="contained"
          className="signup-button"
          component={Link}
          to="/SignUp"
          style={{
            textTransform: "capitalize",
            textDecoration: "none",
            color: "inherit",
            borderRadius: "12px",
          }}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default LunchScreen;
