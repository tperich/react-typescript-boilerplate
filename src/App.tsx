import React, { FC } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Home, Login } from "./routes";
import "./App.scss";

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>Hello world!</p>

          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </header>
      </div>

      <Routes>
        <Route path="/" element={Home} />
        <Route path="/login" element={Login} />
      </Routes>
    </Router>
  );
};

export default App;
