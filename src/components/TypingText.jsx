import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TypingText = ({ words, noDelete, textStyle }) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Get the current word from the array
  const currentWord = words[wordIndex];

  useEffect(() => {
    const typingSpeed = 100; // Adjust typing speed in milliseconds
    const deleteSpeed = 100; // Adjust deleting speed in milliseconds
    const delay = isDeleting ? deleteSpeed : typingSpeed;

    const timeoutId = setTimeout(() => {
      if (isDeleting && !noDelete) {
        setDisplayText((prevText) => prevText.slice(0, -1));
        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setDisplayText((prevText) => currentWord.slice(0, prevText.length + 1));
        if (displayText === currentWord) {
          setIsDeleting(true);
        }
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, currentWord, words, noDelete]);

  return (
    <Box textAlign="center">
      <Typography sx={textStyle}>
        {displayText}
      </Typography>
    </Box>
  );
};

export default TypingText;
