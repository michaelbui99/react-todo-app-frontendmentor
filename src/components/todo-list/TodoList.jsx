import "./todo-list.styles.scss";
import TodoFooter from "../todo-footer/TodoFooter";
import TodoItem from "../todo-item/TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        todos.map((t) => <TodoItem todo={t} key={t.id} />)
      ) : (
        <p className="todo-item">No todos to show...</p>
      )}

      <TodoFooter todos={todos} />
    </div>
  );
};

export default TodoList;
