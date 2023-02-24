import UserListItem from "./UserListItem/UserListItem";

const UserList = (props) => {
  return (
    <div>
      <ul>
        {props.users.map((user) => (
          <UserListItem key={user.username} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
