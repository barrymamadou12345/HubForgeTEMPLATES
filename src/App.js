import React from "react";
import "./index.css";
import Ensemble from "./components/NewTemp2/Ensemble";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Ensemble />
      </BrowserRouter>
    </div>
  );
}

export default App;
