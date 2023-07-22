import { Box } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { useState } from "react";


const ProfileCard = ({text, image}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <Card sx={{
                width: 303,
                height: 395,
                backgroundColor: 'F8F9FC',
                border: "1px solid black",
                borderRadius: 3,
                '&:hover': {
                    backgroundColor: 'black'
                }
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                {!isHovered && (
                    <>
                        <CardMedia 
                        sx={{ 
                            height: 140,
                        }}
                        image={image}
                        title="Profile Image"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {text.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </Typography>
                        </CardContent>
                    </>
                )}
                {isHovered && (
                    <>
                        <CardContent>
                            <Typography variant="body2" color="white">
                                {text.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </Typography>
                        </CardContent>
                    </>
                )}
            </Card>
        </>
    );
};

export default ProfileCard;
