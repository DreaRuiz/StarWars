import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ShipContextProvider } from "./context/ShipContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShipContextProvider>
      <App />
    </ShipContextProvider>
  </React.StrictMode>
);




