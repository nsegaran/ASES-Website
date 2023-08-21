import React from 'react';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const LongButtonWOArrowCustomized = ({text}) => {
    return (
        <>
            <Button
                sx={{
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: 3,
                    px: 18,
                    py: 2,
                    fontFamily: "Inter",
                    fontSize: "calc(6px + 1.4vmin)",
                    textTransform: "none",
                    '&:hover': {
                        backgroundColor: 'white',
                        color: 'black',
                        border:"1px solid black"
                    }
                }}
                >
                {text}
            </Button>
        </>
    );
};

export default LongButtonWOArrowCustomized;