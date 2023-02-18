### Forms

- We do not need to pass in the event when calling a form handler callback
  - Example:
  ```
  <input onChange={titleChangeHandler} />
  const titleChangeHandler = event => console.log(event); // event is passed automatically without using an arg in the input.
  ```
- Two-Way-Binding works in React by using an `onChange` (or other event listener) to handle events, then the `value` attribute is assigned to the state. This does not cause an infinite loop (i.e., the value attribute being updated doesn't trigger the event listener).

### State

- If state depends on previous state, use the previousState argument that the setX function offers in `useState`
  -Example:
  ```
  setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
  });
  ```
        - A timer for example may utilise previous state to determine its new value.

#### Child -> Parent Communication

- See: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25596020#overview (Child-to-Parent Component Communication (Bottom-up))
- To pass data from child to parent; is very similar to Angular.
- If we have data in a child that to pass to the parent, we can:

  1. Create a prop in the parent. This is prop is assigned a handler function that will be called when the prop in the child component is called.
     - Example:
       ```
       // PARENT
       const NewExpense = () => {
           // HANDLER FUNCTION
           const saveExpenseDataHandler = (enteredExpenseData) => {
           const expenseData = {
              ...enteredExpenseData,
               id: Math.random().toString(),
           };
           console.log("NewExpense(parent)", expenseData);
       };
           return (
              <div className="new-expense">
                   // PROP
                   <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
               </div>
           );
       };
       ```
  2. In the child we grab this prop, and when we change the state (or a value), we call this function and pass in the value as an argument.

     - Example:

       ```
           const ExpenseForm = (props) => {
               const [title, setTitle] = useState('');
               const [amount, setAmount] = useState('');

               function titleHandler(event) {
                   setTitle(event.target.value);
               }

               function amountHandler(event) {
                   setAmount(event.target.value);
               }

               function formatData() {
                   const expenseData = {
                       title,
                       amount
                   }
                   props.onSaveExpensesData(expeneData)
               }

               return(
                   <input onChange={titleHandler} value={title} />
                   <input onChange={amountHandler} value={amount} />
                   <button onSubmit={formatData}>
                   )

           }
       ```

  3. This `props.onSaveExpenses(expenseData)` calls the parent function inside the parent component.
  4. This is how to communicate from parent-child.

#### Lifting State Up

- See: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25596024#overview Lifting State Up
  Lifting state up refers to communicating state from a child to a parent and then down to a sibling of that child. It could also refer to keeping state within a parent of two siblings to ease communication between the two.

It involves keeping state in one child, sending it to the parent (see the note above), then the parent passing it to the other sibling via props.
