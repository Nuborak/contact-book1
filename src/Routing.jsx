import React from "react";
import { Routes, Route } from "react-router-dom";
import Add from "./component/Add/Add";
import Edit from "./component/Edit/Edit";
import List from "./component/List/List";

const Routing = () => {
  return (
    <Routes>
      <Route path="/Add" element={<Add />} />
      <Route path="/list" element={<List />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
};

export default Routing;
