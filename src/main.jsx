import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Home.jsx";

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./apiSlice.js";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ApiProvider api={api}>
        <App />
      </ApiProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <p>Contact Us</p>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
