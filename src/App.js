import React from "react";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import Alt from "./components/CreativeDesign/Alt";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Alt/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
