import React, { useState } from "react";
import generateHowTo from "../generators/generateHowTo";
import copyTextToClipboard from "../helpers/copyTextToClipBoard";
import generateEstimatedCost from "../generators/generateEstimatedCost";
import generateTotalTime from "../generators/generateTotalTime";
import generateHowToTool from "../generators/generateHowToTool";
import generateHowToSupply from "../generators/generateHowToSupply";
import generateHowToStep from "../generators/generateHowToStep";
import generateName from "../generators/generateName";
export default function Output({ fields }) {
  let microData = [];
  if (fields.title.length) {
    microData.push(generateName(fields.title));
  }
  if (fields.estimatedCost) {
    microData.push(generateEstimatedCost(fields.estimatedCost));
  }
  if (fields.estimatedTimeInterval && fields.estimatedTimeDuration) {
    microData.push(
      generateTotalTime(
        fields.estimatedTimeInterval,
        fields.estimatedTimeDuration
      )
    );
  }
  if (fields.necessities.length) {
    fields.necessities.forEach(({ name, type, itemUrl, imgUrl, imgAlt }) => {
      if (type === "tool") {
        microData.push(generateHowToTool(name, itemUrl, imgUrl, imgAlt));
      } else if (type === "supply") {
        microData.push(generateHowToSupply(name, itemUrl, imgUrl, imgAlt));
      } else {
        console.log("something gone wrong in output.js");
      }
    });
  }
  if (fields.steps.length) {
    let count = 1;
    fields.steps.forEach((step) => {
      microData.push(
        generateHowToStep(
          count,
          step.name,
          step.url,
          step.directions,
          step.imgSrc,
          step.imgAlt
        )
      );
      count++;
    });
  }
  const [color, setColor] = useState("lightblue");
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        padding: "2rem",
        boxSizing: "border-box",
        backgroundColor: color,
        cursor: "pointer",
      }}
      onClick={({ target }) => {
        copyTextToClipboard(target.innerText);
      }}
      onMouseDown={() => {
        setColor("blue");
      }}
      onMouseUp={() => {
        setColor("lightblue");
      }}
    >
      {generateHowTo(microData)}
    </div>
  );
}
