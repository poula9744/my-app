import React, { useState } from "react";

const Input2 = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: "",
  });
  const { name, email, tel } = inputs;

  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    setInputs({
      //...은 깊은 복사
      ...inputs,
      [id]: value,
    });
  };

  return (
    <div>
      <div>
        <lable>이름</lable>
        <input type="text" id="name" value={name} onChange={onChange}></input>
      </div>
      <div>
        <lable>이메일</lable>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onChange}
        ></input>
      </div>
      <div>
        <lable>전화번호</lable>
        <input type="tel" id="tel" value={tel} onChange={onChange}></input>
      </div>
      <p>Name: {name}</p>
      <p>email: {email}</p>
      <p>tel: {tel}</p>
    </div>
  );
};

export default Input2;
