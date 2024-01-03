import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin.js";
import Dashboard from "./components/Dashboard.jsx";
import User from "./pages/User.js";

function App({ Router }) {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/admin/">
            <Route index element={<Admin />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
