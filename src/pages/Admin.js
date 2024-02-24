import React from "react";
import AdminLogin from "../components/AdminLogin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import History from "./History.jsx";
// import Sidebar from "../components/Sidebar"
const Admin = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <AdminLogin />
      <Router>
        <Routes>
          <Route path="/admin" element={<Admin />} />

          <Route
            path="/history"
            element={
              <>
                <History />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default Admin;
