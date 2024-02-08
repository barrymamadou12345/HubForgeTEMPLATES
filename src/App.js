import React from "react";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import ChompRestaurant from "./components/pageTemplate2/ChompRestaurant";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ChompRestaurant />
      </BrowserRouter>
    </div>
  );
}

export default App;
