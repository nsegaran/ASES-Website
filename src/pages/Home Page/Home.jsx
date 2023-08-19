import Footer from "../../components/Footer.jsx"
import Hero from "./sections/Hero.js"
import Since1988 from "./sections/Since1988.jsx"
import Testimonials from "./sections/Testimonials.jsx"
import Timeline from "./sections/Timeline.js"
import FAQs from "./sections/FAQs.jsx"
import SponsorsBanner from "./sections/SponsorsBanner.js"
import TopBar from "../../components/TopBar.jsx"
import Box from "@mui/material/Box";

export default function Home(){
    return(
        <Box>
            <TopBar/>
            <Hero/>
            <Since1988/>
            <Testimonials/>
            <Timeline/>
            <FAQs/>
            <SponsorsBanner/>
            <Footer/>
        </Box>
    );
};