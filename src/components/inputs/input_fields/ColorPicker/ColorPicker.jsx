import React, { useState, useRef } from "react";
import { BlockPicker } from "react-color";
import { Popover } from "@mui/material";
import styles from "./ColorPicker.module.scss";

/**
 * A color picker component
 * @param {Array} colors something
 * @param {String} defaultColor something
 * @param {Function} onChange a function that is called when a color is chosen
 * @returns {React.ReactElement} a simple color picker component
 */


export const ColorPicker = ({
  colors = [],
  defaultColor = "#ffffff",
  onChange,
}) => {
  const [color, setColor] = useState(defaultColor);
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef();

  const defaultColors = [
    "#2a627c",
    "#15bcc7",
    "#56d664",
    "#f9e076",
    "#ed9146",
    "#ff5147",
    "#873597",
  ];
  const colorSwatches = colors.concat(defaultColors).slice(0, 10);

  const handleOpen = () => {
    setShowPicker(true);
  };

  const handleClose = () => {
    setShowPicker(false);
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
    if (onChange) {
      onChange(color.hex);
    }
  };

  return (
    <>
      <div
        ref={pickerRef}
        style={{
          height: "2em",
          width: "2em",
          border: "1px solid #cdcdcd",
          borderRadius: "3px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleOpen}
      >
        <div
          style={{
            backgroundColor: color,
            height: "69%",
            width: "69%",
            borderRadius: "3px",
          }}
        ></div>
      </div>
      <Popover
        open={showPicker}
        anchorEl={pickerRef.current}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          sx: { backgroundColor: "transparent", boxShadow: "none" },
        }}
      >
        <div className={`p-3 ${styles.blockPicker}`}>
          <BlockPicker
            color={color}
            colors={colorSwatches}
            onChange={handleColorChange}
            onChangeComplete={handleColorChange}
          />
        </div>
      </Popover>
    </>
  );
};
