import React from "react";
import PropTypes from "prop-types";
import {img} from "./ContactsList.module.css";
import avatar1 from "./../../statics/avatar-1.png";
import avatar2 from "./../../statics/avatar-2.png";
import SearchBar from "./../SearchBar/SearchBar";
import {
  Avatar,
  UserAvatar,
  StandardTemplate,
  Button,
  Table,
  PageHead
} from "@myob/myob-widgets";

const ContactsList = props => {
  const pageHead = (
    <PageHead title="Contacts">
      <Button type="primary">Add Contacts</Button>
    </PageHead>
  );

  const displayAvatar = (name, customStyle,image=null) => {
    return image ?  <UserAvatar
    name={name}
    imageSource={image}
    className={customStyle} 
  /> :   <Avatar type='user' color='regal' name={name} />
  }

  const tableData = [
    {
      id: 1,
      avatar: (displayAvatar("Chaya Philip", {img}, avatar1)),
      firstName: "Chaya",
      lastName: "Philip",
      company: "Trescothik and Co",
      phone: "411-223-2089",
      email: "markzandrapatterson@gmail.com"
    },
    {
      id: 2,
      avatar: (displayAvatar("Gregory Hill", {img}, avatar2)),
      firstName: "Gregory",
      lastName: "Hill",
      company: "Torrance Brothers",
      phone: "411-223-2089",
      email: "mark_patterson_newyork@gmail.com"
    },
    {
      id: 3,
      avatar: (displayAvatar("Jamie Mcnally", {img})),
      firstName: "Jamie",
      lastName: "Mcnally",
      company: "Chloe Associates",
      phone: "411-223-2089",
      email: "zandra.the.chandra@gmail.com"
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

  return (
    <StandardTemplate pageHead={pageHead} filterBar={<SearchBar></SearchBar>}>
      <Table data={tableData} columns={tableColumns} />
    </StandardTemplate>
  );
};

ContactsList.propTypes = {};

export default ContactsList;
