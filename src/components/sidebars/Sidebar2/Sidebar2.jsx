import React from "react";
import styles from "./Sidebar2.module.scss";
import { MenuItem } from "./MenuItem";

/**
 * A generic sub sidebar used throghout the website
 * @param {Array} menuItems array of objects that have the menuItems and their paths to go to
 * @param {Int} active id of the active menuItem 
 * @param {Function} updateActive a function that is called when a menuItem is clicked on. Updates the active id
 * @returns {React.ReactElement} a Sidebar2 component
 */

export const Sidebar2 = ({ menuItems, active, updateActive }) => {
  return (
    <ul className={styles.menu}>
      {menuItems.map((menuItem) => (
        <MenuItem
          key={menuItem.id}
          id={menuItem.id}
          label={menuItem.name}
          to={menuItem.to}
          iconClassName={menuItem.iconClassName}
          condensed
          isActive={active==menuItem.id}
          makeActive={(index) => {updateActive(index)}}
        />
      ))}
    </ul>
  );
};
