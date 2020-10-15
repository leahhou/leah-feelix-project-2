import React from "react";
import { Link } from "react-router-dom";
import {  Button, Card} from "@myob/myob-widgets";

const NotFound = () => {
  const cardHeader = (
    <>
      <h1>404 - Not Found</h1>
      <Link exact to="/" style={{ textDecoration: "none" }}>
        <Button type="primary">Back to Home</Button>
      </Link>
    </>
  );
  return (
    <Card
        header={
          <Card.Header
            child={cardHeader}
          />
        }
      
      />
  );
};

export default NotFound;
