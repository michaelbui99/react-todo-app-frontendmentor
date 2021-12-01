import "./todo-input.styles.scss";
import React, { useState } from "react";

const TodoInput = ({ setAllTodos, allTodos }) => {
  const inputField = document.querySelector(".todo-input");
  const [textInput, setTextInput] = useState("");
  const addTodo = (e) => {
    if (e.key === "Enter") {
      let maxId = 0;
      allTodos.forEach((t) =>
        t.id > maxId ? (maxId = t.id) : (maxId = maxId)
      );
      const newTodo = {
        id: maxId + 1,
        completed: false,
        description: textInput,
      };
      setAllTodos(allTodos.concat(newTodo));
    }
  };
  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };
  return (
    <div
      className="todo-input"
      onKeyDown={addTodo}
      onChange={handleInputChange}
    >
      <input type="text" placeholder="Enter new todo" />
    </div>
  );
};

export default TodoInput;
