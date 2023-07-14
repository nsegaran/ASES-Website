import React from 'react';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';


// const LongButton = styled(Button)({
//     color: 'white',
//     backgroundColor: 'black',
//     padding: 8,
//     borderRadius: 4,
//   });

const LongButtonCustomized = ({text}) => {
    return (
        <>
            <Button
                sx={{
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: 5,
                    px: 5,
                    py: 2,
                    fontStyle: "Inter",
                    fontSize: 22,
                    '&:hover': {
                        backgroundColor: 'white',
                        color: 'black',
                        border:"1px solid black"
                    }
                }}>
                Apply to 2023-2024 ASES Bootcamp today
            </Button>
        </>
    );
};

export default LongButtonCustomized;