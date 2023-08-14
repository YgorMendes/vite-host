import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "host/AuthContextProvider";
import { UserProvider } from "host/UserAuth";
import Layout from "./components/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AuthContextProvider>
          <Layout>
            <App />
          </Layout>
        </AuthContextProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
