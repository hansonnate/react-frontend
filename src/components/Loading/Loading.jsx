import React from "react";
// import { Player } from "@lottiefiles/react-lottie-player";

import styles from "./Loading.module.scss";

/**
 * The loading circle of doom. Designed to be displayed whenever anything is loading. Size is customizable
 * @param {Int} height height of the image
 * @param {Int} width width of the image
 * @param {Boolean} fullScreen boolean value that determines if it is full screen
 *  * @param {String} message message or error to be displayed underneath the loading circle
 * @returns {React.ReactElement} a loading gif/image component
 */

export const Loading = ({ height = 200, width = 200, fullScreen, message }) => {
  return (
    <div className={`${fullScreen && styles.fullScreen}`}>
      {/* <Player
        autoplay
        loop
        src={require("assets/animations/loading_animation.json")}
        style={{ height: `${height}px`, width: `${width}px` }}
      /> */}
      Loading Now...      
      {message && <p>{message}</p>}
    </div>
  );
};
