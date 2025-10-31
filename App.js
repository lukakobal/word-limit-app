import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const maxChars = 100;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const remaining = maxChars - text.length;

  let color = "green";
  if (remaining <= 30 && remaining > 10) color = "orange";
  else if (remaining <= 10) color = "red";

  return (
    <div className="container">
      <h1>Live Word Limit ✍️</h1>
      <textarea
        placeholder="Write something..."
        value={text}
        onChange={handleChange}
        maxLength={maxChars + 20} // omogoča malo prekoračitve za prikaz opozorila
      ></textarea>
      <p style={{ color }}>
        {remaining >= 0
          ? `Remaining characters: ${remaining}`
          : `Limit exceeded by ${Math.abs(remaining)}!`}
      </p>
    </div>
  );
}
