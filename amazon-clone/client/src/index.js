import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./contexts/AuthContext";
import Wrapper from "./utility/Wrapper";

ReactDOM.render(
  <>
    <AuthProvider>
      <Wrapper>
        <App />
      </Wrapper>
    </AuthProvider>
  </>,
  document.getElementById("root")
);
