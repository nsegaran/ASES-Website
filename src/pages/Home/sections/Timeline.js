import TimelineComponentA from "../../../components/TimelineComponent-a";
import timelineData from "../../../components/textContent/homeTimeline.json";
import { motion, useScroll } from "framer-motion";
import "./stylesTimeline.css";

export default function Timeline() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      {/* <div
        class="svg-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <svg
          width="50"
          height="2502"
          viewBox="0 0 50 2502"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M25.0001 0.5L25.0002 2502" stroke="black" stroke-width="2" />
          <circle cx="25" cy="175" r="15" fill="black" />
          <path
            d="M32 175C32 178.866 28.866 182 25 182C21.134 182 18 178.866 18 175C18 171.134 21.134 168 25 168C28.866 168 32 171.134 32 175Z"
            fill="#83ADDF"
          />
          <circle cx="25" cy="812" r="15" fill="black" />
          <path
            d="M32 812C32 815.866 28.866 819 25 819C21.134 819 18 815.866 18 812C18 808.134 21.134 805 25 805C28.866 805 32 808.134 32 812Z"
            fill="#83ADDF"
          />
          <circle cx="25" cy="1520" r="15" fill="black" />
          <path
            d="M32 1520C32 1523.87 28.866 1527 25 1527C21.134 1527 18 1523.87 18 1520C18 1516.13 21.134 1513 25 1513C28.866 1513 32 1516.13 32 1520Z"
            fill="#83ADDF"
          />
          <circle cx="25" cy="2172" r="15" fill="black" />
          <path
            d="M32 2172C32 2175.87 28.866 2179 25 2179C21.134 2179 18 2175.87 18 2172C18 2168.13 21.134 2165 25 2165C28.866 2165 32 2168.13 32 2172Z"
            fill="#83ADDF"
          />
        </svg>
      </div> */}
      <div
        class="background-container"
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
  );
}
