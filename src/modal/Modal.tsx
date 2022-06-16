import { useRef, useState } from "react";
import cx from "classnames";

import Props from "./types";
import styles from "./style.module.scss";
import StyledModal from "./StyledModal";

const Modal = ({
  children,
  gridPosition,
  visible,
  setVisible,
  className,
}: Props) => {
  const styledProps = { ...gridPosition };
  const modalRef = useRef<HTMLDivElement>(null);

  const handler = (e: any) => {
    if (modalRef.current) {
      setVisible(!modalRef.current.contains(e.target));
    }
  };

  return (
    <div
      className={cx(styles.modalWrapper, { [styles.visible]: visible })}
      onClick={handler}
    >
      <StyledModal
        ref={modalRef}
        className={cx(styles.modal, className)}
        {...styledProps}
      >
        {children}
      </StyledModal>
    </div>
  );
};

Modal.defaultProps = {
  size: "small",
};

export default Modal;
