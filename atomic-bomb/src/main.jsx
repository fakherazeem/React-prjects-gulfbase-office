import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// point directly at the JSX version so we don’t accidentally load the
// other `App.js` file (which also imports faker, a package not installed
// in this project). Using the extension avoids Vite/Node resolution ambiguity.
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
