import React from "react";
// import Normal from './Normal.png';
// import Selected from './Selected.png';
import PropTypes from "prop-types";
import { styled, Box } from "@material-ui/core";
import styles from "../resources.module.scss";


const IconWrpper = styled(Box)({
  "&:hover": {
    backgroundColor: "#eeeeee",
  },

  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UnorderList = (props) => {
  const { selected } = props;
  return (
    <div
      className={styles.icons}
    >
      <IconWrpper>
        <i
          className="bi bi-list-ul"
          style={
            selected
              ? { color: "#2a627c", fontSize: "1em" }
              : { color: "#A3A4A8", fontSize: "1em" }
          }
        />
      </IconWrpper>
      <div className={styles.hovercontent}>
        Unordered List
      </div>
    </div>
  );
};

UnorderList.defaultProps = {
  color: "#757575",
};

UnorderList.propTypes = {
  color: PropTypes.string,
};

export default UnorderList;
