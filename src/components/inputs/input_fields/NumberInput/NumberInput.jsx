import React, { useState } from "react";
import styles from "./NumberInput.module.scss";

/**
 * An input component for choosing a number
 * @param {Int} startNumber startingNumber for the input
 * @param {type} handleNumberChange is called when Number is changed
 * @returns {React.ReactElement} a number input component
 */

export const NumberInput = ({ startNumber, handleNumberChange }) => {
  const [number, setNumber] = useState(startNumber)

  const handleChange = (value) => {
    setNumber(value);
    if (handleNumberChange) {
      handleNumberChange(number);
    }
  };

  return (
    <div className={styles.numberbox}>
        <input type="number" value={number} onChange={(e) => handleChange(e.target.value)} min={0}/>
    </div>
  );
};
