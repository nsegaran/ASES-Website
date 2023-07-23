import "./App.css";
import LongButtonWArrowCustomized from "./components/LongButtonWithArrow";
import LongButtonWOArrowCustomized from "./components/LongButtonWOArrow";
import ShortButtonCustomized from "./components/ShortButton";
import ProfileCard from "./components/ProfileCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme, ThemeProvider } from "@mui/material";
import profileData from "./components/textContent/homeProfileCards.json";
import faqData from "./components/textContent/homeFAQData.json";

import FAQ from "./components/FAQ";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "Space Grotesk"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App min-vh-100 d-flex justify-content-center align-items-center">
        <LongButtonWArrowCustomized />
        <LongButtonWOArrowCustomized />
        <ShortButtonCustomized />
      </div>
      <div className="App min-vh-100 d-flex flex-column justify-content-center align-items-center gap-2">
        {faqData.map((d) => {
          return <FAQ question={d.question} answer={d.answer} />;
        })}
      </div>

      {/* <div className="flex flex-col sm:flex-row justify-content-center align-items-center space-x-4 space-y-4">
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
      </div> */}
    </ThemeProvider>
  );
}

export default App;
