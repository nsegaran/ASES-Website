import { Box } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { useState } from "react";


const ProfileCard = ({name, role, hoveredText, image, hover}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <Card sx={{
        width: "300px",
        height: "400px",
        backgroundColor: hover ? 'black' : 'transparent', // Set transparent background if hover is false
        border: "1px solid black",
        borderRadius: 3,
    }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                {(!isHovered || !hover)&& (
                    <>
                        <CardMedia 
                        sx={{ 
                            height: "83%",
                            borderBottom: "1px solid black",
                            backgroundColor: "white",
                        }}
                        image={image}
                        title="Profile Image"
                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: "white"}}>
                            <Typography color="text.primary" align="center">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" align="center">
                                {role}
                            </Typography>
                        </CardContent>

                    </>
                )}
                {isHovered && hover && (
                    <>
                        <CardContent>
                            <Typography variant="body2" color="white">
                                {hoveredText}
                            </Typography>
                        </CardContent>
                    </>
                )}
            </Card>
        </>
    );
};

export default ProfileCard;
