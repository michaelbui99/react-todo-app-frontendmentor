import "./todo-list.styles.scss";
import TodoFooter from "../todo-footer/TodoFooter";
import TodoItem from "../todo-item/TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-list">
      <div className="todo-list__todos">
        {todos.length > 0 ? (
          todos.map((t) => (
            <TodoItem todo={t} key={t.id} setTodos={setTodos} todos={todos} />
          ))
        ) : (
          <p className="todo-item">No todos to show...</p>
        )}
      </div>

      <TodoFooter todos={todos} />
    </div>
  );
};

export default TodoList;
