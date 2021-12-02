import "./todo-footer.styles.scss";
import { useState } from "react";
const TodoFooter = ({ todos, setTodosToShow, setTodos }) => {
  const [todosCopy, setTodosCopy] = useState([...todos]);
  const clearCompleted = () => {
    console.log("clicked");
    setTodosToShow(
      todos.filter((t) => t.completed === false),
      console.log({ todos })
    );
  };

  const showCompletedTodos = () => {
    setTodosCopy([...todos]);
    setTodosToShow(todos.filter((t) => t.completed === true));
  };

  const showActiveTodos = () => {
    setTodosCopy([...todos]);
    setTodosToShow(todos.filter((t) => t.completed === false));
  };

  const showAll = () => {
    setTodosToShow(todos);
  };

  return (
    <div className="todo-footer">
      <div>{todos.length} items left</div>
      <div onClick={showAll}>All</div>
      <div onClick={showActiveTodos}>Active</div>
      <div onClick={showCompletedTodos}>Completed</div>
      <div onClick={clearCompleted}>Clear completed</div>
    </div>
  );
};

export default TodoFooter;
