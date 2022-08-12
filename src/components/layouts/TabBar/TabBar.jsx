// External
import React from "react";

// Internal
import styles from "./TabBar.module.scss";
import { TabBarItem } from "./TabBarItem";

/**
 * A component that is a simple navigation bar in forms of tabs
 * @param {boolean} tabBarItems an array of objects with paths to be navigated to and displayed
 * @param {boolean} active id of the active item
 * @param {int} updateActive function to be called that updates the active menu item, takes in the item index
 * @returns {React.ReactElement} a TabBar component
 */

export const TabBar = ({ tabBarItems, active, updateActive }) => {
  return (
    <div>
      <ul className={styles.tabBar}>
        {tabBarItems.map((tabBarItem) => (
          <TabBarItem
            key={tabBarItem.id}
            id={tabBarItem.id}
            label={tabBarItem.name}
            to={tabBarItem.to}
            isActive={active == tabBarItem.id}
            makeActive={(index) => {
              updateActive(index);
            }}
          />
        ))}
      </ul>
      <hr/>
    </div>
  );
};
