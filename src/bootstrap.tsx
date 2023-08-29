import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "host/AuthContextProvider";
import { UserProvider } from "host/UserAuth";
import Layout from "./components/Layout";

import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./contexts/KeycloackProvider.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactKeycloakProvider authClient={keycloak}>
      <BrowserRouter>
        <UserProvider>
          <AuthContextProvider>
            <Layout>
              <App />
            </Layout>
          </AuthContextProvider>
        </UserProvider>
      </BrowserRouter>
    </ReactKeycloakProvider>
  </React.StrictMode>
);
