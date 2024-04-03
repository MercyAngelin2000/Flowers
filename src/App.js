import React from 'react'
import DefaultLayout from './default/DefaultLayout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<DefaultLayout />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
