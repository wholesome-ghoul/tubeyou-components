import { BaseProps, Size } from "../utils";

type OPTION = {
  icon: React.ReactNode;
  text?: string;
}

type Props = BaseProps & {
  children?: React.ReactNode;
  size?: Size;
  options: OPTION[];
};

export default Props;

