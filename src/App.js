import React from "react";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <h1 className="text-center font-bold mt-40 text-[60px] text-green-500 italic">
          La liste de mes templates
        </h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
