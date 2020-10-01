import React from "react";
// import ContactsList from "./../components/ContactsList/ContactsList";
import ContactsManager from "./../components/ContactsManager/ContactsManager";
import NewContact from "./../components/NewContact/NewContact";
import NavBar from "./../components/NavBar/NavBar";
import "@myob/myob-styles/dist/styles/myob-clean.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [contactForm, setContactForm] = React.useState({});

  const addNewContact = newContact => {
    setContactForm({newContact});
  }
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <ContactsManager />
          </Route>
          <Route exact path="/new">
            <NewContact addNewContact={addNewContact}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
