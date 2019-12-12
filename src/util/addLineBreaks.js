import React from "react";

export default text => {
  const result = text.split("\n").map((paragraph, i) => {
    return paragraph.trim().length > 0 ? <p key={i}>{paragraph}</p> : null;
  });

  return result;
};
