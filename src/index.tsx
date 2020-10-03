import * as React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import "normalize.css";

import "./global";
import { store } from "./store";
import { App } from "./components/App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
