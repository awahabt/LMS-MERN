import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/auth-context/index.jsx";
import { BrowserRouter } from "react-router-dom";
import InstructorProvider from "./context/instructor-context/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <InstructorProvider>
          <App />
        </InstructorProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
