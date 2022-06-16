import React from "react";

import { BaseProps, Size } from "../utils";

type Props = BaseProps & {
  children?: React.ReactNode;
  size?: Size;
  visible: boolean;
};

export default Props;
