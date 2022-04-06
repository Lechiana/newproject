import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";
import Navbar from "./component/Navbar";
import Detail from "./component/Detail";

ReactDOM.render(
  <Provider store={store}>
    <Navbar />
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
