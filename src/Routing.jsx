import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Add from "./component/Add/Add";
import Edit from "./component/Edit/Edit";
import Header from "./component/Header/Header";
import List from "./component/List/List";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/Header"} />} />
      <Route path="/Add" element={<Add />} />
      <Route path="/list" element={<List />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="header" element={<Header />} />
    </Routes>
  );
};

export default Routing;
