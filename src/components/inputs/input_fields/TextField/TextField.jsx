import React, { useState } from "react";
// import { TextField } from "@mui/material";
// import { styled } from "@mui/material/styles";

import styles from "./TextField.module.scss";

/**
 * An auto saveable textField
 * @param {String} value value that is passed in as initial value and/or changeable value for the search text field
 * 
 * 
 * 
 * 
 * @returns {React.ReactElement} a numberscale clickable component
 */


export const EditableTextField = ({
  value,
  placeholder,
  onSave,
  align = "left",
  customStyles,
  disabled,
  inputID,
}) => {
  const [val, setVal] = useState(value);

  const saveTimer = null;

  // TODO: add a save timer while focusing on the input
  const handleChange = (event) => {
    setVal(event.target.value);
    if (onSave) {
      clearTimeout(saveTimer);
      setTimeout(onSave(event.target.value), 7000);
    }
  };

  // TODO: call onSave method when user leaves the input
  const handleFocusOut = (event) => {
    if (onSave) {
      onSave(event.target.value);
    }
  };

  return (
    <input
      className={`${styles.editableTextField} ${customStyles} ${
        align === "right" && "text-right"
      } ${align === "center" && "text-center"}`}
      type="text"
      value={val}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleFocusOut}
      disabled={disabled}
      id={inputID}
    />
  );
};

// const StyledTextField = styled(TextField)`
//   background-color: white;
//   border-radius: 5px;
//   border: 2px solid #efefef;
//   outline: none !important;

//   .MuiInputBase-root {
//     font: inherit;
//   }

//   .MuiInputLabel-root[data-shrink="true"] {
//     background-color: white;
//     padding: 1px 10px;
//     border-radius: 13px;
//     color: #2a627c;
//     text-transform: uppercase;
//     letter-spacing: 0.15em;
//     font-size: 0.7em;
//     font-weight: bold;
//   }

//   .MuiInputLabel-root[data-shrink="false"] {
//     font: inherit;
//   }

//   .MuiOutlinedInput-notchedOutline {
//     border: none;
//   }
// `;

export const TextInputField = ({
  value,
  placeholder,
  label,
  onSave,
  // onChange,
  disabled,
  inactive,
  align = "left",
  customStyles,
}) => {
  const [val, setVal] = useState(value);

  const handleChange = (event) => {
    setVal(event.target.value);

  };

  const handleFocusOut = (event) => {
    if (onSave) {
      onSave(event.target.value);
    }
  };

  const sx = {};
  if (inactive) {
    sx["& .MuiInputLabel-root[data-shrink='true']"] = { opacity: "0" };
    sx["& .MuiInputBase-input"] = { padding: "0" };
    sx.backgroundColor = "transparent";
    sx.border = "none";
  }
  if (disabled) {
    sx.backgroundColor = "transparent";
  }
  if (align === "right") {
    sx["& .MuiInputBase-input"] = { textAlign: "end" };
  }
  if (align === "center") {
    sx["& .MuiInputBase-input"] = { textAlign: "center" };
  }

  return (
    // <StyledTextField
    //   className={`${customStyles} ${align === "right" && "text-right"} ${
    //     align === "center" && "text-center"
    //   }`}
    //   label={label}
    //   placeholder={placeholder}
    //   value={val}
    //   onChange={handleChange}
    //   onBlur={handleFocusOut}
    //   fullWidth
    //   sx={sx}
    //   size="small"
    // />
    <div>Yeet</div>
  );
};
