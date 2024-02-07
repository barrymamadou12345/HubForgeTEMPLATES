import React from "react";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { RenduNewTemplate } from "./components/NewTemplate/RenduNewTemplate";

function App() {
  return (
    <div>
      <BrowserRouter>
        <RenduNewTemplate />
      </BrowserRouter>
    </div>
  );
}

export default App;
