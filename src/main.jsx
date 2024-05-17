import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Home.jsx";

import { Provider } from "react-redux";
import "./index.css";
import { store } from "./store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
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
