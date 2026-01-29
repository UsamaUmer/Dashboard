import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/auth/Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import DashboardLayout from "../components/layout/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/login" replace></Navigate>}
      ></Route>
      <Route path="/login" element={<Login></Login>}></Route>

      <Route
        element={
          <ProtectedRoute allowedRoles={["admin", "user"]}>
            <DashboardLayout></DashboardLayout>
          </ProtectedRoute>
        }
      >
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/users"
          element={
            <ProtectedRoute allowedRoles={["admin", "user"]}>
              <Users></Users>
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/profile" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <Profile></Profile>
          </ProtectedRoute>
        }>

        </Route>
        <Route path="/settings" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <Settings></Settings>
          </ProtectedRoute>
        }>

        </Route>
      </Route>

      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
};


export default AppRoutes;
