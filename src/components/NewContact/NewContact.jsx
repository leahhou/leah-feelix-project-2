import React from "react";
import PropTypes from "prop-types";
import styles from "./NewContact.module.css";
import { Link } from "react-router-dom";
import {
  FormTemplate,
  FormHorizontal,
  PageHead,
  Input,
  Button,
  ButtonRow,
  Card
} from "@myob/myob-widgets";

const NewContact = ({addNewContact, ...props}) => {
  const MockCardHeader = () => <PageHead title="Details" />;

  const MockCardBody = () => (
    <FormHorizontal layout="primary">
      <Input name="avatar" label="Avatar" />
      <Input
        name="firstName"
        label="First Name *"
        errorMessage="Oops this field is required"
      />
      <Input
        name="lastName"
        label="Last Name *"
        errorMessage="Oops this field is required"
      />

      <Input name="company" label="Company Name" />
      <Input name="email" label="Email" />
      <Input name="phone" label="Phone" />
    </FormHorizontal>
  );

  const pageFooter = (
    <>
      <ButtonRow
        secondary={[
          <Link exact to="/" style={{ textDecoration: 'none' }}>
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
          <Link exact to="/" style={{ textDecoration: 'none' }}>
            <Button
              key="primary-1"
              type="secondary"
              className={`${styles.button} ${styles.override}`}
            >
              Cancel
            </Button>
          </Link>,
          <Link exact to="/" style={{ textDecoration: 'none' }}>
            <Button
              key="primary-2"
              className={`${styles.button} ${styles.override}`}
            >
              Save
            </Button>
          </Link>
        ]}
      />
    </>
  );
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#ebeef1"
      }}
    >
      <FormTemplate
        actions={pageFooter}
        pageHead={<PageHead title="Create Contact"></PageHead>}
      >
        <Card
          header={
            <Card.Header
              classes={[styles.card, styles.card__header, styles.override]}
              child={<MockCardHeader />}
            />
          }
          body={<Card.Body child={<MockCardBody />} />}
        />
      </FormTemplate>
    </div>
  );
};

NewContact.propTypes = {};

export default NewContact;
