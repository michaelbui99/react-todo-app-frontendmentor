import "./todo-footer.styles.scss";

const TodoFooter = ({ todos, setTodos }) => {
  return (
    <div className="todo-footer">
      <div>{todos.length} items left</div>
      <div>All</div>
      <div>Active</div>
      <div>Completed</div>

      <div>Clear completed</div>
    </div>
  );
};

export default TodoFooter;
