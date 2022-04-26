import React, { useState } from "react";

export default function Button({ children }: { children: string }) {
  const [borderColor, setBorderColor] = useState("red");

  const handleClick = () =>
    setBorderColor((borderColor) =>
      borderColor === "green" ? "red" : "green"
    );

  return <button onClick={() => handleClick()}>{children}</button>;
}
