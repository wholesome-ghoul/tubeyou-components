import cx from "classnames";

import Props from "./types";
import styles from "./style.module.scss";
import StyledSwitch from "./StyledSwitch";

const Switch = ({
  children,
  checked,
  onChange,
  size,
  gridPosition,
  className,
}: Props) => {
  const styledProps = { ...gridPosition };

  return (
    <div className={styles.wrapper}>
      <label className={cx(styles.switch, styles[`${size}Switch`])}>
        <StyledSwitch
          type="checkbox"
          className={className}
          defaultChecked={checked}
          onChange={onChange}
          {...styledProps}
        />
        <span className={cx(styles.slider, styles[`${size}Slider`])}></span>
      </label>
      <div>{children}</div>
    </div>
  );
};

Switch.defaultProps = {
  size: "small",
  checked: false,
};

export default Switch;
