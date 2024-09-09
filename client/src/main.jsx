import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./storage/Theme";
import { FetchApiProvider } from "./storage/Fetch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <FetchApiProvider>
        <App />
      </FetchApiProvider>
    </ThemeProvider>
  </StrictMode>
);
