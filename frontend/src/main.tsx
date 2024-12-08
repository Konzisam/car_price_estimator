import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "react-oidc-context";
import { BrowserRouter } from "react-router-dom";
import { config } from "./config/env.ts";

const { authority, client_id, localURL } = config;

const cognitoAuthConfig = {
  authority,
  client_id,
  redirect_uri: `${localURL}/callback`,
  response_type: "code",
  scope: "email openid phone",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider {...cognitoAuthConfig}>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
