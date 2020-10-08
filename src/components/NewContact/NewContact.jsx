import React from "react";
import PropTypes from "prop-types";
import styles from "./NewContact.module.css";
import { Link } from "react-router-dom";
import {
  FormTemplate,
  PageHead,
  Input,
  Button,
  ButtonRow,
  Card
} from "@myob/myob-widgets";

const NewContact = ({ addNewContact, ...props }) => {
  const [newContact, setNewContact] = React.useState({
    avatar: "",
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: ""
  });
  const [fNameErrorMessage, setfNameErrorMessage] = React.useState("");
  const [lNameErrorMessage, setlNameErrorMessage] = React.useState("");

  const handleInputChange = (event, field) => {
    const update = {};
    const input = event.target.value;
    update[field] = input;
    setNewContact({ ...newContact, ...update });
  };
  const mockCardHeader = <PageHead title="Details" />;

  const mockCardBody = (
    <React.Fragment>
      <Input
        name="avatar"
        label="Avatar"
        onChange={event => handleInputChange(event, "avatar")}
        value={newContact.avatar}
      />
      <Input
        name="firstName"
        label="First Name *"
        errorMessage={fNameErrorMessage}
        onChange={event => handleInputChange(event, "firstName")}
        value={newContact.firstName}
      />
      <Input
        name="lastName"
        label="Last Name *"
        errorMessage={lNameErrorMessage}
        onChange={event => {
          handleInputChange(event, "lastName");
        }}
        value={newContact.lastName}
      />

      <Input
        name="company"
        label="Company Name"
        onChange={event => {
          handleInputChange(event, "company");
        }}
        value={newContact.company}
      />
      <Input
        name="email"
        label="Email"
        onChange={event => {
          handleInputChange(event, "email");
        }}
        value={newContact.email}
      />
      <Input
        name="phone"
        label="Phone"
        onChange={event => {
          handleInputChange(event, "phone");
        }}
        value={newContact.phone}
      />
    </React.Fragment>
  );

  const pageFooter = (
    <>
      <ButtonRow
        secondary={[
          <Link exact to="/" style={{ textDecoration: "none" }}>
            <Button
              key="secondary-1"
              type="secondary"
              className={[styles.button, styles.override]}
            >
              Delete
            </Button>
          </Link>
        ]}
        primary={[
          <Link exact to="/" style={{ textDecoration: "none" }}>
            <Button
              key="primary-1"
              type="secondary"
              className={`${styles.button} ${styles.override}`}
            >
              Cancel
            </Button>
          </Link>,
          <Link exact to="/" style={{ textDecoration: "none" }}>
            <Button
              key="primary-2"
              className={`${styles.button} ${styles.override}`}
              onClick={() => {
                addNewContact(newContact);
              }}
            >
              Save
            </Button>
          </Link>
        ]}
      />
    </>
  );
  return (
    <FormTemplate
      actions={pageFooter}
      pageHead={<PageHead title="Create Contact"></PageHead>}
    >
      <Card
        header={
          <Card.Header
            classes={[styles.card, styles.card__header, styles.override]}
            child={mockCardHeader}
          />
        }
        body={<Card.Body child={mockCardBody} />}
      />
    </FormTemplate>
  );
};

NewContact.propTypes = {
  addNewContact: PropTypes.func
};

export default NewContact;
