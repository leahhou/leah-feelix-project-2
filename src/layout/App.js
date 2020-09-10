import React from "react";
import ContactsList from "./../components/ContactsList/ContactsList";
import NewContact from "./../components/NewContact/NewContact";
import NavBar from "./../components/NavBar/NavBar";
import "@myob/myob-styles/dist/styles/myob-clean.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ContactsList></ContactsList>
      <NewContact></NewContact>
    </div>
  );
}

export default App;
