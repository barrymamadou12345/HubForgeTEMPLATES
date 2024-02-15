import React from "react";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import Ampire from "./components/Ampire/Ampire";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Ampire />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
