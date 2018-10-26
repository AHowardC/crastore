import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootswatch/dist/cyborg/bootstrap.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Start editing!</h2>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
