import React, { useState } from "react";
import TodoInput from "./components/todo-input/TodoInput";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.scss";

function App() {
  const [theme, setTheme] = useState("dark");
  const [allTodos, setAlltodos] = useState([
    { id: 1, description: "Something", completed: false },
  ]);
  const [todosToShow, setTodosToShow] = useState(allTodos);
  return (
    <div className="app">
      <div className="background-image" />
      <div className="app-container">
        <Header theme={theme} setTheme={setTheme} />
        <div style={{ marginTop: "2rem" }}>
          <TodoInput setAllTodos={setAlltodos} allTodos={allTodos} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
