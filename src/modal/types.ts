import React from "react";

import { BaseProps, Size } from "../utils";

type Props = BaseProps & {
  children?: React.ReactNode;
  size?: Size;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default Props;
