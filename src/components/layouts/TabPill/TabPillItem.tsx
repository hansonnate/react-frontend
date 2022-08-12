// External
import React from "react";
import { Link } from "react-router-dom";

// Internal
import styles from "./TabPillItem.module.scss";

interface Props {
  id: string,
  label: string,
  to: string,
  isActive: boolean,
  makeActive: Function,
}

export const TabPillItem: React.FC<Props> = ({ id, label, to, isActive, makeActive }) => {
  return (
    <li>
      <Link to={to}>
        <div
          className={`${styles.tabBarItem} ${isActive && styles.activeItem}`}
          onClick={() => makeActive(id)}
        >
          {label}
        </div>
      </Link>
    </li>
  );
};
