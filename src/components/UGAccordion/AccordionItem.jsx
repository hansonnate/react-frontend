import React, { useState } from "react";
import styles from "./UGAccordion.module.scss";

//custom accordian
const AccordionItem = ({ name, children }) => {
  const [visibility, setVisibility] = useState(false);
  // eslint-disable-next-line
  // const [permissions, setPermissions] = useState(item);

  const toggleVisibility = () => {
    setVisibility((v) => !v);
  };


  return (
    <>
      <div
        key={name}
        className={`${styles.header} ${
          visibility ? styles.accordionactive : ""
        }`}
        onClick={toggleVisibility}
      >
        {name}
        <span className={styles.accordionicon}>
          <i className="bi bi-chevron-left"></i>
        </span>
      </div>
      {visibility && (
        <table className={styles.body}>
          {children}   
        </table>
      )}
    </>
  );
};

export default AccordionItem;
