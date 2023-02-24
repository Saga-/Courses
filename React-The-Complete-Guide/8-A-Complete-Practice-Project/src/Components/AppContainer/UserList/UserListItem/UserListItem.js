const UserListItem = (props) => {
  return <li>{`${props.user.username} (${props.user.age})`}</li>;
};

export default UserListItem;
