import React from "react";
import { BrowserRouter } from "react-router-dom";
import ContactContextProvider from "./context/ContactContext";
import Routing from "./Routing";
import "./index.css";
import Header from "./component/Header/Header";

const App = () => {
  return (
    <ContactContextProvider>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </ContactContextProvider>
  );
};

export default App;
