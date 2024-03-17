// TypewriterEffectSmooth.tsx
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import "./lunchScreen.css";

const TypewriterEffectSmooth: React.FC<{ words: string[] }> = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, [index, words.length]);

  return (
    <Typography variant="h3" className="typewriter-text" component="h2">
      {words[index]}
    </Typography>
  );
};

export default TypewriterEffectSmooth;
