import React from "react";
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

import HomeLayout from "./layouts/HomeLayout";
import WhatToDo from "./pages/WhatToDo";
import WhereToEat from "./pages/WhereToEat";
import WhereToStay from "./pages/WhereToStay";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<WhatToDo />} />
      <Route path="whereToEat" element={<WhereToEat />} />
      <Route path="whereToStay" element={<WhereToStay />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App