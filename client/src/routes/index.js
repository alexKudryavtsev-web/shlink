import React from "react";
import { useRoutes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import CreatePage from "../pages/CreatePage";
import DetailPage from "../pages/DetailPage";
import LinksPage from "../pages/LinksPage";

function RoutesComponet({ isAuth }) {
  const isAuthRoutes = [
    { path: "/links", element: <LinksPage /> },
    { path: "/create", element: <CreatePage /> },
    { path: "/detail/:id", element: <DetailPage /> },
    { path: "*", element: <CreatePage /> },
  ];

  const isNotAuthRoutes = [
    { path: "/", element: <AuthPage /> },
    { path: "*", element: <AuthPage /> },
  ];

  return useRoutes(isAuth ? isAuthRoutes : isNotAuthRoutes);
}

export default RoutesComponet;
