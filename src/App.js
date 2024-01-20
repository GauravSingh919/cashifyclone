import React from "react";
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin.js";
import Dashboard from "./components/Dashboard.jsx";
import User from "./pages/User.js";

function App({}) {
  // Router
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/admin/*"
            element={
              <>
                <Dashboard />
                <Routes>
                
                </Routes>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
