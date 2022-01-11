import React from "react";
import ReactDOM from "react-dom";
import "./styles/globals.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
