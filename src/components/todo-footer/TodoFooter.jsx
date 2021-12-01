import "./todo-footer.styles.scss";
import { useState } from "react";
const TodoFooter = ({ todos, setTodos }) => {
  const [todosCopy, setTodosCopy] = useState([...todos]);
  const [showCompleted, setShowCompleted] = useState("false");
  const clearCompleted = () => {
    console.log("clicked");
    setTodos(
      todos.filter((t) => t.completed === false),
      console.log({ todos })
    );
  };

  const showCompletedTodos = () => {
    setShowCompleted(!showCompleted);
    setTodosCopy([...todos]);
    if (showCompleted) {
      setTodos(todos.filter((t) => t.completed === true));
    } else {
      setTodos([...todosCopy]);
    }
  };

  return (
    <div className="todo-footer">
      <div>{todos.length} items left</div>
      <div>All</div>
      <div>Active</div>
      <div onClick={showCompletedTodos}>Completed</div>

      <div onClick={clearCompleted}>Clear completed</div>
    </div>
  );
};

export default TodoFooter;
