const UserForm = (props) => {
  function onAddUserClick(event) {
    const usernameInputVal = event.target[0].value;
    const ageInputVal = event.target[1].value;
    event.preventDefault();

    props.addUserHandler({ username: usernameInputVal, age: ageInputVal });
  }

  return (
    <div>
      <form onSubmit={onAddUserClick}>
        <div>
          <label htmlFor="username" className={"form-label"}>
            Username
          </label>
          <input type="text" name="username" className={"form-input"} />
        </div>
        <div>
          <label htmlFor="age" className={"form-label"}>
            Age (Years)
          </label>
          <input type="text" name="age" className={"form-input"} />
        </div>
        <div>
          <button type={"submit"}>Add User</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
