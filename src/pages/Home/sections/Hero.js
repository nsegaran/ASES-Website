import React from "react";
import LongButtonWArrowCustomized from "../../../components/LongButtonWithArrow";
import heroVidChrome from "../../../videos/ases-hero-vid-vp9-chrome.webm";
import heroVidSafari from "../../../videos/ases-hero-vid-hevc-safari.mp4";

export default function Hero() {
  return (
    <div
      class="mother div"
      style={{
        display: "flex",
        alignItems: "start",
        paddingTop: "5rem",
        // columnGap: "10vw",
        justifyContent: "space-between",
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
          width: "100%", // Increase the width to make the div larger,
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
          paddingLeft: "20rem",
          maxHeight: "1000px",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            backgroundColor: "transparent",
            height: "750px",
            objectFit: "cover",
          }}
        >
          <source src={heroVidChrome} type='video/mp4; codecs="hvc1"' />
          <source src={heroVidSafari} type="video/webm" />
        </video>
      </div>
    </div>
  );
}
