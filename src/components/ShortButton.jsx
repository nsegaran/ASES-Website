import React from 'react';
import Button from '@mui/material/Button';

const ShortButtonCustomized = ({text}) => {
    return (
        <>
            <Button
                sx={{
                    color: "black",
                    backgroundColor: "white",
                    borderRadius: 2,
                    px: 2.5,
                    py: 1.5,
                    fontStyle: "Inter",
                    fontSize: "1rm",
                    textTransform: "none",
                    border:"1px solid black",
                    '&:hover': {
                        backgroundColor: 'black',
                        color: 'white',
                    }
                }}
                >
                {text}
            </Button>
        </>
    );
};

export default ShortButtonCustomized;