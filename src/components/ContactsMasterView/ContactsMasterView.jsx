import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactsMasterView.module.css";
import { StandardTemplate, Button, PageHead} from "@myob/myob-widgets";
import { Switch, Route, Link } from "react-router-dom";
import SearchBar from "./../SearchBar/SearchBar";
import NewContact from "./../NewContact/NewContact";
import ContactsList from "./../ContactsList/ContactsList";
import NotFound from "./../NotFound/NotFound";
const ContactsMasterView = (
  {
    handleFilterChange,
    filter,
    addNewContact,
    sort,
    activeSort,
    onSort,
    contacts,
    filterContacts
  },
  ...props
) => {
  const pageHead = (
    <PageHead title="Contacts" className={`${styles.link}`}>
      <Link exact to="/new">
        <Button
          type="primary"
          className={`${styles.button} ${styles.override}`}
        >
          Add Contacts
        </Button>
      </Link>
    </PageHead>
  );
  return (
    <Switch>
      <Route exact path="/">
        <StandardTemplate
          pageHead={pageHead}
          filterBar={
            <SearchBar
              onFilterChange={handleFilterChange}
              value={filter}
              label="Search Contacts"
            ></SearchBar>
          }
        >
          <ContactsList
            sort={sort}
            activeSort={activeSort}
            onSort={onSort}
            contacts={contacts}
            filter={filter}
            filterContacts={filterContacts}
          ></ContactsList>
        </StandardTemplate>
      </Route>
      <Route exact path="/new">
        <NewContact addNewContact={addNewContact} />
      </Route>
      <Route path="*" extract={true} component={NotFound}></Route>
    </Switch>
  );
};

ContactsMasterView.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  addNewContact: PropTypes.func.isRequired,
  sort: PropTypes.object.isRequired,
  activeSort: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  filterContacts: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      company: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string
    })
  ).isRequired
};

export default ContactsMasterView;
