import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="calendar" element={<h2>Calendar</h2>} />
            <Route path="board" element={<h2>Board</h2>} />
            <Route path="users" element={<h2>Data grid</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
