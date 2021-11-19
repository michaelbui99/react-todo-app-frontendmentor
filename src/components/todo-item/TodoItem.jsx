import "./todo-item.styles.scss";

const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <p>{todo.description}</p>
    </div>
  );
};

export default TodoItem;
