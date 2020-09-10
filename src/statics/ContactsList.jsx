import React from "react";
import PropTypes from "prop-types";
import avatar1 from "./../../../public/avatar-1.png";
import avatar2 from "./../../../public/avatar-2.png";
import avatar3 from "./../../../public/avatar-3.png";
import SearchBar from "./../SearchBar/SearchBar";
import {
  StandardTemplate,
  Button,
  Table,
  PageHead
} from "@myob/myob-widgets";

const ContactsList = props => {
  const pageHead = (
    <PageHead title="Contacts">
      <Button type="primary">Add Contact</Button>
    </PageHead>
  );

  // const tableData = [
  //   {
  //     id: "1",
  //     avatar: "avatar 1",
  //     firstName: "Sollicitudin Ultricies",
  //     lastName: "Vulputate Sem",
  //     company: "company 1",
  //     email: "lamcorper@email.com",
  //     phone: "+64 346 289 876"
  //   },
  //   {
  //     id: "2",
  //     avatar: "avatar 2",
  //     firstName: "Dapibus Sollicitudin",
  //     business: "Nibh Commodo",
  //     company: "company 2",
  //     email: "etiam@email.com",
  //     phone: "+64 879 945 743"
  //   }
  // ];
  const tableData = [
    {
      id: 1,
      avatar: avatar1,
      firstName: "Chaya",
      lastName: "Philip",
      company: "Trescothik and Co",
      phone: "411-223-2089",
      email: "markzandrapatterson@gmail.com"
    },
    {
      id: 2,
      avatar: avatar2,
      firstName: "Gregory",
      lastName: "Hill",
      company: "Torrance Brothers",
      phone: "411-223-2089",
      email: "mark_patterson_newyork@gmail.com"
    },
    {
      id: 3,
      avatar: avatar3,
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
