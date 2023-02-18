import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (!props.expenses.length) {
    return <p>No expenses found.</p>;
  }

  return (
    <ul>
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
