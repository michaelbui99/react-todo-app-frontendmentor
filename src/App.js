import React, { useState } from "react";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.scss";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className="app">
      <div className="background-image" />
      <div className="app-container">
        <Header theme={theme} setTheme={setTheme} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
