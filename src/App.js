import "./App.css";
import LongButtonWArrowCustomized from "./components/LongButtonWithArrow";
import LongButtonWOArrowCustomized from "./components/LongButtonWOArrow";
import ShortButtonCustomized from "./components/ShortButton";
import ProfileCard from "./components/ProfileCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme, ThemeProvider } from "@mui/material";
import FAQSection from "./pages/Home/sections/FAQs";
import Timeline from "./pages/Home/sections/Timeline";
import profileData from "./components/textContent/homeProfileCards.json";
import { motion } from "framer-motion";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "Space Grotesk"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Timeline />

      <FAQSection />
      {/* <div className="App min-vh-100 d-flex justify-content-center align-items-center">
        <LongButtonWArrowCustomized />
        <LongButtonWOArrowCustomized />
        <ShortButtonCustomized />
      </div> */}
      <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center space-x-6 space-y-6">
        {profileData.map((m) => {
          return (
            <ProfileCard
              name={m.name}
              role={m.role}
              hoveredText={m.description}
              image={m.image}
            />
          );
        })}
      </div>
    </ThemeProvider>
  );
}

export default App;
