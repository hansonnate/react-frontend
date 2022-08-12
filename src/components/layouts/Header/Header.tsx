//External
import React from "react";
import { Link } from "react-router-dom";

//Internal
import styles from "./Header.module.scss";

/**
 * A header component that has a back button option
 * @param {String} title string to be displayed
 * @param {String} backPath the path to go back to
 * @returns {React.ReactElement} a header component
 */

interface Props {
  title: string | undefined;
  backPath?: string | undefined;
}

export const Header: React.FC<Props> = ({ title, backPath }) => {
  return (
    <div className={styles.header}>
      {backPath && (
        <Link to={backPath}>
          <i className="bi bi-arrow-left"></i>
        </Link>
      )}
      <h1>{title}</h1>
    </div>
  );
};
