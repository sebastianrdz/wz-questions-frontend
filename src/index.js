import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider";
import { Grammarly } from "@grammarly/editor-sdk-react";

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <BrowserRouter>
    <Grammarly clientId="client_MShmXd1pybcfW14FyYEy3X">
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </Grammarly>
  </BrowserRouter>,
  document.getElementById("root")
);
