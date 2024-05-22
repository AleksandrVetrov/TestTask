import { Route, Routes } from 'react-router-dom';
import routes from '../routes';
import React from "react";
import Home from "../pages/index/ui/Home";

function Routers() {
  return (
    <Routes>
      <Route path={routes.root.index} element={<Home/>} />
    </Routes>
  );
}

export default Routers;
