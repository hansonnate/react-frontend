import React, { useEffect, useRef } from "react";
// import ActionButton from "../ActionButton/ActionButton.jsx";
// import CloseIcon from "../CloseIcon";
import styles from "./DistributionModal.module.scss";

/**
 * A modal that is displayed on top of everything else in the page designed specifically for the distributions page
 * @param {Function} modalStyle something
 * @param children anything inside the <ReactModal></ReactModal> will be displayed with the modal is shown/activated
 * @param {Boolean} show if this is true the modal will show
 * @param {String} backdropStyle something
 * @returns {React.ReactElement} a DistributionModal component
 */

const Modal = ({ modalStyle, children, show, backdropStyle }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (show) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show]);
  return (
    <React.Fragment>
      <div ref={modalRef} style={backdropStyle} className={`${styles.modal}`}>
        <div style={modalStyle} className={styles.modal__wrap}>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
