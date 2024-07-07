import React from "react";
const User = ({ userData }) => {
  return (
    <tr>
      <td>{userData.name}</td>
      <td>{userData.email}</td>
    </tr>
  );
};
const UserList = () => {
  const users = [
    { email: "user1@gmail.com", name: "유재석1" },
    { email: "user2@gmail.com", name: "유재석2" },
    { email: "user3@gmail.com", name: "유재석3" },
    { email: "user4@gmail.com", name: "유재석4" },
    { email: "user5@gmail.com", name: "유재석5" },
    { email: "user6@gmail.com", name: "유재석6" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User userData={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
