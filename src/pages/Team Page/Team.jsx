import Apply from "./sections/Apply.jsx"
import Footer from "../../components/Footer.js"
import Header from "./sections/Header.jsx"
import TeamProfiles from "./sections/TeamProfiles.jsx"
import TopBar from "../../components/TopBar.js"
import Box from "@mui/material/Box";

export default function Team(){
    return(
        <Box>
            <TopBar/>
            <Header/>
            <TeamProfiles/>
            <Apply/>
            <Footer/>
        </Box>
    );
};