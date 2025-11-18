import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Routes from "./components";

import store from "./store";

const container = document.getElementById("root");
const root = createRoot(container);

const app = (
  <Provider store={store.configure()}>
    <Routes />
  </Provider>
);

root.render(app);
