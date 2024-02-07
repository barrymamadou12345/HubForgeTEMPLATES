
import React from 'react';
import './index.css';
import './css/Style-App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <h1 className='text-center font-bold text-[100px] text-red-500 italic'>La liste de mes templates </h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
