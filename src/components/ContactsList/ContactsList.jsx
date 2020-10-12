import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactsList.module.css";
import { Avatar, Table, HeaderSort } from "@myob/myob-widgets";
import { stringify } from "querystring";

const ContactsList = ({
  contacts,
  columns,
  filterContacts,
  filter,
  sort,
  activeSort,
  onSort
}) => {
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
        <Avatar
          type="user"
          name={d.firstName.concat(" ", d.lastName)}
          imageSource={d.avatar}
          color="regal"
        />
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

  const filtedContacts = filterContacts(filter, contacts);

  return (
    <Table>
      {renderHeader()}
      <Table.Body>{filtedContacts.map(renderRow)}</Table.Body>
    </Table>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.instanceOf(Avatar),
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      company: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string
    })
  ).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      description: PropTypes.string,
      visible: PropTypes.bool
    })
  ).isRequired
};

ContactsList.defaultProps = {};

export default ContactsList;
