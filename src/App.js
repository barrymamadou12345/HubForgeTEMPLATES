import React from "react";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import EnsembleTemp2 from "./components/ProManage/EnsembleTemp2";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div><EnsembleTemp2/></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
