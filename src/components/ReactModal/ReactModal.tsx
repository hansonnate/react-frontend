import React, { useEffect, useRef } from "react";

import Button from "components/buttons/Button/Button";

// import CloseIcon from "../CloseIcon";
import styles from "./ReactModal.module.scss";

/**
 * A modal that is displayed on top of everything else in the page
 * @param {Function} modalStyle something
 * @param children anything inside the <ReactModal></ReactModal> will be displayed with the modal is shown/activated
 * @param {Boolean} show if this is true the modal will show
 * @param {Function} onClose a function that is called when the button is clicked. Button only shows if function is given as a parameter
 * @param {Function} onSave a function that is called when the button is clicked. Button only shows if function is given as a parameter
 * @param {String} backdropStyle something
 * @param {String} saveID something
 * @returns {React.ReactElement} a ReactModal
 */


 interface Props {
  modalStyle?: Object,
  children: any,
  show: boolean,
  onClose?: Function | undefined,
  onSave?: Function | undefined,
  backdropStyle?: Object
}


const Modal:React.FC<Props> = ({
  modalStyle,
  children,
  show,
  onClose,
  onSave,
  backdropStyle,
}) => {
  const modalRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (show) {
      modalRef.current?.classList.add(styles.visible);
    } else {
      modalRef.current?.classList.remove(styles.visible);
    }
  }, [show]);
  return (
    <React.Fragment>
      <div ref={modalRef} style={backdropStyle} className={`${styles.modal}`}>
        <div style={modalStyle} className={styles.modal__wrap}>
          {children}
          <div className={styles.buttons}>
            {onClose && (
              <div className={styles.buttonclose}>
                <Button onClick={onClose}>Close</Button>
              </div>
            )}
            {onSave && (
              <div className={styles.buttonsave}>
                <Button onClick={onSave}>Save</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
