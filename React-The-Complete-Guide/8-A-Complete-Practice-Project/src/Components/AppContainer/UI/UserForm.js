import classes from './UserForm.module.css';
import Card from './Card';
import Button from './Button';

const UserForm = props => {
  function onAddUserClick(event) {
    const usernameInputVal = event.target[0].value;
    const ageInputVal = event.target[1].value;
    event.preventDefault();

    props.addUserHandler({ username: usernameInputVal, age: ageInputVal });
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={onAddUserClick}>
        <label htmlFor='username' className={'form-label'}>
          Username
        </label>
        <input type='text' name='username' className={'form-input'} />
        <label htmlFor='age' className={'form-label'}>
          Age (Years)
        </label>
        <input type='text' name='age' className={'form-input'} />
        <Button type={'submit'}>Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;
