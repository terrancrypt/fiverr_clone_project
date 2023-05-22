import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./assets/fonts/MacanPanWeb-Regular.ttf";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import userLogin from "./toolkit/userLogin";
import commentSlice from "./toolkit/commentSlice";

const store = configureStore({
  reducer: {
    userLogin,
    comments: commentSlice,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


