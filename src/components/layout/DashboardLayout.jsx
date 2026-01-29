import React from "react";
import { Outlet, Link } from "react-router-dom";
import Logout from "../auth/Logout";

function DashboardLayout() {
  return (
    <div>
      <h2>DashboardLayout</h2>
      <nav>
        <Link to='/dashboard'>Dashboard</Link> |{" "}
        <Link to="/users">Users</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/settings">Settings</Link>
      </nav>
      <br />
      <Logout></Logout>
      <hr></hr>
      <Outlet></Outlet>
    </div>
  );
}

export default DashboardLayout;
