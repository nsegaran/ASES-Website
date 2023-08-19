import React from "react";
import ShortButtonCustomized from "./ShortButton";
import { useNavigate } from 'react-router-dom';


export default function TimelineComponentA({
  header,
  description,
  image,
  timeframe,
}) 
{
  const navigate = useNavigate();

  const handleClick =  () => {
    if (header === "Bootcamp") {
      navigate("/bootcamp")
    }
  };

  return (
    <div className="flex laptop:flex-row mobile:flex-col pt-5 laptop:align-start mobile:align-center space-y-8 mobile:pb-8 mobile:border-b-2 laptop:border-none">
      <div className="flex flex-1 flex-column gap-4 laptop:items-start mobile:items-center laptop:text-start mobile:text-center justify-start laptop:w-3/7 mobile:w-full laptop:pe-20">
        <h1
          style={{
            fontSize: "calc(16px + 2vmin)",
            fontFamily: "Space Grotesk",
          }}
        >
          {header}
        </h1>
        <p style={{ fontSize: "calc(9px + 1vmin)" }}>{description}</p>
        <div onClick={handleClick}>
        <ShortButtonCustomized text="Learn more"/>
        </div>
      </div>
      <div className="flex flex-1 flex-col-reverse laptop:items-end mobile:items-center">
        <img
          src={image}
          alt={header}
          style={{
            width: "400px", // Set a fixed width
            height: "auto",
            "@media (max-width: 800px)": {
              width: "80%", // Change the width to 80%
            },
            "@media (max-width: 640px)": {
              width: "50%", // Change the width to 80%
            },
          }}
        />
        <h1
          style={{
            fontSize: "calc(8px + 2vmin)",
            fontWeight: "Medium",
            fontFamily: "Inter",
            paddingBottom: "1rem",
          }}
        >
          {timeframe}
        </h1>
      </div>
    </div>
  );
}
