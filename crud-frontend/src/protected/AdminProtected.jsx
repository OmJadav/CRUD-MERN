import React from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

function AdminProtected({ children }) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user) {
    Swal.fire("Access denied", "You are not ADMIN", "error");
    return <Navigate to="/" replace={true}></Navigate>;
  }
  if (user && user.isAdmin == "false") {
    Swal.fire("Access denied", "You are not ADMIN", "error");
    return <Navigate to="/" replace={true}></Navigate>;
  }
  return children;
}

export default AdminProtected;
