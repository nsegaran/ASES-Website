import React from "react";
import ShortButton from "../../../components/ShortButton";
import image from "../../../images/bootcamp-header.png";
import video from "../../../images/bootcamp-hero-gradient.mov";

export default function BootcampHeader() {
  return (
    <div className="d-flex pt-8 laptop:flex-row mobile:flex-col px-8 mobile:px-0 w-full mobile:gap-y-2 laptop:justify-around laptop:px-12 border-b-2">
      {/* <video
        src={video}
        className="z-[-1] w-auto min-w-full min-h-full max-w-none"
        playing
        loop
        muted
        // style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
      /> */}
      <div className="d-flex flex-col flex mobile:w-full laptop:w-2/5 laptop:pt-9 laptop:pl-9 laptop:items-start mobile:items-center gap-y-10 mobile:px-8 mobile:text-center laptop:text-left">
        <h1
          style={{
            fontSize: "calc(16px + 5vmin)",
            fontFamily: "Space Grotesk",
          }}
          className="laptop:w-2/5"
        >
          ASES Bootcamp
        </h1>
        <p
          style={{
            fontSize: "calc(12px + 2vmin)",
            fontFamily: "Space Grotesk",
            fontWeight: "light",
          }}
        >
          Solve wicked problems in our 12-week design-thinking intensive
        </p>
        <ShortButton text={"Apply today"} />
      </div>
      <div className="flex items-center justify-center laptop:pt-5 mobile:pt-2 mobile:pb-8">
        <img src={image} className="align-self-center" />
      </div>
    </div>
  );
}
