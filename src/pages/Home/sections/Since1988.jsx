import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Since1988Image from "../../../images/Since1988Image.png"
import TypingText from "../../../components/TypingText.jsx"

export default function Since1988() {
  return (
    <Box
      sx={{ background: "white", height: "500px", borderTop: "1px solid black", display: "flex", "@media (max-width: 600px)": {
        flexDirection: "column", height: "1000px", position: "relative"
      },}}
    >
      <Box sx={{ flex: 1, borderRight: "1px solid black", padding: "3rem", "@media (max-width: 800px)": {
        padding: "1rem",
      },"@media (min-width: 600px)": {
        overflow: "scroll"
      },"@media (max-width: 600px)": {
        padding: "3rem",
        borderBottom: "1px solid black"
      },}}>
        <TypingText
          textStyle={{
            fontFamily: "Space Grotesk",
            fontSize: "54px",
            color: "#4470B6",
            marginBottom: "3%",
            textAlign: "left",
          }}
          words={["Since 1988"]}
          noDelete={true}
        />
        <Typography
          sx={{ fontFamily: "Inter", fontSize: "20px", color: "#667085",}}
        >
          ASES (Affiliated Stanford Entrepreneurial Students) was founded at
          Stanford University in 1998 with the goal of connecting student
          entrepreneurs all over the world. Today, active ASES chapters provide
          educational programs on entrepreneurship, design, and venture capital
          for students across the globe. We challenge our members to think
          beyond Silicon Valley and solve global problems.
        </Typography>
      </Box>
      <Box style={{ flex: 1, backgroundColor: "rgba(236, 132, 140, 0.44)", overflow: "hidden", height: "500px", width: "100%" }}>
  <img src={Since1988Image} alt={"Since1988Image"} style={{ height: "100%", width: "100%", objectFit: "cover" }} />
</Box>

    </Box>
  )
}
