import React from "react";
import { BrowserRouter } from "react-router-dom";
import ContactContextProvider from "./context/ContactContext";
import Routing from "./Routing";
import "./index.css";

const App = () => {
  return (
    <ContactContextProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </ContactContextProvider>
  );
};

export default App;
