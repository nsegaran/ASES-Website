import React from "react";
import LongButtonWArrowCustomized from "../../../components/LongButtonWithArrow";
import heroVidChrome from "../../../videos/ases-hero-vid-vp9-chrome.webm";
import heroVidSafari from "../../../videos/ases-hero-vid-hevc-safari.mp4";
import "./hero.css";

export default function Hero() {
  return (
    <div
      class="mother div"
      style={{
        display: "flex",
        alignItems: "start",
        paddingTop: "5rem",
        justifyContent: "space-between",
        flexDirection: "row",
        // flexWrap: "wrap",
        // gap: "10%",
        "@media screen and (max-width: 800px)": {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "2rem",
          flex: "1",
          paddingLeft: "5rem",
          justifyContent: "flex-start",
          minWidth: "40%", // Increase the width to make the div larger
        }}
      >
        <h1
          style={{
            fontSize: "calc(30px + 2vmin)",
            fontFamily: "Space Grotesk",
          }}
        >
          Stanford's premier entrepreneurship society
        </h1>
        <LongButtonWArrowCustomized
          text={"Apply to 2023-2024 ASES Bootcamp today"}
        />
      </div>
      <div
        style={{
          flex: "1",
          // display: "flex",
          height: "100%",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100vw",
            backgroundColor: "transparent",
            height: "750px",
            objectFit: "cover",
            alignSelf: "center",
          }}
        >
          <source src={heroVidChrome} type='video/mp4; codecs="hvc1"' />
          <source src={heroVidSafari} type="video/webm" />
        </video>
      </div>
    </div>
  );
}
