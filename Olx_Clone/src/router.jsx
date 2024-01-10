import { createBrowserRouter } from "react-router-dom";
import { SignUp, Login, AddProduct, HomePage } from "./pages/index";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "sell_product",
        element: <AddProduct />,
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
