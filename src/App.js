import React, { useState } from "react";
import TodoInput from "./components/todo-input/TodoInput";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.scss";
import TodoList from "./components/todo-list/TodoList";

function App() {
  const [theme, setTheme] = useState("dark");
  const [allTodos, setAlltodos] = useState([
    { id: 1, description: "Something", completed: false },
    { id: 2, description: "Something2", completed: false },
  ]);
  const [todosToShow, setTodosToShow] = useState(allTodos);
  return (
    <div className="app">
      <div className="background-image" />
      <div className="app-container">
        <Header theme={theme} setTheme={setTheme} />
        <div style={{ marginTop: "2rem", marginBottom: "1rem" }}>
          <TodoInput setAllTodos={setAlltodos} allTodos={allTodos} />
        </div>

        <TodoList todos={allTodos} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
