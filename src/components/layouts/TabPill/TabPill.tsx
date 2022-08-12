// External
import React from "react";

// Internal
import styles from "./TabPill.module.scss";
import { TabPillItem } from "./TabPillItem";
import { TabPillItemInput } from "../../Models"

/**
 * A component that is a simple navigation bar in the form of a pill
 * @param {boolean} tabBarItems an array of objects with paths to be navigated to and displayed
 * @param {boolean} active id of the active item
 * @param {int} updateActive function to be called that updates the active menu item, takes in the item index
 * @returns {React.ReactElement} a TabPill Component
 */

interface Props {
  tabBarItems: [TabPillItemInput];
  active: string;
  updateActive: Function;
}

export const TabPill:React.FC<Props> = ({ tabBarItems, active, updateActive }) => {
  console.log(tabBarItems);
  return (
    <div className={styles.tabBarContainer}>
      <ul className={styles.tabPill}>
        {tabBarItems.map((tabBarItem) => (
          <TabPillItem
            key={tabBarItem.id}
            id={tabBarItem.id}
            label={tabBarItem.name}
            to={tabBarItem.to}
            isActive={active == tabBarItem.id}
            makeActive={(index: number) => {
              updateActive(index);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

//example of input
// const tabBarItems = [
//   {
//     id: 0,
//     name: "Questions",
//     to: `questions`,
//   },
//   {
//     id: 1,
//     name: "Design",
//     to: `design`,
//   },
// ];