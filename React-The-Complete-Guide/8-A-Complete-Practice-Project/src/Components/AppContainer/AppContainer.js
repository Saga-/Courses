import UserForm from "./UserForm/UserForm";
import UserList from "./UserList/UserList";
import { useState } from "react";

const AppContainer = () => {
  const [users, setUsers] = useState([]);

  function onAddUser(user) {
    setUsers((prevState) => {
      return [...prevState, { username: user.username, age: user.age }];
    });
  }

  return (
    <div>
      <UserForm addUserHandler={onAddUser} />
      <UserList users={users} />
    </div>
  );
};

export default AppContainer;
