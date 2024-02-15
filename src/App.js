import React from "react";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import Aria from "./components/ClaireObscure/Aria";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Aria />
      </BrowserRouter>
    </div>
  );
}

export default App;
