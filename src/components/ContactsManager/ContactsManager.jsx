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

const ContactsManager = props => {
  const [filter, setFilter] = React.useState("");
  const handleFilterChange = filterInput => {
    setFilter(filterInput);
  };
    const filterContacts = (filter, data) => {
    const filtedData =
      filter !== ""
        ? data.filter(item =>
            item.firstName.toLowerCase().includes(filter.toLowerCase())
          )
        : data;
   return filtedData;
  };
  // const filterContacts = () => {
  //   const filtedData =
  //     filter !== ""
  //       ? data.filter(item =>
  //           item.firstName.toLowerCase().includes(filter.toLowerCase())
  //         )
  //       : tableData;
  //   setData(filtedData);
  // };
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
      <ContactsList contacts={data} columns={columns} filter={filter} filterContacts={filterContacts}></ContactsList>
    </StandardTemplate>
  );
}

ContactsManager.propTypes = {

}

export default ContactsManager
