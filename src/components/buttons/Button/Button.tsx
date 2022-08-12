import React from "react";
import styles from "./Button.module.scss";

interface Props {
  onClick?: any
  white?: boolean
  blue?: boolean
  gray?: boolean
  red?: boolean
  width?: string
  id?: string
  children?: any
}

export const Button:React.FC<Props> = ({
  onClick,
  white,
  blue,
  gray,
  red,
  width,
  id,
  children,
}) => {
  return (
    <div
      className={`${white || blue || gray || red ? "" : styles.buttonboxblue} ${
        white && styles.buttonboxwhite
      } ${blue && styles.buttonboxblue} ${gray && styles.buttonboxgray} ${
        red && styles.buttonboxred
      }`}
    >
      <button
        id={id}
        onClick={onClick}
        style={{ width: width ? width : "", padding: width ? "" : "0px 20px" }}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
