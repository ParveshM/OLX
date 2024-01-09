import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import "./index.css";
// context for accessing the firebase
import { FirebaseContext } from "./context/context";
import firebase from "./fireBase/config";
// context for User details
import Context from "./context/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <Context>
        <RouterProvider router={router} />
      </Context>
    </FirebaseContext.Provider>
  </React.StrictMode>
);
