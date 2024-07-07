import React, { useState } from "react";

const Input = () => {
  const [txtValue, setTextValue] = useState(""); // Initialize with an empty string
  const onChange = (e) => {
    // Pass the event object as an argument
    setTextValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={txtValue} onChange={onChange} />{" "}
      {/* Use txtValue for the value */}
      <br />
      <p>{txtValue}</p>
    </div>
  );
};

export default Input;
