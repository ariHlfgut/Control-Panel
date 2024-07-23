import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ControlPanel from "./controlPanel";
import TaskBoard from "./taskBoard";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ControlPanel />} />
        <Route path="/taskboard" element={<TaskBoard />} />
      </Routes>
    </Router>
  );
};

export default App;
