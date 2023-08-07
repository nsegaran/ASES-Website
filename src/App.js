import "./App.css";
import LongButtonWArrowCustomized from "./components/LongButtonWithArrow";
import LongButtonWOArrowCustomized from "./components/LongButtonWOArrow";
import ShortButtonCustomized from "./components/ShortButton";
import TopBar from "./components/TopBar";
import Sponsors from "./components/SponsorsBanner.js";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme, ThemeProvider } from "@mui/material";
import FAQSection from "./pages/Home/sections/FAQs";
import Timeline from "./pages/Home/sections/Timeline";
import Since1988 from "./pages/Home/sections/Since1988";
import Testimonials from "./pages/Home/sections/Testimonials";
import profileData from "./components/textContent/homeProfileCards.json";
import { motion } from "framer-motion";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "Space Grotesk"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme} sx={{display: "flex", flexDirection: "column", height: "100vh"}}>
      <TopBar/>
      <Since1988 />
      <Testimonials/>
      <Timeline />
      <FAQSection />
      <Sponsors />
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
