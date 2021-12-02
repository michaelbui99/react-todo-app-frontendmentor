import "./todo-item.styles.scss";
import {
  AiOutlineCheckCircle,
  AiFillCheckCircle,
  AiFillDelete,
} from "react-icons/ai";
const TodoItem = ({ todo, setTodos, todos }) => {
  const toggleTodoComplete = () => {
    //TODO: find a way to toggle a TodoItem in the todos array and then update the Todos state
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? (todo = { ...todo, completed: !todo.completed }) : t
      )
    );
  };

  const deleteTodo = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <div className="todo-item">
      {todo.completed ? (
        <AiFillCheckCircle onClick={toggleTodoComplete} />
      ) : (
        <AiOutlineCheckCircle onClick={toggleTodoComplete} />
      )}
      {todo.completed ? <s>{todo.description}</s> : <p>{todo.description}</p>}

      <AiFillDelete className="delete-todo" onClick={deleteTodo} />
    </div>
  );
};

export default TodoItem;
