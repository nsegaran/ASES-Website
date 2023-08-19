import Box from "@mui/material/Box";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import LongButtonWOArrow from "../../../components/LongButtonWOArrow"
import "./TeamProfiles.css"
import ProfileCard from "../../../components/ProfileCard.jsx";
import profileData from "../../../textContent/teamProfileCards.json";
import video from "../../../images/bootcamp-hero-gradient.mp4";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IconButton from "@mui/material/IconButton";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export default function TeamProfile() {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handleNextCard = () => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % profileData.length);
    };
  
    const handleBackCard = () => {
      setCurrentCardIndex((prevIndex) =>
        prevIndex === 0 ? profileData.length - 1 : prevIndex - 1
      );
    };

    return(
        <Box className="profile_cards">
        <video className="teams_gradient"
    
    autoPlay
    loop
    muted
  >
    <source src={video} type="video/mp4" />
  </video>
  <Box className="desktop">
    <Box className="grid-container">
    {profileData.map((m) => {
      return (
        <ProfileCard
          name={m.name}
          role={m.role}
          hoveredText={m.description}
          image={m.image}
          hover={false}
        />
      );
    })}
    </Box>
  </Box>
  <Box className="mobile">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "40px"
          }}
        >
          <IconButton
            edge="start"
            onClick={handleBackCard}
            sx={{ backgroundColor: "black", borderRadius: 3, margin: "40px" }}
          >
            <NavigateBeforeIcon sx={{ color: "white" }} />
          </IconButton>
          <ProfileCard
            name={profileData[currentCardIndex].name}
            role={profileData[currentCardIndex].role}
            hoveredText={profileData[currentCardIndex].description}
            image={profileData[currentCardIndex].image}
          />
          <IconButton
            edge="start"
            onClick={handleNextCard}
            sx={{ backgroundColor: "black", borderRadius: 3, margin: "40px" }}
          >
            <NavigateNextIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
</Box>
    );

}