import React, { useState } from "react";
import _ from "lodash";
import styles from "./NumChoices.module.scss";

/**
 * An input component designed for the NumberScale question. It displays the numbers in a row of clickable circles that highlights the circle that has been clicked
 * @param {Int} min minimum value
 * @param {Int} max maximum value
 * @param {Int} step the number between each value in the number scale. 
 * @param {Function} onChange is called when a number is clicked on and passes in the clicked value
 * @returns {React.ReactElement} a numberscale clickable component
 */

export const NumChoices = ({ min, max, step, onChange }) => {
  const [active, setActive] = useState(min);
  const range = _.range(min, max + 1, step);

  const handleChange = (value) => {
    setActive(value);
    if (onChange) {
        onChange(value);
    }
  };

  return (
    <div className={styles.itemContainer}>
      {range.map((value, index) => {
        return (
          <div
            key={index}
            className={`${styles.item} ${value == active && styles.active}`}
            onClick={handleChange.bind(null, value)}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};
