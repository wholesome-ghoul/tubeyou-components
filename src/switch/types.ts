import React from "react";

import { BaseProps, Size } from "../utils";

type Props = BaseProps & {
  children?: React.ReactNode;
  size?: Size;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export default Props;
