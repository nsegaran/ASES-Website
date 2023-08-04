import React from "react";
import ShortButtonCustomized from "./ShortButton";

export default function TimelineComponent({
  header,
  description,
  image,
  timeframe,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "5rem",
        columnGap: "30vw",
        flexWrap: "wrap",
        "@media (max-width: 600px)": {
          flexDirection: "column", // Change the width to 80%
        },
      }}
      className="justify-between"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "50px",
          maxWidth: "482px",
          flex: "1",
          marginBlockEnd: "2rem",
          marginRight: "2rem",
          justifyContent: "flex-start",
        }}
      >
        <h1
          style={{
            fontSize: "calc(16px + 2vmin)",
            fontFamily: "Space Grotesk",
          }}
        >
          {header}
        </h1>
        <p style={{ fontSize: "calc(9px + 1vmin)" }}>{description}</p>
        <ShortButtonCustomized text="Learn more" />
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          textAlign: "right",
          "@media (max-width: 600px)": {
            // When the viewport height is 600px or less
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <img
          src={image}
          alt={header}
          style={{
            width: "400px", // Set a fixed width
            height: "auto",
            "@media (max-width: 800px)": {
              width: "80%", // Change the width to 80%
            },
            "@media (max-width: 600px)": {
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
            textAlign: "left", // Add textAlign: "left" for text alignment
          }}
        >
          {timeframe}
        </h1>
      </div>
    </div>
  );
}
