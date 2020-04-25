import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store/store";
import App from "./App";

let storeInstance = Store();
ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,

  document.getElementById("root")
);
