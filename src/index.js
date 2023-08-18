import React, { Suspense } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import store from "./app/store";
import SuspenseContent from "./containers/SuspenseContent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<SuspenseContent />}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
);
