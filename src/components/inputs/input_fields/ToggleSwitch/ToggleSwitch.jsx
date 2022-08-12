import React, { useState } from "react";
import styles from "./ToggleSwitch.module.scss";

/**
 * a customized checkbox disguised as a switch
 * @param {Boolean} startChecked tells the component to start checked or not
 * @param {Function} handleCheck called when the switch to toggled and returns whether it is checked or not
 * @param {String} id an id that is placed in the input to be able to be referenced by javascript
 * @returns {React.ReactElement} a numberscale clickable component
 */

export const ToggleSwitch = ({ startChecked, handleCheck, id }) => {
  const [isChecked, setIsChecked] = useState(startChecked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    if (handleCheck) {
      handleCheck(isChecked);
    }
  };

  return (
    <div>
      <label className={styles.switch}>
        <input type="checkbox" checked={isChecked} onChange={handleChange} id={id}/>
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};
