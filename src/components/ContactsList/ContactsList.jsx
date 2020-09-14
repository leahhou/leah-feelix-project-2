import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactsList.module.css";
import avatar1 from "./../../statics/avatar-1.png";
import avatar2 from "./../../statics/avatar-2.png";
import { Avatar, UserAvatar, Table, HeaderSort } from "@myob/myob-widgets";

const ContactsList = props => {
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
        [styles.contact__avatar, styles.override],
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
        [styles.contact__avatar, styles.override],
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
      avatar: displayAvatar("Jamie Mcnally", [
        styles.contact__avatar,
        styles.override
      ]),
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

  const stringCompare = (a, b) => {
    debugger;
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
    debugger;
    result.sort(sortFn);
    debugger;
    //default sort order is ascending if no function is passed as param
    //sortFn: give a specific sorting logic
    return isDescending ? result.reverse() : result;
  };

  const onSort = column => {
    //activeSort is the shape of arrow icon shown next to column can be sorted.
    const nextSortOrder = !activeSort.descending; //I supposed descending is a bool, why can't I name it isDescending!!!
    setActiveSort({ column, descending: nextSortOrder }); //column is also not a good name after reading the Docs
    //sort the tableData by certain column given the shape of arrow icon shown next to the column name
    debugger;
    setData(applySort(tableData, sort[column], nextSortOrder));
  };

  const [activeSort, setActiveSort] = React.useState({});
  const [data, setData] = React.useState(tableData);
  const [columns] = React.useState(tableColumns);
  const [sort] = React.useState({
    firstName: (a, b) => stringCompare(a.firstName, b.firstNname),
    lastName: (a, b) => stringCompare(a.lastName, b.lastName)
  });

  const customiseTableWidth = (columnKey = null) => {
    if (columnKey === "avatar") {
      return "flex-1";
    }
    if (columnKey === "email") {
      return "flex-3";
    } else {
      return "flex-2";
    }
  };
  const renderHeader = () => (
    <Table.Header>
      {columns.map(c => (
        <Table.HeaderItem
          key={c.key}
          width={customiseTableWidth(c.key)}
          className={c.key === "avatar" ? [styles.table__cell__avatar] : null}
        >
          {sort[c.key] ? (
            <HeaderSort
              title={c.description}
              sortName={c.key}
              activeSort={activeSort}
              onSort={onSort}
              altText={c.description}
            />
          ) : (
            c.description
          )}
        </Table.HeaderItem>
      ))}
    </Table.Header>
  );

  const renderRow = d => (
    <Table.Row key={d.id}>
      <Table.RowItem
        columnName="Avatar"
        width={customiseTableWidth("avatar")}
        className={styles.table__cell__avatar}
      >
        {d.avatar}
      </Table.RowItem>
      <Table.RowItem columnName="First Name" width={customiseTableWidth()}>
        {d.firstName}
      </Table.RowItem>
      <Table.RowItem columnName="Last Name" width={customiseTableWidth()}>
        {d.lastName}
      </Table.RowItem>
      <Table.RowItem columnName="Company" width={customiseTableWidth()}>
        {d.company}
      </Table.RowItem>
      <Table.RowItem
        title={d.email}
        columnName="Email"
        width={customiseTableWidth("email")}
      >
        <a href={`mailto:${d.email}"`}>{d.email}</a>
      </Table.RowItem>
      <Table.RowItem columnName="Phone" width={customiseTableWidth()}>
        <a href={`tel:${d.phone}"`}>{d.phone}</a>
      </Table.RowItem>
    </Table.Row>
  );

  return (
    // <StandardTemplate
    //   pageHead={pageHead}
    //   filterBar={
    //     <SearchBar
    //       onFilterChange={handleFilterChange}
    //       filterText={filterText}
    //     ></SearchBar>
    //   }
    // >
    //   <Table>
    //     {renderHeader()}
    //     <Table.Body>{data.map(renderRow)}</Table.Body>
    //   </Table>
    // </StandardTemplate>

    <Table>
      {renderHeader()}
      <Table.Body>{data.map(renderRow)}</Table.Body>
    </Table>
  );
};

ContactsList.propTypes = {};

export default ContactsList;
