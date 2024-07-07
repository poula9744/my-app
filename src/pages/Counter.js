import React, { useState } from "react";

const Counter = () => {
  const [num, setNumber] = useState(0); //num은 변수 setNumber는 세터함수

  const incress = () => {
    setNumber(num + 1);
  };

  const decress = () => {
    setNumber(num - 1);
  };

  return (
    <div>
      <button onClick={incress}>+1</button>
      <button onClick={decress}>-1</button>
      <p>{num}</p>
    </div>
  );
};

export default Counter;
