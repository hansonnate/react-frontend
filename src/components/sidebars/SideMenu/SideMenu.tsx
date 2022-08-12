//External
import React, { useState } from "react";

//Internal
import styles from "./SideMenu.module.scss";
import MenuItem from "./MenuItem";
import largelogo from "../../../assets/images/reactionlogolight.png";
import smalllogo from "../../../assets/images/circlelogo.png";
import userImage from "../../../assets/images/manlooking.png";
import idashboard from "../../../assets/icons/1x/speedometer-white.png";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { getCurrentUser } from "api/resources/organization/users";
// import { useLogoutRequest } from "api/resources/authentication/logout";
// import { gql } from "graphql-request";
// import { useGqlMutation } from "api/Api";

// added more menuItems for testing
export const items = [
  {
    id: "0za  QW1",
    name: "Dashboard",
    to: "/",
    iconClassName: "bi bi-speedometer2",
  },
  {
    id: "1",
    name: "Projects",
    to: `/projects`,
    iconClassName: "bi bi-folder2",
    // subMenus: [
    //   { name: "Delivery", to: "/projects/courses" },
    //   { name: "Survey Build", to: "/projects/videos" },
    //   { name: "Results", to: "/projects/videos" },
    // ],
  },
  {
    id: "2",
    name: "Contacts",
    to: `/contacts`,
    iconClassName: "bi bi-person",
  },
  {
    id: "3",
    name: "Organization",
    to: `/organization`,
    iconClassName: "bi bi-building",
  },
  {
    id: "4",
    name: "Notifications",
    to: `/notifications`,
    iconClassName: "bi bi-bell",
  },
  {
    id: "5",
    name: "Help",
    to: `/help`,
    iconClassName: "bi bi-question-circle",
  },
];

/**
 * @author Nate Hanson
 * @function SideMenu
 **/
/**
 * A sideMenu that is designed to be displayed in every page no matter what. It is collapsable
 * @returns {React.FC} a DeliverySidebar component
 */

export const SideMenu = () => {

  //States
  const [collapsed, collapse] = useState<boolean>(
    localStorage.getItem("sidemenustate") === "collapsed"
  );
  const [activeItem, setActiveItem] = useState<string | null>(
    localStorage.getItem("activepage")
  );
  // const getCurrUser = getCurrentUser();
  // console.log(getCurrUser);
  // const logoutRequest = useLogoutRequest();
  function handleMenuItemClick(id: string) {
    localStorage.setItem("activepage", id);
    setActiveItem(id);
  }

  // console.log(logoutRequest);
  function logout() {
    // logoutRequest.mutate();
    localStorage.removeItem("reaction_token");
    window.location.reload();
  }

  function handleToggleExpand() {
    if (collapsed) {
      localStorage.setItem("sidemenustate", "expanded");
    } else {
      localStorage.setItem("sidemenustate", "collapsed");
    }
    collapse(!collapsed);
  }

  return (
    <div
      className={`${styles.sideMenu} ${
        collapsed ? styles.collapsed : styles.expanded
      }`}
    >
      <div
        className={`${styles.logo} ${
          collapsed ? styles.smallLogo : styles.largeLogo
        }`}
        onClick={handleToggleExpand}
      >
        <img src={collapsed ? smalllogo : largelogo} alt="ReactionData" />

        {collapsed ? (
          <i className="bi bi-chevron-right"></i>
        ) : (
          <i className="bi bi-chevron-left"></i>
        )}
      </div>
      <div
        className={`${styles.mainMenu} ${
          collapsed ? styles.closedMenu : styles.openMenu
        }`}
      >
        <div
          className={`${styles.topItems} ${
            collapsed ? styles.closedMenu : styles.openMenu
          }`}
        >
          {items.slice(0, 4).map((menuItem, index) => (
            <MenuItem
              key={index}
              menuItem={menuItem}
              name={menuItem.name}
              to={menuItem.to}
              // subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              active={activeItem == menuItem.id}
              onClick={handleMenuItemClick}
            />
          ))}
        </div>
        <div
          className={`${styles.bottomItems} ${
            collapsed ? styles.closedMenu : styles.openMenu
          }`}
        >
          {items.slice(4, 6).map((menuItem, index) => (
            <MenuItem
              key={index}
              menuItem={menuItem}
              name={menuItem.name}
              to={menuItem.to}
              // subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              active={activeItem === menuItem.id}
              onClick={handleMenuItemClick}
            />
          ))}
        </div>
      </div>

      <hr className={styles.breakLine}></hr>
      <div
        className={`${styles.userContainer} ${
          collapsed ? styles.closed : styles.open
        }`}
      >
        <div className={styles.avatar}>
          <img src={userImage} alt="user" onClick={handleToggleExpand} />
        </div>
        <div className={styles.userInfo}>
          <span>
            {/* {getCurrUser.data?.me.firstName} {getCurrUser.data?.me.lastName} */}Jeremy Bikman
          </span>
        </div>
      </div>
      <div className={styles.logout}>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};
