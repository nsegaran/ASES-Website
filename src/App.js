import "./App.css";
import LongButtonWArrowCustomized from "./components/LongButtonWithArrow";
import LongButtonWOArrowCustomized from "./components/LongButtonWOArrow";
import ShortButtonCustomized from "./components/ShortButton";
import ProfileCard from "./components/ProfileCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme, ThemeProvider } from "@mui/material";
import FAQSection from "./pages/Home/sections/FAQs";
import TimelineComponentA from "./components/TimelineComponent-a";
import TimelineComponentB from "./components/TimelineComponent-b";
import profileData from "./components/textContent/homeProfileCards.json";
import timelineData from "./components/textContent/homeTimeline.json";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "Space Grotesk"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <div
          style={{
            padding: "4rem",
            "@media (max-width: 800px)": {
              padding: "2rem",
            },
          }}
        >
          <div
            className="p pt-4 justify-start"
            style={{ fontFamily: "Space Grotesk", textAlign: "left" }}
          >
            <h1 style={{ textAlign: "left" }}>Our Programs</h1>
            <h3 style={{ textAlign: "left" }}>
              What does a year for ASES look like?
            </h3>
          </div>

          <div className="d-flex flex-column justify-between">
            <>
              {timelineData.map((d, index) => {
                return (
                  <TimelineComponentA
                    header={d.header}
                    description={d.description}
                    image={d.image}
                    timeframe={d.timeframe}
                  />
                );
                // if (index % 2 === 0) {
                //   return (
                //     <TimelineComponentA
                //       header={d.header}
                //       description={d.description}
                //       image={d.image}
                //       timeframe={d.timeframe}
                //     />
                //   );
                // } else {
                //   return (
                //     <TimelineComponentB
                //       header={d.header}
                //       description={d.description}
                //       image={d.image}
                //       timeframe={d.timeframe}
                //     />
                //   );
                // }
              })}
            </>
          </div>
        </div>
      </>

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
