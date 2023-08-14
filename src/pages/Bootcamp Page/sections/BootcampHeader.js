import React from "react";
import ShortButton from "../../../components/ShortButton";
import image from "../../../images/bootcamp-header.png";
import video from "../../../images/bootcamp-hero-gradient.mp4";

export default function BootcampHeader() {
  return (
    <div className="w-full border-b-2 border-black laptop:pb-24 mobile:pb-8">
      <video
        className="fixed -z-10 w-auto object-cover mobile:min-h-full mobile:min-w-full laptop:min-h-auto x-0 y-0"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="d-flex pt-8 laptop:flex-row mobile:flex-col px-8 mobile:px-0 w-full mobile:gap-y-2 laptop:justify-around laptop:px-12 overflow-hidden">
        <div className="relative d-flex flex-col flex mobile:w-full laptop:w-2/5 laptop:pt-9 laptop:pl-9 laptop:items-start mobile:items-center gap-y-10 mobile:px-8 mobile:text-center laptop:text-left">
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
    </div>
  );
}
