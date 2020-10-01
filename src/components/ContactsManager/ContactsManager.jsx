import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from "./../SearchBar/SearchBar";
import ContactsList from "./../ContactsList/ContactsList"
import avatar1 from "./../../statics/avatar-1.png";
import avatar2 from "./../../statics/avatar-2.png";
import styles from "./ContactsManager.module.css";
import {
  StandardTemplate,
  Avatar,
  UserAvatar,
  Button,
  PageHead
} from "@myob/myob-widgets";
import { Link } from "react-router-dom";

const ContactsManager = () => {
  const [filter, setFilter] = React.useState("");
  const handleFilterChange = filterInput => {
    setFilter(filterInput);
  };
    const filterContacts = (filterInput, contacts) => {
    const filtedContacts =
    filterInput !== ""
        ? contacts.filter(item =>
            item.firstName.toLowerCase().includes(filterInput.toLowerCase())
          )
        : contacts;
   return filtedContacts;
  };
  const displayAvatar = (name, customStyle, image = null) => {
    return image ? (
      <UserAvatar name={name} imageSource={image} className={customStyle} />
    ) : (
      <Avatar type="user" color="regal" name={name} />
    );
  };
  const tableData = [
    {
      id: 1,
      avatar: displayAvatar(
        "Chaya Philip",
        `${styles.contact__avatar}, ${styles.override}`,
        avatar1
      ),
      firstName: "Chaya",
      lastName: "Philip",
      company: "Trescothik and Co",
      phone: "411-223-2089",
      email: "markzandrapatterson@gmail.com"
    },
    {
      id: 2,
      avatar: displayAvatar(
        "Gregory Hill",
        `${styles.contact__avatar}, ${styles.override}`,
        avatar2
      ),
      firstName: "Gregory",
      lastName: "Hill",
      company: "Torrance Brothers",
      phone: "411-223-2089",
      email: "mark_patterson_newyork@gmail.com"
    },
    {
      id: 3,
      avatar: displayAvatar(
        "Jamie Mcnally",
        `${styles.contact__avatar}, ${styles.override}`
      ),
      firstName: "Jamie",
      lastName: "Mcnally",
      company: "Chloe Associates",
      phone: "411-223-2089",
      email: "zandra.the.chandra@gmail.com"
    },
    {
      id: 4,
      avatar: displayAvatar(
        "Chanh Kien",
        `${styles.contact__avatar}, ${styles.override}`
      ),
      firstName: "Chanh",
      lastName: "Kien",
      company: "MYOB",
      phone: "411-223-2089",
      email: "chanh.kien@gmail.com"
    }
  ];

  const tableColumns = [
    { key: "avatar", description: "", visible: true },
    { key: "firstName", description: "First Name", visible: true },
    { key: "lastName", description: "Last Name", visible: true },
    { key: "company", description: "Company", visible: true },
    { key: "email", description: "Email", visible: true },
    { key: "phone", description: "Phone", visible: true }
  ];
  
  const [data, setData] = React.useState(tableData);
  const [columns] = React.useState(tableColumns);
  const [activeSort, setActiveSort] = React.useState({});
  const [sort] = React.useState({
    firstName: (a, b) => stringCompare(a.firstName, b.firstName),
    lastName: (a, b) => stringCompare(a.lastName, b.lastName)
  });

  const stringCompare = (a, b) => {

    const nameA = a.toUpperCase();
    const nameB = b.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  };

  const applySort = (data, sortFn, isDescending) => {
    const result = data.slice(); //copy the data into new variable

    result.sort(sortFn);
   
    //default sort order is ascending if no function is passed as param
    //sortFn: give a specific sorting logic
    return isDescending ? result.reverse() : result;
  };

  const onSort = column => {
    //activeSort is the shape of arrow icon shown next to column can be sorted.
    const nextSortOrder = !activeSort.descending; //I supposed descending is a bool, why can't I name it isDescending!!!
    setActiveSort({ column, descending: nextSortOrder }); //column is also not a good name after reading the Docs
    //sort the tableData by certain column given the shape of arrow icon shown next to the column name
    setData(applySort(data, sort[column], nextSortOrder));
  };
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
      <ContactsList sort = {sort} activeSort={activeSort} onSort={onSort} contacts={data} columns={columns} filter={filter} filterContacts={filterContacts}></ContactsList>
    </StandardTemplate>
  );
}

ContactsManager.propTypes = {

}

export default ContactsManager
