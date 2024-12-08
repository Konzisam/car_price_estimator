import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "react-oidc-context";
import { BrowserRouter } from "react-router-dom";
import { config } from "./config/env.ts";

const { cognitoAuthority, client_id, localURL } = config;

const url_test = `${localURL}callback`
console.log(url_test);
console.log("authority:-->", cognitoAuthority)
console.log(client_id)

const cognitoAuthConfig = {
  authority: cognitoAuthority,
  client_id,
  redirect_uri: `${localURL}`,
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
