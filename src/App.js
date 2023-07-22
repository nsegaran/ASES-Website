import "./App.css";
import LongButtonWArrowCustomized from "./components/LongButtonWithArrow";
import LongButtonWOArrowCustomized from "./components/LongButtonWOArrow";
import ShortButtonCustomized from "./components/ShortButton";
import ProfileCard from "./components/ProfileCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme, ThemeProvider } from "@mui/material";
import data from "./components/textContent/homeProfileCards.json";

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
      <div className="d-flex justify-content-center align-items-center space-x-4">
        {data.map((d) => {
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
