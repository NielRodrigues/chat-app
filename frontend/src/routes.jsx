import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { ChatContext } from "./contexts/chatContext";

export function AppRoutes() {

  const { userLoged } = useContext(ChatContext);
  useEffect(() => {}, [userLoged])

  return (
    <Routes>
      <Route path="/" element={userLoged ? <Main /> : <Navigate to="/login" />} />
      <Route path="/login" element={!userLoged ? <Login /> : <Navigate to="/" />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
