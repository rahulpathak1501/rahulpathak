import React from "react";
import ReactDOM from "react-dom/client";
import "./indexchatgpt.css";
import App from "./Components/App";
import { StateProvider } from "./Provider/StateProvider";
import reducer, { initialState } from "./Reducers";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import Login from "./pages/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

//const store = createStore();

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
