import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactsMasterView.module.css";
import { StandardTemplate, Button, PageHead } from "@myob/myob-widgets";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import SearchBar from "./../SearchBar/SearchBar";
import NewContact from "./../NewContact/NewContact";
import ContactsList from "./../ContactsList/ContactsList";

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
    </Switch>
  );
};

ContactsMasterView.propTypes = {};

export default ContactsMasterView;
