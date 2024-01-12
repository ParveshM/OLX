import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { FirebaseContext } from "./context/context"; // context for accessing the firebase
import firebase from "./fireBase/config";
import Context from "./context/context"; // context for User details
import { Post } from "./context/context"; // context for post details

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <Context>
        <Post>
          <RouterProvider router={router} />
        </Post>
      </Context>
    </FirebaseContext.Provider>
  </React.StrictMode>
);
