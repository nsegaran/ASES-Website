import React from 'react';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const LongButtonWArrowCustomized = ({text}) => {
    return (
        <>
            <Button
                sx={{
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: 3,
                    px: 3,
                    py: 2,
                    fontStyle: 'Inter',
                    fontSize: 22,
                    textTransform: "none",
                    '&:hover': {
                        backgroundColor: 'white',
                        color: 'black',
                        border:"1px solid black"
                    }
                }}
                endIcon={<ArrowForwardIcon 
                    sx={{ fontSize: 40 }}
                    />
                }
                >
                Apply to 2023-2024 ASES Bootcamp today
            </Button>
        </>
    );
};

export default LongButtonWArrowCustomized;