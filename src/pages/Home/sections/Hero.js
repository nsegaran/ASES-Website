import React from "react";
import LongButtonWArrowCustomized from "../../../components/LongButtonWithArrow";
import heroVidChrome from "../../../videos/hero-video-hevc-safari.mp4";
import heroVidSafari from "../../../videos/hero-video-vp9-chrome.webm";
import SVGAnimation from "./SVGAnimation.jsx"
import styles from "./hero.css";

export default function Hero() {
  return (
    <div style={{height: "95vh"}}>
          <SVGAnimation
      className="absolute top-0 left-0 -z-1"
    />
    <div className="d-flex pt-8 laptop:flex-row mobile:flex-col px-8 mobile:px-0 w-full mobile:gap-y-8 tablet:gap-x-10 relative z-10">
      <div className="relative d-flex flex-col flex laptop:pt-9 laptop:pl-9 laptop:items-start mobile:items-center gap-y-10 mobile:px-8 laptop:ps-10 tablet:ms-10 mobile:text-center laptop:text-left">
        <h1
          style={{
            fontSize: "calc(16px + 5vmin)",
            fontFamily: "Space Grotesk",
          }}
          className="laptop:w-2/5"
        >
          Stanford's premier entrepreneurship society
        </h1>
        <LongButtonWArrowCustomized
          text={"Apply to 2023-2024 ASES Bootcamp today"}
        />
      </div>
      <div className="flex align-end justify-center pt-5">
        <video
          autoPlay
          loop
          muted
          style={{
            height: "70vh",
            objectFit: "cover",
          }}
        >
          <source src={heroVidChrome} type='video/mp4; codecs="hvc1"' />
          <source src={heroVidSafari} type="video/webm" />
        </video>
      </div>
    </div>
  </div>
  );
}
