import "./todo-list.styles.scss";
import TodoFooter from "../todo-footer/TodoFooter";
import TodoItem from "../todo-item/TodoItem";

const TodoList = ({ todos, setTodos, todosToShow, setTodosToShow }) => {
  return (
    <div className="todo-list">
      <div className="todo-list__todos">
        {todosToShow.length > 0 ? (
          todosToShow.map((t) => (
            <TodoItem
              todo={t}
              key={t.id}
              setTodos={setTodos}
              todos={todos}
              setTodosToShow={setTodosToShow}
            />
          ))
        ) : (
          <p className="todo-item">No todos to show...</p>
        )}
      </div>

      <TodoFooter
        todos={todos}
        setTodosToShow={setTodosToShow}
        setTodos={setTodos}
      />
    </div>
  );
};

export default TodoList;
