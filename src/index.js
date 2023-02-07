import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharaptersRoute from "./routes/CharaptersRoute";
import NavesRoute from "./routes/NavesRoute";
import PlanetsRoute from "./routes/PlanetsRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/** ------------RUTAS   ---------**/}
          <Route path="/charapters" element={<CharaptersRoute />} />
          <Route path="/planets" element={<PlanetsRoute />} />
          <Route path="/naves" element={<NavesRoute />} />
          {/** ----------------------------- **/}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
