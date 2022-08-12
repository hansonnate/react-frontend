import React from "react";
import styles from "./TextField.module.scss";

/**
 * A simple and customized text field
 * @param {String} value value that is passed in as initial value and/or changeable value for the text field
 * @param {String} placeholder a placeholder for the text field
 * @param {Function} onChange called when the text field changes/is typed in and returns the event which contains the value accessed with : (e.target.value)
 * @returns {React.ReactElement} a simple and customized text field
 */

 interface Props {
  onChange?: Function
  value?: string
  placeholder?: string 
  type: string
  name?: string
}

export const TextFieldSimple:React.FC<Props> = ({ onChange, value, placeholder, type, name }) => {

  function handleOnChange(e: any) {
    if (onChange) {
      onChange(e);
    }
  }

  return (
    <input type={type} name={name} onChange={handleOnChange} className={styles.textField} value={value} placeholder={placeholder}>
      
    </input>
  );
}

