import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

import styles from "./SaveForm.module.scss";

/**
 * A simple form component that takes in an array of objects and neatly displays them individually
 * Example of Fields array: 
 * fields={[
    {
      label: "Name",
      field: (
        <TextField
          value={newName}
          placeholder="Audience Name"
          onChange={(e) => setNewName(e.target.value)}
        ></TextField>
      ),
    },
    {
      label: "Description",
      field: (
        <TextField
          value={newDescription}
          placeholder="Description"
          onChange={(e) => setNewDescription(e.target.value)}
        ></TextField>
      ),
    },
    {
      label: "Type",
      field: (
        <SelectField
          options={options}
          onChange={onChange}
        ></SelectField>
      ),
    },
  ]}
 * @param {Array} fields an array of field objects as shown in the example above
 * @returns {Container} a form component as a react-bootstrap container
 */

export const SaveForm = ({ fields }) => {
  return (
    // <Container className={styles.container}>
    //   {fields.map((field, index) => {
    //     return (
    //       <Row key={index} className={styles.fieldRow}>
    //         <Col xs={3} className={styles.label}>
    //           {field.label}
    //         </Col>
    //         <Col xs={9}>
    //           <Col xs={12} md={10} xl={6}>
    //             {field.field}
    //           </Col>
    //         </Col>
    //       </Row>
    //     );
    //   })}
    // </Container>
    //eslint-disable-next-line no-unused-expressions
    <div>{fields.map((field) => {field})}</div>
  );
};
