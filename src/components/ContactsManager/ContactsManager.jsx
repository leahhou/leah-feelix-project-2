import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from "./../SearchBar/SearchBar";
import ContactsList from "./../ContactsList/ContactsList"
import styles from "./ContactsManager.module.css";
import {
  StandardTemplate,
  Button,
  PageHead
} from "@myob/myob-widgets";
import { Link } from "react-router-dom";

const ContactsManager = props => {
  const [filter, setFilter] = React.useState("");
  const handleFilterChange = filterInput => {
    setFilter(filterInput);
  };
  // const filterContacts = () => {
    // const filtedData =
    //   filter !== ""
    //     ? data.filter(item =>
    //         item.firstName.toLowerCase().includes(filter.toLowerCase())
    //       )
    //     : tableData;
    // setData(filtedData);
  // };
  const pageHead = (
    <PageHead title="Contacts" className={`${styles.link}`}>
      <Link exact to="/new" >
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
    <StandardTemplate
      pageHead={pageHead}
      filterBar={
        <SearchBar
          onFilterChange={handleFilterChange}
          filterText={filter}
          label="Search Contacts"
        ></SearchBar>
      }
    >
      <ContactsList></ContactsList>
      {/* <Table>
        {renderHeader()}
        <Table.Body>{data.map(renderRow)}</Table.Body>
      </Table> */}
    </StandardTemplate>
  );
}

ContactsManager.propTypes = {

}

export default ContactsManager
