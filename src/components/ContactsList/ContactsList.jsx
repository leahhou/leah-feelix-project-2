import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactsList.module.css";
import {
  Avatar,
  UserAvatar,
  Table,
  HeaderSort
} from "@myob/myob-widgets";

const ContactsList = ({contacts, columns, filterContacts, filter}) => {

  // const [activeSort, setActiveSort] = React.useState({});
  // const [sort] = React.useState({
  //   firstName: (a, b) => stringCompare(a.firstName, b.firstName),
  //   lastName: (a, b) => stringCompare(a.lastName, b.lastName)
  // });

  // const stringCompare = (a, b) => {

  //   const nameA = a.toUpperCase();
  //   const nameB = b.toUpperCase();
  //   if (nameA < nameB) {
  //     return -1;
  //   }
  //   if (nameA > nameB) {
  //     return 1;
  //   }
  //   return 0;
  // };

  // const applySort = (data, sortFn, isDescending) => {
  //   const result = data.slice(); //copy the data into new variable

  //   result.sort(sortFn);
   
  //   //default sort order is ascending if no function is passed as param
  //   //sortFn: give a specific sorting logic
  //   return isDescending ? result.reverse() : result;
  // };

  // const onSort = column => {
  //   //activeSort is the shape of arrow icon shown next to column can be sorted.
  //   const nextSortOrder = !activeSort.descending; //I supposed descending is a bool, why can't I name it isDescending!!!
  //   setActiveSort({ column, descending: nextSortOrder }); //column is also not a good name after reading the Docs
  //   //sort the tableData by certain column given the shape of arrow icon shown next to the column name
  //   debugger;
  //   // setData(applySort(tableData, sort[column], nextSortOrder));
  // };

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
          className={
            c.key === "avatar" ? `${styles.table__cell__avatar}` : null
          }
        >
          {/* {sort[c.key] ? (
            <HeaderSort
              title={c.description}
              sortName={c.key}
              activeSort={activeSort}
              onSort={onSort}
              altText={c.description}
            />
          ) : (
            c.description
          )} */}
          {c.description}
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
  
  const filtedContacts = filterContacts(filter, contacts)

  return (
      <Table>
        {renderHeader()}
         <Table.Body>{filtedContacts.map(renderRow)}</Table.Body>
        {/* <Table.Body>{contacts.map(renderRow)}</Table.Body> */}

      </Table>

  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.instanceOf(UserAvatar || Avatar),
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    company: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  })).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    description: PropTypes.string,
    visible: PropTypes.bool
  })).isRequired,
};

ContactsList.defaultProps = {
};

export default ContactsList;
