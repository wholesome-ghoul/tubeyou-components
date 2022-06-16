import cx from "classnames";

import Props from "./types";
import styles from "./style.module.scss";
import StyledSidebar from "./StyledSidebar";
import Container from "../container";

const Sidebar = ({ options, gridPosition, className }: Props) => {
  const styledProps = { ...gridPosition };

  const optionsLen = options.length;

  return (
    <StyledSidebar className={cx(styles.sidebar, className)} {...styledProps}>
      <Container grid={`1x${optionsLen * 3}`} className={styles.ul}>
        {options.map(({ icon, text }, index) => (
          <li key={text ?? index}>{icon}</li>
        ))}
      </Container>
    </StyledSidebar>
  );
};

Sidebar.defaultProps = {
  size: "small",
};

export default Sidebar;
