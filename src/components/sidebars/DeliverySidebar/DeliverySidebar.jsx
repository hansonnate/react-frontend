import React from "react";
import styles from "./DeliverySidebar.module.scss";
import { MenuItem } from "./MenuItem";

/**
 * A sidebar specifically designed for the Deliveries Page
 * @param {Array} menuItems array of objects that have the menuItems and their paths to go to
 * @param {Int} active id of the active menuItem 
 * @param {Function} updateActive a function that is called when a menuItem is clicked on. Updates the active id
 * @returns {React.ReactElement} a DeliverySidebar component
 */

export const DeliverySidebar = ({ menuItems, active, updateActive }) => {
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
