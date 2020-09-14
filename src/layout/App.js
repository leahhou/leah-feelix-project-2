import React from "react";
import FilterableContacts from "./../components/FilterableContacts/FilterableContacts";
import NewContact from "./../components/NewContact/NewContact";
import NavBar from "./../components/NavBar/NavBar";
import "@myob/myob-styles/dist/styles/myob-clean.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route path="/home"><FilterableContacts /></Route>
          <Route path="/new"><NewContact /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
