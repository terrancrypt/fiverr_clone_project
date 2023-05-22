import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
