import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Footer.css"
import logo_color from "../images/Logo White.png"
import { IconButton } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        marginBottom: -20,
      }}
    >
      <Box>
        <Box sx={{display: "flex"}}>
        <img src={logo_color} alt={"white ASES logo"}></img>
        <Typography sx={{fontFamily: "Space Grotesk", fontSize: "30px", fontWeight: 600, marginLeft: 1}}>ASES</Typography>
        </Box>
        <Typography className="footer_body" sx={{paddingTop: 1}}>Solve Global Problems</Typography>
        <Box>
            <IconButton>
                <InstagramIcon sx={{color: "white"}}/>
            </IconButton>
            <IconButton>
                <LinkedInIcon sx={{color: "white"}}/>
            </IconButton>
            <IconButton>
                <FacebookIcon sx={{color: "white"}}/>
            </IconButton>
        </Box>
      </Box>
      <Box />
      <Box />
      <Box>
        <Typography className="footer_body" sx={{paddingBottom: "10px"}}>Bootcamp</Typography>
        <Typography className="footer_body" sx={{paddingBottom: "10px"}}>VC3</Typography>
        <Typography className="footer_body" sx={{paddingBottom: "10px"}}>Summit</Typography>
        <Typography className="footer_body" sx={{paddingBottom: "10px"}}>Breakthrough</Typography>
        <Typography className="footer_body">Launchpad</Typography>
      </Box>
      <Box>
      <Typography className="footer_body" sx={{paddingBottom: "10px"}}>About</Typography>
        <Typography className="footer_body" sx={{paddingBottom: "10px"}}>FAQ</Typography>
        <Typography className="footer_body" sx={{paddingBottom: "10px"}}>Team</Typography>
        <Typography className="footer_body" sx={{paddingBottom: "10px"}}>Sponsors</Typography>
        <Typography className="footer_body" sx={{paddingBottom: "10px"}}>Contact</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
