import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Optional if you have Tailwind or global styles

const rootElement = document.getElementById("root");

if (rootElement) {
  console.log("main.jsx: creating root and rendering App");
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Critical Error: Failed to find element with id='root'.");
}
