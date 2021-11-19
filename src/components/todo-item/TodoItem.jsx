import "./todo-item.styles.scss";
import { AiOutlineCheckCircle, AiFillCheckCircle } from "react-icons/ai";
const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      {todo.completed ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
      <p>{todo.description}</p>
    </div>
  );
};

export default TodoItem;
