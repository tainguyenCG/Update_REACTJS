import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "./pages/NotFound/NotFound";
import LoginPage from "./pages/login/login";
import RegisterPage from "./pages/register/register";
import UserPage from "./pages/user/user";
import ProductPage from "./pages/product/product";
import "./style/global.css";
import App from "./App";
import TodoApp from "./components/todo/TodoApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: "/users",
        element: <UserPage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
