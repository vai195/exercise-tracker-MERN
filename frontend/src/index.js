import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ExerciseContextProvider } from "./context/ExerciseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ExerciseContextProvider>
      <App />
    </ExerciseContextProvider>
  </React.StrictMode>
);
