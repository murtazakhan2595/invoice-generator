import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import client from "./graphql/client";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ApolloProvider client={client}>
      <App />
      <ToastContainer />
    </ApolloProvider>
  );
} else {
  console.error("Root element not found");
}
