import "./App.css";
import LongButtonWArrowCustomized from "./components/LongButtonWithArrow";
import LongButtonWOArrowCustomized from "./components/LongButtonWOArrow";
import ShortButtonCustomized from "./components/ShortButton";
import ProfileCard from "./components/ProfileCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme, ThemeProvider } from "@mui/material";
import profileData from "./components/textContent/homeProfileCards.json";
import SponsorsScroll from "./components/SponsorsScroll";
import FAQSection from "./pages/Home Page/sections/FAQs";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "Space Grotesk"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FAQSection />
      <div className="App min-vh-100 d-flex justify-content-center align-items-center">
        <LongButtonWArrowCustomized text="Apply to 2023-2024 Bootcamp" />
        <LongButtonWOArrowCustomized text="Sign up" />
        <ShortButtonCustomized text="Learn more" />
      </div>
      {/* <SponsorsScroll /> */}

      <div className="flex flex-col sm:flex-row justify-content-center align-items-center space-x-4 space-y-4">
        {profileData.map((d) => {
          return (
            <ProfileCard
              name={d.name}
              role={d.role}
              hoveredText={d.description}
              image={d.image}
            />
          );
        })}
      </div>
    </ThemeProvider>
  );
}

export default App;
