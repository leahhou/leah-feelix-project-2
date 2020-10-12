import React from "react";
import ContactsManager from "./../components/ContactsManager/ContactsManager";
import NavBar from "./../components/NavBar/NavBar";
import "@myob/myob-styles/dist/styles/myob-clean.css";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar navs= {navs}></NavBar>
        <ContactsManager></ContactsManager>
      </div>
    </Router>
  );
}

export default App;

const navs = [
  {
    key: "home",
    label: "Contacts",
    url:"/"
  },
  {
    key: "",
    label: "Create Contact",
    url:"/new",
    // onSelect: () => "selected"
  }
];
