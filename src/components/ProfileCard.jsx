import { Box } from "@mui/material";

const ProfileCard = ({text}) => {
    return (
        <>
            <Box
                sx={{
                    width: 303,
                    height: 395,
                    backgroundColor: 'F8F9FC',
                    border: "1px solid black",
                    borderRadius: 3,
                    '&:hover': {
                        backgroundColor: 'black'
                    }
                }}
                >
            </Box>
        </>
    );
};

export default ProfileCard;