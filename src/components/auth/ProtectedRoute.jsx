import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute({children, allowedRoles}) {

  const {user, isAuthenticated } = useAuth();
  if(!isAuthenticated){
    return <Navigate to="/login" replace></Navigate>
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/users" replace />;
  }


  return children
}

export default ProtectedRoute;


// user = null

// !user   // true   (because null is falsy)
// !!user  // false