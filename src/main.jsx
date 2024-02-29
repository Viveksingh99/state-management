import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContextProvider } from "./context/MyContextProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./app/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </Provider>
);
