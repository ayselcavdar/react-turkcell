import { useState } from "react";

function Colors() {
  const [colors, setColors] = useState(["pink", "beige", "red"]);
  const handleClick = () => {
    setColors((prev) => [...prev, "Grey"]);
  };
  return (
    <div>
      <h2>Colors</h2>
      {colors.map((color, i) => (
        <div key={i}>{color}</div>
      ))}
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default Colors;
