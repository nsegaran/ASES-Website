import React from 'react';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ShortButtonCustomized = ({text}) => {
    return (
        <>
            <Button
                sx={{
                    color: "black",
                    backgroundColor: "white",
                    borderRadius: 3,
                    px: 3,
                    py: 2,
                    fontStyle: "Inter",
                    fontSize: 22,
                    textTransform: "none",
                    border:"1px solid black",
                    '&:hover': {
                        backgroundColor: 'black',
                        color: 'white',
                    }
                }}
                >
                Learn more
            </Button>
        </>
    );
};

export default ShortButtonCustomized;