import React, { FC } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Home, Login } from "./routes";
import "./App.scss";

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <p>Hello world!</p>

          <div className="header__links">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
