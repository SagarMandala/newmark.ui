import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Properties } from "./features/properties/properties";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Properties />
      </header>
    </div>
  );
}

export default App;
