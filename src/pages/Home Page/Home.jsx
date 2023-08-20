import Footer from "../../components/Footer.js"
import Hero from "./sections/Hero.js"
import Since1988 from "./sections/Since1988.js"
import Testimonials from "./sections/Testimonials.js"
import Timeline from "./sections/Timeline.js"
import FAQs from "./sections/FAQs.jsx"
import SponsorsBanner from "./sections/SponsorsBanner.js"
import TopBar from "../../components/TopBar.js"
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