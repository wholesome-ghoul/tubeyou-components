import { useRef } from "react";
import cx from "classnames";

import Props from "./types";
import styles from "./style.module.scss";
import StyledModal from "./StyledModal";
import { capitalize } from "../utils";

const Modal = ({ children, size, gridPosition, visible, className }: Props) => {
  const styledProps = { ...gridPosition };
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <div className={cx(styles.modalWrapper, { [styles.visible]: !visible })}>
      <StyledModal
        ref={modalRef}
        className={cx(
          styles.modal,
          styles[`modal${capitalize(size)}`],
          className
        )}
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
