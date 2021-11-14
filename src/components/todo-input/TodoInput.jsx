import "./todo-input.styles.scss";

const TodoInput = ({ setAllTodos, allTodos }) => {
  return (
    <div className="todo-input">
      <input type="text" placeholder="Enter new todo" />
    </div>
  );
};

export default TodoInput;
